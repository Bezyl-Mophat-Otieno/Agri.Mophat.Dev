CREATE OR ALTER PROCEDURE addProduct
@id VARCHAR(255),
@name VARCHAR(255),
@description VARCHAR(255),
@price DECIMAL(10,2)

AS BEGIN 

INSERT INTO products (id, name, description, price) VALUES (@id, @name, @description, @price)

END ;

