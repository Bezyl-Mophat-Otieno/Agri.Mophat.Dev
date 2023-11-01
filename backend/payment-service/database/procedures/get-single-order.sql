CREATE OR ALTER PROCEDURE getSingleOrder
    @customer_id VARCHAR(255)
    AS BEGIN
    SELECT * FROM Orders WHERE customer_id = @customer_id;
END