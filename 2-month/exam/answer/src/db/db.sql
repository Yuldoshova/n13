CREATE DATABASE online_shop;

-- ====================CATEGORIES TABLE====================

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image_url VARCHAR(255),
    category_id SMALLINT,

    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO categories (name, image_url, category_id) 
VALUES
  ('Clothes', 'image.png', NULL ),
  ('Books', 'image.png', NULL),
  ('Techniques', 'image.png', NULL),
  ('Women clothes', 'image.png', 1);


-- ====================PRODUCTS TABLE====================

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  count INT NOT NULL,
  rating NUMERIC,
  image_url VARCHAR(255),
  category_id SMALLINT NOT NULL,
  
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

Select * from categories c inner join products p on c.id=p.category_id

INSERT INTO products (title, description, price, count, rating, image_url, category_id)
VALUES
  ('Coat', 'This is beautiful coat', 730000, 7, 5, 'coat-image.png', 1),
  ('Shirt', 'This is beautiful coat', 220000, 11, 4.5, 'dress-image.png', 1),
  ('Dress', 'This is beautiful coat', 570000, 18, 5, 'dress-image.png', 4),
  ('Diqqat', 'This is Kel Nyuports book', 54000, 30, 5, 'book-image.png',2),
  ('Zukkolar va Landavurlar', 'This is Malkolm Gladuels book', 44000, 70, 5, 'book-image.png',2);


-- ====================CUSTOMERS TABLE====================

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    phone VARCHAR(13) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

INSERT INTO customers (first_name, last_name, phone, password)
VALUES
  ('John', 'Doe', '998901234567','123'),
  ('Eshmat', 'Toshmatov', '998901234564','123'),
  ('Test', 'Testov', '998901234563','123'),
  ('Alex', 'Doe', '998901234561','123'),
  ('Tom', 'Doe', '998901234562','123');


-- ====================ORDERS TABLE====================

CREATE TYPE status AS ENUM ('canceled', 'pending', 'completed', 'payed', );

CREATE TABLE orders (
    id SERIAL PRIMARY KEY, 
    customer_id SMALLINT NOT NULL,
    address TEXT NOT NULL,
    order_status status  NOT NUll DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

INSERT INTO orders (customer_id, total_price, address)
VALUES
  (1, 'bu yerda address yozilgan'),
  (2, 'bu yerda address yozilgan');


-- ====================ORDER-ITEMS TABLE==================== 

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    count INT NOT NULL,
    product_id SMALLINT NOT NULL,
    order_id SMALLINT NOT NULL,

    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

INSERT INTO order_items (count, product_id, order_id)
VALUES 
  (2, 3, 1),
  (5, 1, 2),
  (5, 1, 1);


-- ====================CONTRACT_TYPES TABLE==================== 

CREATE TABLE contract_types (
  id SERIAL PRIMARY KEY,
  duration VARCHAR(50) NOT NULL,
  percentage SMALLINT NOT NULL
);

INSERT INTO contract_types (duration, percentage)
VALUES
  (0, 0),
  (5, 26),
  (10, 41),
  (15, 52);


-- ====================CONTRACTS TABLE==================== 

CREATE TABLE contracts (
    id SERIAL PRIMARY KEY,
    order_id SMALLINT NOT NULL REFERENCES orders(id),
    customer_id SMALLINT NOT NULL,
    contract_type_id SMALLINT NOT NULL REFERENCES contract_types(id),
    monthly_payment NUMERIC NOT NULL,
    isFinished BOOLEAN NOT NULL DEFAULT 'false',
    started_payment_percentage SMALLINT NOT NULL DEFAULT 25,
    total_payment NUMERIC NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);


-- ====================PAYMENTS TABLE==================== 

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    contract_id SMALLINT NOT NUll,
    customer_id SMALLINT NOT NULL, 
    total NUMERIC NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (contract_id) REFERENCES contracts(id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

