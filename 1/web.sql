CREATE DATABASE web;
CREATE USER 'aeren'@'localhost' IDENTIFIED BY 'alieren';
GRANT ALL PRIVILEGES ON web.* TO 'aeren'@'localhost';
ALTER USER 'aeren'@'localhost' IDENTIFIED WITH mysql_native_password BY 'alieren';
FLUSH PRIVILEGES;
GRANT SELECT, INSERT, UPDATE, DELETE ON web.* TO 'aeren'@'localhost';
FLUSH PRIVILEGES;



