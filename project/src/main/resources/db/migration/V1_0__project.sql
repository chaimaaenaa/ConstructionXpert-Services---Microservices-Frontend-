CREATE TABLE project (
                         project_id INT PRIMARY KEY AUTO_INCREMENT,
                         project_name VARCHAR(255) NOT NULL,
                         project_description TEXT,
                         project_start_date DATE,
                         project_end_date DATE,
                         project_cost DOUBLE
);
