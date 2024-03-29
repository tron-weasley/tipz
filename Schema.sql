-- CREATE DATABASE user123;
USE user123;

CREATE TABLE userData (
  username VARCHAR(45) NOT NULL,
  password VARCHAR(30) NOT NULL
);

CREATE TABLE mileageData (
  id INT NOT NULL AUTO_INCREMENT,
  mileage DECIMAL (10,3) NOT NULL,
  category VARCHAR(20) NOT NULL,
  mileageDate DATE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE tipsData (
  id INT NOT NULL AUTO_INCREMENT,
  tips  DECIMAL (10,2)  NOT NULL,
  tipsDate DATE NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM userData;
SELECT * FROM mileageData;
SELECT * FROM tipsData;