-- explicit form of update where you list the column names you have data for
INSERT INTO people (id, name, age) VALUES (1, 'Jonesy', 54);
INSERT INTO pets (id, name, breed, age, dead) VALUES (1, 'Fluffy', 'Unicorn', 1000, 0);

-- shorter syntax if we have data for every column
INSERT INTO people VALUES (2, 'Craigsy', 17);
INSERT INTO pets VALUES (2, 'Gigantor', 'Robot', 1, 1);
