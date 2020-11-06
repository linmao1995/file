#丢弃数据库tedu，如果存在
DROP DATABASE IF EXISTS tedu;
#创建数据库tedu
CREATE DATABASE tedu;
#进入数据库tedu
USE tedu;
#创建保存员工数据的表emp
CREATE TABLE emp(
  id INT,
  ename VARCHAR(8),
  phone VARCHAR(11),
  addr VARCHAR(16)
);
#插入数据
INSERT INTO emp VALUES('1','ran','18112345678','beijing');
INSERT INTO emp VALUES('2','dong','13988888888','shanghai');
#查询结果
SELECT * FROM emp;

