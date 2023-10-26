CREATE TABLE users (
    id VARCHAR (255) PRIMARY KEY,
    username VARCHAR(255) ,
    email VARCHAR (255) UNIQUE NOT NULL,
    password VARCHAR (255) NOT NULL,
)

ALTER TABLE users
ADD active BIT DEFAULT 1;