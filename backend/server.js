import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";

const salt = 10;

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(cookieParser());
//db
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "auth",
});
// connect to db
db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to the database");
  }
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token not valid" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

app.get("/", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

//  Register
app.post("/register", (req, res) => {
  // Pengecekan apakah req.body dan req.body.password ada
  if (!req.body || !req.body.password) {
    return res.status(400).json({ Error: "Invalid request body" });
  }

  const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)";

  // Hashing password
  bcrypt.hash(req.body.password.toString(), salt, (hashErr, hashed) => {
    if (hashErr) {
      console.error("Error hashing password:", hashErr);
      return res.status(500).json({ Error: "Error during password hashing" });
    }

    const values = [req.body.name, req.body.email, hashed];

    // Insert data into the database
    db.query(sql, [values], (insertErr, result) => {
      if (insertErr) {
        console.error("Insert data error:", insertErr);
        return res.status(500).json({ Error: "Error during data insertion" });
      }

      return res.json({ Status: "Register Success" });
    });
  });
});

//   Login
app.post("/login", (req, res) => {
  // Pengecekan apakah req.body dan req.body.password ada
  if (!req.body || !req.body.password) {
    return res.status(400).json({ Error: "Invalid request body" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) {
      console.error("Login in server error:", err);
      return res.status(500).json({ Error: "Login in server" });
    }

    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (compareErr, response) => {
          if (compareErr) {
            console.error("Password compare error:", compareErr);
            return res.status(500).json({ Error: "Login error" });
          }

          if (response) {
            const name = data[0].name;
            const token = jwt.sign({ name }, "jwt-secret-key", {
              expiresIn: "1d",
            });
            res.cookie("token", token, { httpOnly: true, secure: true });
            return res.json({ Status: "Login Succes" });
          } else {
            // Pesan respons yang lebih umum untuk keamanan
            return res.status(401).json({ Error: "Invalid credentials" });
          }
        }
      );
    } else {
      // Pesan respons yang lebih umum untuk keamanan
      return res.status(401).json({ Error: "Invalid credentials" });
    }
  });
});
//     Logout
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Logout Success" });
});

app.listen(8081, () => {
  console.log("Running...");
});
