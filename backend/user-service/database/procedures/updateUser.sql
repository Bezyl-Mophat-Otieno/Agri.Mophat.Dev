CREATE OR ALTER PROCEDURE updateUser
@id VARCHAR(255),
@username VARCHAR(255) = NULL,
@email VARCHAR(255) = NULL,
@password VARCHAR(255) = NULL,
@active BIT = NULL


AS BEGIN

UPDATE users SET username = COALESCE(@username, username),
email = COALESCE(@email, email),   
password = COALESCE(@password, password),
active = COALESCE(@active, active)
WHERE id = @id;
END 

    