CREATE OR ALTER PROCEDURE getSingleBlog

@id VARCHAR(255)

    AS BEGIN
  SELECT * FROM blogs WHERE id = @id

    END;