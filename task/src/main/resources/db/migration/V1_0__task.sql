CREATE TABLE task (
                      task_id INT PRIMARY KEY AUTO_INCREMENT,
                      task_name VARCHAR(255) NOT NULL,
                      task_description TEXT,
                      task_start DATE,
                      task_end DATE,
                      task_status ENUM('not_started', 'In_Progress', 'Completed') NOT NULL ,
                      project_id BIGINT NOT NULL
)



