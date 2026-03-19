// import bcrypt from "bcryptjs";

// const password = "123456";

// const hash1 = await bcrypt.hash(password, 10);
// console.log(hash1);

// // const hash2 = await bcrypt.hash(password, 10);
// // console.log(hash2);

// const ok = await bcrypt.compare(password, hash1);
// const fail = await bcrypt.compare("1234", hash1);

// console.log(ok);
// console.log(fail);

// ---

// import dotenv from "dotenv";
// dotenv.config();

import { config } from "dotenv";
config();

import jwt from "jsonwebtoken";

const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRES_IN,
});

console.log(token);
