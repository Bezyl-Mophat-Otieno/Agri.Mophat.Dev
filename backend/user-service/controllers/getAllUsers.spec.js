import DB from "../database/dbHelper.js";
import getAllUsers from "./getAllUsers.js";

jest.mock("../database/dbHelper.js");
describe("Get All Users Controller Testing", () => {
  it("it should error out with a 404 status if users not found", async () => {
    const mockedReq = {
      body: {},
    };

    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await DB.executeProcedure.mockResolvedValueOnce({
      recordset: [],
    });

    await getAllUsers(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(404);
  });
  it("it should return the array of users if they are found ", async () => {
    const mockedReq = {
      body: {},
    };

    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockedProducts = [
      {
        id: "test_id",
        username: "test_title",
        email: "test_content",
      },
      {
        id: "test_id",
        username: "test_title",
        email: "test_content",
      },
    ];

    await DB.executeProcedure.mockResolvedValueOnce({
      recordset: mockedProducts,
    });

    await getAllUsers(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(200);
  });
});
