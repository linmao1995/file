#�������ݿ�tedu���������
DROP DATABASE IF EXISTS tedu;
#�������ݿ�tedu
CREATE DATABASE tedu;
#�������ݿ�tedu
USE tedu;
#��������Ա�����ݵı�emp
CREATE TABLE emp(
  id INT,
  ename VARCHAR(8),
  phone VARCHAR(11),
  addr VARCHAR(16)
);
#��������
INSERT INTO emp VALUES('1','ran','18112345678','beijing');
INSERT INTO emp VALUES('2','dong','13988888888','shanghai');
#��ѯ���
SELECT * FROM emp;

