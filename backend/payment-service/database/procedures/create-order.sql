CREATE OR ALTER PROCEDURE create_order
    @id VARCHAR(255),
    @customer_id VARCHAR(255),
    @customer_name VARCHAR(255),
    @product_id VARCHAR(255),
    @product_name VARCHAR(255),
    @aamount DECIMAL(10,2),
    @quantity INT,
    @discount DECIMAL(10,2),
    @status VARCHAR(255)
    AS BEGIN
INSERT INTO orders 
(id , customer_id , customer_name , product_id , product_name , aamount ,quantity , discount , status) 
VALUES 
(@id , @customer_id , @customer_name , @product_id , @product_name, @aamount , @quantity , @discount , @status)
END