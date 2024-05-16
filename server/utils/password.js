import bcrypt from "bcryptjs";

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);
  return passwordHash;
};

export const matchPassword = async (enteredPassword, userPassword) => {
  return await bcrypt.compare(enteredPassword, userPassword);
};

const obj = {
  name: "John",
  address: {
    city: "New York",
    country: {
      name: "United States",
      code: "US",
    },
  },
};

const {
  address: {
    country: { code },
  },
} = obj;

console.log(code);
