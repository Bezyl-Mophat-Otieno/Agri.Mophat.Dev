CREATE OR ALTER PROCEDURE cancelOrder
    @id VARCHAR(255)
    AS BEGIN
    UPDATE Orders SET status = 'cancelled' WHERE id = @id;
END