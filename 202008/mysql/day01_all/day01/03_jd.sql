#丢弃数据库jd，如果存在
DROP DATABASE IF EXISTS jd;
#创建数据库jd
CREATE DATABASE jd;
#进入数据库jd
USE jd;
#创建保存学生数据的表student
CREATE TABLE student(
  sid INT,   #整型
  name VARCHAR(8),  #字符串
  sex VARCHAR(1),
  score INT
);
#插入数据
INSERT INTO student VALUES('1','tom','M','81');
INSERT INTO student VALUES('2','ran','W','59');
INSERT INTO student VALUES('3','dong','男','59.5');
#查询数据
SELECT * FROM student;
