-- =========================================
--  CAFE MANAGEMENT SYSTEM DATABASE
-- =========================================

-- Create Database
CREATE DATABASE IF NOT EXISTS cafe_management;
USE cafe_management;

-- =========================================
-- 1. USERS TABLE (Admin / Staff)
-- =========================================
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin','staff') DEFAULT 'staff',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- 2. CUSTOMERS TABLE
-- =========================================
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- 3. CATEGORIES TABLE
-- =========================================
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
);

-- =========================================
-- 4. PRODUCTS TABLE
-- =========================================
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(150) NOT NULL,
    category_id INT,
    price DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- =========================================
-- 5. ORDERS TABLE
-- =========================================
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10,2),
    status ENUM('pending','completed','cancelled') DEFAULT 'pending',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- =========================================
-- 6. ORDER DETAILS TABLE
-- =========================================
CREATE TABLE order_details (
    order_detail_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- =========================================
-- 7. PAYMENTS TABLE
-- =========================================
CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    amount DECIMAL(10,2),
    payment_method ENUM('cash','card','upi'),
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

-- =========================================
-- SAMPLE DATA INSERT
-- =========================================

INSERT INTO categories (category_name) VALUES 
('Coffee'), ('Tea'), ('Snacks');

INSERT INTO products (product_name, category_id, price, stock) VALUES
('Cappuccino', 1, 120.00, 50),
('Masala Tea', 2, 40.00, 100),
('Sandwich', 3, 80.00, 30);

INSERT INTO users (username, password, role) VALUES
('admin', 'admin123', 'admin'),
('staff1', 'staff123', 'staff');

-- =========================================
-- END OF DATABASE
-- =========================================