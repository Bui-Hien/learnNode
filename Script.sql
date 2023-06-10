CREATE table Users (
	id int not null AUTO_INCREMENT PRIMARY KEY,
	email varchar(255),
	name varchar(255),
	city varchar(255)
);

INSERT INTO Users (email, name, city)
	VALUES ('hien@gmail.com', 'hien', 'hanoi')
	
SELECT * FROM Users