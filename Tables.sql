-- Active: 1659486260281@@35.226.146.116@3306@hooks-4313208-bryan-oliveira
CREATE TABLE labeSystem_Class(
	class_id VARCHAR(255) NOT NULL PRIMARY KEY,
	class_name VARCHAR(50) NOT NULL,
	initial_date DATE NOT NULL,
	final_date DATE NOT NULL,
	module INT NOT NULL
);

INSERT INTO labeSystem_Class(class_id, class_name, initial_date, final_date, module)
	VALUES("class1", "Hooks", "2022/01/24", "2023/02/10", "6"),
		  ("class2", "Hooper", "2023/01/24", "2024/02/10", "5"),
          ("class3", "Molina", "2021/01/24", "2021/06/10", "7"),
          ("class4", "Jackson", "2022/06/24", "2023/06/20", "4"),
          ("class5", "Dummont", "2020/01/24", "2021/02/10", "0");
          
CREATE TABLE labeSystem_Students(
	student_id VARCHAR(255) NOT NULL,
	student_name VARCHAR(100) NOT NULL,
	student_email VARCHAR(100) NOT NULL UNIQUE,
	birth_date DATE NOT NULL,
	id_class VARCHAR(255) NOT NULL ,
	FOREIGN KEY (id_class) REFERENCES labeSystem_Class (class_id)
);

INSERT INTO labeSystem_Students(student_id, student_name, student_email, birth_date, id_class)
	VALUES("student1", "Leandro", "Le0406@hotmail.com", "1985-01-04", "class1"),
		  ("student2", "Sandra", "Sandrapira_couto@hotmail.com", "1980-03-30", "class2"),
          ("student3", "Sara", "Sara454@hotmail.com", "2003-05-09", "class3");
          
CREATE TABLE labeSystem_teachers (
	teacher_id VARCHAR(255) NOT NULL PRIMARY KEY,
	id_class VARCHAR(255) NOT NULL ,
	teacher_name VARCHAR(100) NOT NULL,
	teacher_email VARCHAR(100) NOT NULL UNIQUE,
	birth_date DATE NOT NULL,
	FOREIGN KEY (id_class) REFERENCES labeSystem_Class(class_id)
);  

INSERT INTO labeSystem_teachers(teacher_id, id_class, teacher_name, teacher_email, birth_date)
	VALUES("teacher1", "class1", "Mazzi", "Mazzi@labenu.com", "1993-05-07"),
		  ("teacher2", "class2", "Helany", "Helany@labenu.com", "1987-01-07"),
		  ("teacher3", "class3", "Chijo", "Chijo@labenu.com", "1992-04-01");
          
CREATE TABLE labeSystem_hobbies (
	hobby_id Varchar(255) NOT NULL primary key,
    hobby_name VARCHAR(100) NOT NULL
);    

INSERT INTO labeSystem_hobbies(hobby_id, hobby_name)    
	VALUES("hobby1", "Ler livros"),
		  ("hobby2", "Pescar"),
          ("hobby3", "Cavalgar"),
          ("hobby4", "Dançar");
          
CREATE TABLE labeSystem_specialities  (
	speciality_id VARCHAR(255) NOT NULL PRIMARY KEY,
    speciality_name VARCHAR(100) NOT NULL
); 

INSERT INTO labeSystem_specialities(speciality_id, speciality_name) 
	VALUES("speciality1","Javascript"),
		  ("speciality2","React"),
          ("speciality3","Html"),
          ("speciality4","CSS"),
          ("speciality5","Typescript");
          
  CREATE TABLE labeSystem_teacherSpeciality(
	id VARCHAR(255) PRIMARY KEY,
	teacherSpec_id VARCHAR(255) NOT NULL,
    special_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (teacherSpec_id) REFERENCES labeSystem_teachers(teacher_id),
    FOREIGN KEY (special_id) REFERENCES labeSystem_specialities(speciality_id)
);        

          
          
          