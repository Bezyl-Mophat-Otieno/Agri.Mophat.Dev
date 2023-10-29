import DB from "../database/dbHelper.js";
import deleteUser from "./delete-user.js";
jest.mock("../database/dbHelper.js");
describe("Deleting a User", () => {
  it("should error out incase the ID is not provided", async () => {
    const mockedReq = {
      params: {
        id: "",
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await deleteUser(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it("it should error out incase the user is not deleted successfully", async () => {
    const mockedReq = {
      params: {
        id: "test_id",
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await DB.executeProcedure.mockResolvedValueOnce({
      rowsAffected: [],
    });

    await deleteUser(mockedReq, mockedRes);

    expect(mockedRes.status).toHaveBeenCalledWith(404);
  });
  it("should return a success message if the user was deleted successfully", async () => {
    const mockedReq = {
      params: {
        id: "test_id",
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await DB.executeProcedure.mockResolvedValueOnce({
      rowsAffected: [1],
    });
  });
});
