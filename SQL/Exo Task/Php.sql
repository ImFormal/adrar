CREATE DATABASE IF NOT EXISTS Task CHARSET utf8mb4;

use Task;

CREATE TABLE IF NOT EXISTS `account` (
    id_account INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    `password` VARCHAR(100) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS task (
    id_task INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    content VARCHAR(250) NOT NULL,
    create_at DATETIME NOT NULL,
    `status` TINYINT(1) NOT NULL,
    id_account INT NOT NULL
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS task_category (
	id_task INT NOT NULL,
    id_category INT NOT NULL,
    PRIMARY KEY(id_task, id_category)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS category (
    id_category INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(50) UNIQUE NOT NULL
) ENGINE = InnoDB;


ALTER TABLE task ADD CONSTRAINT fk_taskAccount FOREIGN KEY (id_account) REFERENCES `account`(id_account) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE task_category ADD CONSTRAINT fk_taskCategoryTask FOREIGN KEY (id_task) REFERENCES task(id_task) ON DELETE CASCADE;
ALTER TABLE task_category ADD CONSTRAINT fk_taskCategoryCategory FOREIGN KEY (id_category) REFERENCES category(id_category) ON DELETE CASCADE;