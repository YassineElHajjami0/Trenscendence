psql -h postgres -U $POSTGRES_USER -d $POSTGRES_DB << EOF

INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/pd/pd1.png', 'test name', 'test description', 10, 'paddle', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/pd/pd2.png', 'test name', 'test description', 10, 'paddle', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/pd/pd3.png', 'test name', 'test description', 10, 'paddle', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/pd/pd4.png', 'test name', 'test description', 10, 'paddle', 'Power');

INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/bn/bn1.jpeg', 'test name', 'test description', 10, 'banner', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/bn/bn2.jpg', 'test name', 'test description', 10, 'banner', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/bn/bn3.jpg', 'test name', 'test description', 10, 'banner', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/bn/defaultBanner.jpg', 'test name', 'test description', 10, 'banner', 'Power');


INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av1.png', 'test name', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av10.png', 'test name', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av2.png', 'test name', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av3.png', 'test name', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av4.png', 'test name', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av5.png', 'test name', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av6.png', 'test name', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av7.png', 'test name', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av8.png', 'test name', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av9.png', 'test name', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av10.png', 'test name', 'test description', 10, 'avatar', 'Power');

EOF