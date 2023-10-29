CREATE OR ALTER PROCEDURE updateBlog
@id VARCHAR(255),
@title VARCHAR(255) = NULL,
@content VARCHAR(255)=NULL,
@image VARCHAR(255) = NULL,
@coverImage VARCHAR(255) = NULL,
@views INT = NULL ,
@likes INT = NULL ,
@updated_at DATETIME = NULL

AS BEGIN


UPDATE blogs SET title = COALESCE(@title,title), content = COALESCE(@content,content), image = COALESCE(@image,image), coverImage = COALESCE(@coverImage,coverImage), updated_at = COALESCE(@updated_at,updated_at) , likes = COALESCE(@likes , likes) , views = COALESCE(@views , views) WHERE id = @id

END ;