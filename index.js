const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

app.post("/api/login", (req, res) => {
  const user = {
    id: Date.now(),
    userEmail: "user@example.com",
    password: "123",
  };

  jwt.sign({ user }, "secretkey", (error, token) => {
    res.json({
      token,
    });
  });
});

app.get("/api/profile", verifyToken, (request, response) => {
  jwt.verify(request.token, "secretkey", (error, authData) => {
    if (error) {
      response.sendStatus(403);
    } else {
      response.json({
        message: "Welcom to Profile",
        userData: authData,
      });
    }
  });
});

function verifyToken(request, response, next) {
  const bearerHeader = request.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    request.token = bearerToken;
    next();
  } else {
    response.sendStatus(403);
  }
}

app.listen(500, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server started on PORT 5000");
});
