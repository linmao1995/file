#�������ݿ�jd���������
DROP DATABASE IF EXISTS jd;
#�������ݿ�jd
CREATE DATABASE jd;
#�������ݿ�jd
USE jd;
#��������ѧ�����ݵı�student
CREATE TABLE student(
  sid INT,   #����
  name VARCHAR(8),  #�ַ���
  sex VARCHAR(1),
  score INT
);
#��������
INSERT INTO student VALUES('1','tom','M','81');
INSERT INTO student VALUES('2','ran','W','59');
INSERT INTO student VALUES('3','dong','��','59.5');
#��ѯ����
SELECT * FROM student;
