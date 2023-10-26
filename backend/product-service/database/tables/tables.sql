CREATE TABLE products (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    image VARCHAR (255) NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    discount DECIMAL(10,2) DEFAULT 0,
    
)


DROP TABLE products