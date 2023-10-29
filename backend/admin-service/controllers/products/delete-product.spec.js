import deleteProduct from "./delete-product.js";
import DB from "../../database/dbHelper.js";

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
    await deleteProduct(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it("it should error out incase the product is not deleted successfully", async () => {
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

    await deleteProduct(mockedReq, mockedRes);

    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it("should return a success message if the product was deleted successfully", async () => {
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
