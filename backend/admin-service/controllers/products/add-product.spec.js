import addProduct from "./add-product.js";
import DB from "../../database/dbHelper.js";

jest.mock("../../database/dbHelper.js");
describe("Add Product Controller Testing", () => {
  it("It should error out if the required fields are not provided", async () => {
    const mockedReq = {
      body: {
        name: "",
        description: "",
        price: "",
      },
    };

    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await addProduct(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
  it("it should error out if the product was not added", async () => {
    const mockedReq = {
      body: {
        name: "test",
        description: "test",
        price: 100,
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await DB.executeProcedure.mockResolvedValueOnce({
      rowsAffected: [0],
    });

    await addProduct(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(400);
    expect(mockedRes.json).toHaveBeenCalledWith({
      message: "Product was not added",
    });
  });
  it("it should return a success message if the product was added", async () => {
    const mockedReq = {
      body: {
        name: "test",
        description: "test",
        price: 100,
      },
    };
    const mockedRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await DB.executeProcedure.mockResolvedValueOnce({
      rowsAffected: [1],
    });
    await addProduct(mockedReq, mockedRes);
    expect(mockedRes.status).toHaveBeenCalledWith(201);
    expect(mockedRes.json).toHaveBeenCalledWith({
      message: "Product added successfully",
    });
  });
});
