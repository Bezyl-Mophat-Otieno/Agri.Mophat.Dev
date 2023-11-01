import DB from "../../database/dbHelper.js";
import getSingleOrder from "./get-single-order.js";

jest.mock("../../database/dbHelper.js");
describe("Get All Products Controller Testing", () => {
  it("it should error out if the customer id is not provided", async () => {
    const mockedReq = {
      params: {
        id: "",
      },
    };

    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getSingleOrder(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });

  it("it should error out with a 404 status if order not found", async () => {
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

    await getSingleOrder(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(404);
  });
  it("it should return the  orders if found ", async () => {
    const mockedReq = {
      params: {
        id: "test_id",
      },
    };

    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockedOrders = [
      {
        customer_id: "1",
        customer_name: "customer",
        product_id: "1",
        product_name: "product",
        aamount: 100,
        quantity: 1,
        discount: 0,
      },
    ];

    await DB.executeProcedure.mockResolvedValueOnce({
      recordset: mockedOrders,
    });

    await getSingleOrder(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(200);
  });
});
