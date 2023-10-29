import addBlog from "./add-blog.js";
import DB from "../../database/dbHelper.js";

jest.mock("../../database/dbHelper.js");
describe("Posting of Blogs", () => {
  it("it should error out incase the required fields  are not provided", async () => {
    const mockedReq = {
      body: {
        title: "",
        content: "",
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await addBlog(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it("it should error out if blog no added successfully", async () => {
    const mockedReq = {
      body: {
        title: "test_title",
        content: "test_content",
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await DB.executeProcedure.mockResolvedValueOnce({
      rowsAffected: [0],
    });

    await addBlog(mockedReq , mockedRes)
    expect(mockedRes.status).toHaveBeenCalledWith(400)
  });
  it('it should return  success if the blog is added successully',async()=>{

        const mockedReq = {
      body: {
        title: "test_title",
        content: "test_content",
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await DB.executeProcedure.mockResolvedValueOnce({
      rowsAffected: [1],
    });

    await addBlog(mockedReq , mockedRes)
    expect(mockedRes.status).toHaveBeenCalledWith(201)

  })
});
