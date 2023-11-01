import DB from "../../database/dbHelper.js";
import createOrder from "./create-order.js";

jest.mock("../../database/dbHelper.js");
describe("create order", () => {
  it("should error out if all the required fields are not provided", async () => {
    const mockedReq = {
      body: {},
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await createOrder(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it("it should error out incase the order creation fails", async () => {
    const mockedReq = {
      body: {
        customer_id: "1",
        customer_name: "customer",
        product_id: "1",
        product_name: "product",
        aamount: 100,
        quantity: 1,
        discount: 0,
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await DB.executeProcedure.mockResolvedValueOnce({
      rowsAffected: [0],
    });
    await createOrder(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it('should create order successfully',async()=>{
    const mockedReq = {
      body: {
        customer_id: "1",
        customer_name: "customer",
        product_id: "1",
        product_name: "product",
        aamount: 100,
        quantity: 1,
        discount: 0,
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await DB.executeProcedure.mockResolvedValueOnce({
      rowsAffected: [1],
    });
    await createOrder(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(201);
  })
});
