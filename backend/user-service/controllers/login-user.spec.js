import loginUser from "./login-user.js";
import DB from "../database/dbHelper.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

jest.mock("../database/dbHelper.js");
jest.mock("bcryptjs");
jest.mock("jsonwebtoken");
describe("Login a User", () => {
  it("it should error out incase the email or password is not provided", async () => {
    const mockedReq = {
      body: {
        email: "",
        password: "",
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await loginUser(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });

  it("it should error out incase a user is not found with the provided email", async () => {
    const mockedReq = {
      body: {
        email: "test_email",
        password: "test_password",
      },
    };

    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await DB.executeProcedure.mockResolvedValue({
      recordset: [],
    });

    await loginUser(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(404);
  });

  it("should error out incase of invalid credentials", async () => {
    const mockedReq = {
      body: {
        email: "test_email",
        password: "test_password",
      },
    };

    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockedUser = {
      username: "test_username",
      email: "test_email",
      password: "test_password",
    };

    await DB.executeProcedure.mockResolvedValue({
      recordset: [mockedUser],
    });

    await bcrypt.compare.mockResolvedValue(false);

    await loginUser(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it("it should return a token incase of successful login", async () => {
    const mockedReq = {
      body: {
        email: "test_email",
        password: "test_password",
      },
    };

    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockedUser = {
      username: "test_username",
      email: "test_email",
      password: "test_password",
    };

    await DB.executeProcedure.mockResolvedValue({
      recordset: [mockedUser],
    });

    await bcrypt.compare.mockResolvedValue(true);

    const token = "test_token";

    Jwt.sign.mockReturnValue(token);

    await loginUser(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(200);
    expect(mockedRes.json).toHaveBeenCalledWith({
      message: "Login successful",
      token,
    });
  });
});
