psql -h postgres -U $POSTGRES_USER -d $POSTGRES_DB << EOF

INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/pd1.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/pd2.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/pd3.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/pd4.png, 'test name', 'test description', 10, 'Type', 'Power');

INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/bn1.jpeg, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/bn2.jpg, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/bn3.jpg, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/defaultBanner.jpg, 'test name', 'test description', 10, 'Type', 'Power');


INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av1.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av10.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av2.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av3.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av4.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av5.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av6.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av7.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av8.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av9.png, 'test name', 'test description', 10, 'Type', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/default.png, 'test name', 'test description', 10, 'Type', 'Power');


EOF