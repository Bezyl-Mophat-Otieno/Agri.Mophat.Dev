import DB from "../../database/dbHelper.js";
import getAllBlogs from "./get-all-blogs.js";

jest.mock("../../database/dbHelper.js");
describe("Get All Products Controller Testing", () => {
  it("it should error out with a 404 status if blogs not found", async () => {
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

    await getAllBlogs(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(404);
  });
  it("it should return the array of blogs if they are found ", async () => {
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
        title: "test_title",
        content: "test_content",
      },
      {
        id: "test_id",
        title: "test_title",
        content: "test_content",
      },
    ];

    await DB.executeProcedure.mockResolvedValueOnce({
      recordset: mockedProducts,
    });

    await getAllBlogs(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(200);
  });
});
