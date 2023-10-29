import updateBlog from "./update-blog.js";
import DB from "../../database/dbHelper.js";

jest.mock("../../database/dbHelper.js");

describe("Update Blog Details", () => {
  it("should error out incase the Id is not provided", async () => {
    const mockedReq = {
      params: {},
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await updateBlog(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it("it should error out incase the blog is not updated", async () => {
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
    await updateBlog(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(404);
  });
  it("should return success message incase the blog is updated sucessfully", async () => {
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
    await updateBlog(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(200);
  });
});
