-- =========================================
-- CREATE DATABASE
-- =========================================
CREATE DATABASE IF NOT EXISTS camping_management;
USE camping_management;

-- =========================================
-- TABLE: users
-- =========================================
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- TABLE: camps
-- =========================================
CREATE TABLE camps (
    camp_id INT AUTO_INCREMENT PRIMARY KEY,
    camp_name VARCHAR(100) NOT NULL,
    location VARCHAR(150) NOT NULL,
    price_per_day DECIMAL(10,2) NOT NULL,
    capacity INT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- TABLE: bookings
-- =========================================
CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    camp_id INT NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    total_amount DECIMAL(10,2),
    booking_status VARCHAR(50) DEFAULT 'Pending',
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(user_id)
        ON DELETE CASCADE,
    FOREIGN KEY (camp_id) REFERENCES camps(camp_id)
        ON DELETE CASCADE
);

-- =========================================
-- TABLE: payments
-- =========================================
CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50),
    payment_status VARCHAR(50) DEFAULT 'Completed',
    
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
        ON DELETE CASCADE
);

-- =========================================
-- INSERT SAMPLE DATA
-- =========================================
INSERT INTO users (full_name, email, phone, password)
VALUES 
('Ali Khan', 'ali@gmail.com', '9876543210', '12345'),
('Rahim Shaikh', 'rahim@gmail.com', '9876501234', '12345');

INSERT INTO camps (camp_name, location, price_per_day, capacity, description)
VALUES
('Mountain Adventure', 'Manali', 2500.00, 20, 'Beautiful mountain camping experience'),
('Desert Camp', 'Jaisalmer', 1800.00, 15, 'Enjoy desert safari and night camping');

-- =========================================
-- VIEW ALL TABLES
-- =========================================
SHOW TABLES;

-- =========================================
-- SELECT EXAMPLE
-- =========================================
SELECT * FROM users;
SELECT * FROM camps;
SELECT * FROM bookings;
SELECT * FROM payments;