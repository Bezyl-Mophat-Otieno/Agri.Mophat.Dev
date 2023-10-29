import DB from "../../database/dbHelper.js";
import getSingleProduct from "./get-single-product.js";

jest.mock("../../database/dbHelper.js");
describe("Get All Products Controller Testing", () => {
  it("it should error out if the products id is not provided", async () => {
    const mockedReq = {
      params: {
        id: "",
      },
    };

    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getSingleProduct(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });

  it("it should error out with a 404 status if product not found", async () => {
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
      recordset: [],
    });

    await getSingleProduct(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(404);
  });
  it("it should return the  product if  it's found ", async () => {
    const mockedReq = {
      params: {
        id: "test_id",
      },
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
    ];

    await DB.executeProcedure.mockResolvedValueOnce({
      recordset: mockedProducts,
    });

    await getSingleProduct(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(200);
  });
});
