CREATE OR ALTER PROCEDURE addBlog
@id VARCHAR(255),
@title VARCHAR(255),
@content VARCHAR(255),
@image VARCHAR(255) = NULL,
@coverImage VARCHAR(255) = NULL


AS BEGIN

INSERT INTO blogs (id, title, content, image, coverImage) VALUES (@id, @title, @content, @image, @coverImage)


END;