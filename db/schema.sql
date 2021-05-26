
/* dropping any existing database */
DROP DATABASE IF EXISTS cardcommerce_db;

/* creating a new database */
CREATE DATABASE cardcommerce_db;

/* using the newly created database*/
USE DATABASE cardcommerce_db; 

CREATE TABLE customer (
  customer_id INT NOT NULL AUTO_INCREMENT,
  first_name varchar (255) NOT NULL,
  last_name varchar (255) NOT NULL,
  email varchar(255) NOT NULL,
  pass_word varchar(255) NOT NULL,
  address1 varchar(255) NOT NULL,
  address2 varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  state varchar(255) NOT NULL,
  zip_code int NOT NULL,
  phone_number int,
  PRIMARY KEY (customer_id)
);

CREATE TABLE orders (
  order_id INT NOT NULL AUTO_INCREMENT,
  customer_id INT NOT NULL,
  order_date varchar(255) NOT NULL,
  shipping_date varchar(255) NOT NULL,
  PRIMARY KEY(order_id)
);

CREATE TABLE order_details (
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  total_cost DECIMAL (4, 2) NOT NULL,
);

CREATE TABLE cards (
  product_id INT NOT NULL AUTO_INCREMENT,
  occasion varchar (255) NOT NULL,
  design varchar (255) NOT NULL,
  message_type varchar (255) NOT NULL,
  font varchar (255) NOT NULL,
  plays_music BOOLEAN NOT NULL,
  card_price DECIMAL (4, 2) NOT NULL,
  stock INT NOT NULL,
  PRIMARY KEY (product_id)
);

