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
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("01", "Overwatch", "shooters", 60, 42);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("02", "Destiny 2", "shooters", 60, 7);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("03", "Star Wars BattleFront 2", "shooters", 45, 99);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("04", "StarCraft 2", "rts", 20, 3);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("05", "Halo Wars 2", "rts", 35, 10);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("06", "XCOM 2", "rts", 20, 3);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("07", "The Witcher 3", "rpg", 40, 22);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("08", "Divinity Original Sin 2", "rpg", 55, 60);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("09", "Zelda Breath of the Wild", "rpg", 60, 31);
INSERT INTO products (item_id, product_name, genre_name, price, stock_quantity) VALUES ("10", "Mario Odyssey", "rpg", 60, 17);