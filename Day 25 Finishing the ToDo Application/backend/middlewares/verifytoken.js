import jwt from "jsonwebtoken";
const JWT_SECRET = "joseph12345";

export function auth(req, res, next) {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).send({ message: "Unauthorized" });
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).send({ message: "Token missing" });
  }
}
