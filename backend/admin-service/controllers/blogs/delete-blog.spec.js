import DB from "../../database/dbHelper.js";
import deleteBlog from "./delete-blog.js";
jest.mock("../../database/dbHelper.js");
describe("Deleting a product", () => {
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
    await deleteBlog(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it("it should error out incase the blog is not deleted successfully", async () => {
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
      rowsAffected: [0],
    });

    await deleteBlog(mockedReq, mockedRes);

    expect(mockedRes.status).toHaveBeenCalledWith(404);
  });
  it("should return a success message if the blog was deleted successfully", async () => {
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
