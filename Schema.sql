DROP DATABASE IF EXISTS hamazon_db;
CREATE database hamazon_db;

USE hamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_id VARCHAR(100) NOT NULL,
  product_name VARCHAR(100) NULL,
  genre_name VARCHAR(100) NULL,
  price INT(255) NULL,
  stock_quantity INT(255) NULL,
  PRIMARY KEY (id)
);

SELECT * FROM products;

-- Insert a set of records.
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("OVRW", "Overwatch", "Shooters", 60, 42);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("DTN2", "Destiny 2", "Shooters", 60, 7);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("SWB2", "Star Wars BattleFront 2", "Shooters", 45, 99);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("SCT2", "StarCraft 2", "RTS", 20, 3);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("HLW2", "Halo Wars 2", "RTS", 35, 10);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("XCM2", "XCOM 2", "RTS", 20, 3);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("TWR2", "The Witcher 3", "RPG", 40, 22);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("DOS2", "Divinity Original Sin 2", "RPG", 55, 60);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("ZBTW", "Zelda Breath of the Wild", "RPG", 60, 31);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("MARO", "Mario Odyssey", "RPG", 60, 17);