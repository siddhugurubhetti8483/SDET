const testUser = {
  firstname: "John",
  lastname: "Doe",
  email: `john${Date.now()}@test.com`,
  telephone: "9876543210",
};

const loginData = {
  firstname: "John",
  lastname: "Doe",
  email: `john123@test.com`,
  telephone: "8788589586",
  password: "John123@",
  passwordConfirm: "John123@",
};

export default { testUser, loginData };
