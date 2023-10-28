CREATE OR ALTER PROCEDURE updateProduct
@id VARCHAR(255),
@name VARCHAR(255) = NULL,
@description VARCHAR(255) = NULL,
@price DECIMAL(10,2) = NULL,
@discount DECIMAL (10,2) = NULL


AS BEGIN 

UPDATE products SET name = COALESCE(@name, name), description = COALESCE(@description, description), price = COALESCE(@price, price), discount = COALESCE(@discount, discount) WHERE id = @id


END