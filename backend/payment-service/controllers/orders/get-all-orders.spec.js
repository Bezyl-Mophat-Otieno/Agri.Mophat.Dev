import DB from "../../database/dbHelper.js";
import getAllOrders from "./get-all-orders.js";

jest.mock("../../database/dbHelper.js");
describe("get all orders", () => {
  it("should get all orders successfully", async () => {
    const mockedReq = {
      body: {},
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await DB.executeProcedure.mockResolvedValue({
      recordset: [{ id: 1 }],
    });
    await getAllOrders(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(200);
  });
  it("should error out incase of orders are not fetched ", async () => {
    const mockedReq = {
      body: {},
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await DB.executeProcedure.mockResolvedValue({
      recordset: [],
    });

    await getAllOrders(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
});
