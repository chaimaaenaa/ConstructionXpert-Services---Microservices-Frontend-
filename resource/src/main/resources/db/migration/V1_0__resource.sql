CREATE TABLE resource (
                          resource_id INT PRIMARY KEY AUTO_INCREMENT,
                          resource_name VARCHAR(255) NOT NULL,
                          resource_type VARCHAR(255) NOT NULL,
                          provider_information TEXT,
                          quantity DOUBLE,
                          task_id BIGINT NOT NULL

);