# docker-deploy

CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100)
);

INSERT INTO users (name, email)
VALUES
('Jeannot', 'diambujeannot@gmail.com'),
('Docker'),
('PostgreSQL');
