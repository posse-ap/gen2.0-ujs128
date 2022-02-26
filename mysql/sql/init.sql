-- big_questionsテーブル
DROP SCHEMA IF EXISTS quizy;
CREATE DATABASE quizy;
USE quizy;

DROP TABLE IF EXISTS big_questions;

CREATE TABLE big_questions
(
  id INT(10),
  name VARCHAR(40)
);

INSERT INTO big_questions (id, name) VALUES (1, "東京の難読地名クイズ");
INSERT INTO big_questions (id, name) VALUES (2, "広島県の難読地名クイズ");



-- questionsテーブル

DROP TABLE IF EXISTS questions;

CREATE TABLE questions
(
  id INT(10),
  big_questions_id INT(10),
  image VARCHAR(40)
);

INSERT INTO questions (id, big_questions_id, image) VALUES (1, 1, "takanawa.png");
INSERT INTO questions (id, big_questions_id, image) VALUES (2, 1, "kameido.png");
INSERT INTO questions (id, big_questions_id, image) VALUES (3, 2, "nukainada.png");


-- choicesテーブル

DROP TABLE IF EXISTS choices;

CREATE TABLE choices
(
  id INT(10),
  questions_id INT(10),
  name VARCHAR(40),
  valid INT(10)
);

INSERT INTO choices (id, questions_id, name, valid) VALUES (1, 1, "たかなわ", 1);
INSERT INTO choices (id, questions_id, name, valid) VALUES (2, 1, "たかわ", 0);
INSERT INTO choices (id, questions_id, name, valid) VALUES (3, 1, "こうわ", 0);
INSERT INTO choices (id, questions_id, name, valid) VALUES (4, 2, "かめと", 0);
INSERT INTO choices (id, questions_id, name, valid) VALUES (5, 2, "かめど", 0);
INSERT INTO choices (id, questions_id, name, valid) VALUES (6, 2, "かめいど", 1);
INSERT INTO choices (id, questions_id, name, valid) VALUES (7, 3, "むこうひら", 0);
INSERT INTO choices (id, questions_id, name, valid) VALUES (8, 3, "むきひら", 0);
INSERT INTO choices (id, questions_id, name, valid) VALUES (9, 3, "むかいなだ", 1);
