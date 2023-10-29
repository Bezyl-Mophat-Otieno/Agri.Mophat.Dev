import DB from "../../database/dbHelper.js";
import getAllProduct from "./get-all-product.js";

jest.mock("../../database/dbHelper.js");
describe("Get All Products Controller Testing", () => {
  it("it should error out with a 404 status if products not found", async () => {
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

    await getAllProduct(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(404);
  });
  it("it should return the array of products if they are found ", async () => {
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
        name: "test_name",
        description: "test_description",
        price: 100,
      },
      {
        id: "test_id",
        name: "test_name",
        description: "test_description",
        price: 100,
      },
    ];

    await DB.executeProcedure.mockResolvedValueOnce({
      recordset: mockedProducts,
    });

    await getAllProduct(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(200);
  });
});
