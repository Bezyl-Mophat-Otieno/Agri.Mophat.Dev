CREATE OR ALTER PROCEDURE updateOrder 
    @id VARCHAR(255),
    @customer_id VARCHAR(255) = NULL,
    @customer_name VARCHAR(255) = NULL,
    @product_id VARCHAR(255) = NULL,
    @product_name VARCHAR(255) = NULL,
    @quantity INT = NULL,
    @discount DECIMAL(10,2) = NULL,
    @status VARCHAR(255) = NULL
    AS BEGIN
    UPDATE Orders SET 
    customer_id = COALESCE(@customer_id, customer_id),
    customer_name = COALESCE(@customer_name,customer_name),
    product_id = COALESCE(@product_id,product_id),
    product_name = COALESCE(@product_name,product_name),
    quantity = COALESCE(@quantity,quantity),
    discount = COALESCE(@discount,discount),
    status = COALESCE(@status,status)
    WHERE id = @id;
END