CREATE OR ALTER PROCEDURE deleteBlog
@id VARCHAR(255)
AS BEGIN 

DELETE blogs WHERE id = @id
END ;