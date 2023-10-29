import DB from "../../database/dbHelper.js";
import updateProduct from "./update-product.js";

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
    await updateProduct(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it("it should error out incase the product is not updated successfully", async () => {
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

    await updateProduct(mockedReq, mockedRes);

    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it("should return a success message if the product was updated successfully", async () => {
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
