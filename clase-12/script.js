import bcrypt from "bcryptjs";

const password = "123456";

const hash1 = await bcrypt.hash(password, 10);
console.log(hash1);

const hash2 = await bcrypt.hash(password, 10);
console.log(hash2);
