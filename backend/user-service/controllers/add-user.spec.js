import DB from "../database/dbHelper.js";
import addUser from "./add-user.js";
import bcrypt from "bcryptjs";

jest.mock("../database/dbHelper.js");
jest.mock("bcryptjs");
describe("Posting of Blogs", () => {
  it("it should error out incase the required fields  are not provided", async () => {
    const mockedReq = {
      body: {
        username: "",
        email: "",
        password: "",
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await addUser(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it("it should error out if user is  not registered successfully", async () => {
    const mockedReq = {
      body: {
        username: "",
        email: "",
        password: "",
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await DB.executeProcedure.mockResolvedValue({
      rowsAffected: [0],
    });

    await addUser(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });

  it("it should make sure the password is hashed", async () => {
    const mockedReq = {
      body: {
        username: "test",
        email: "test",
        password: "test",
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await bcrypt.hash.mockResolvedValueOnce("duhcvythgftewy");
    const hashedPassword = await bcrypt.hash("test", 10);
    expect(bcrypt.hash).toHaveBeenCalledWith("test", 10);
    expect(hashedPassword).toEqual("duhcvythgftewy");
  });

  it("it should return success incase the user is registered successfully", async () => {
    const mockedReq = {
      body: {
        username: "test",
        email: "test",
        password: "test",
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await DB.executeProcedure.mockResolvedValue({
      rowsAffected: [1],
    });

    await addUser(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(201);
  });
});
