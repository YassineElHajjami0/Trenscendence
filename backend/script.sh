#/bin/bash

# Wait for PostgreSQL to be ready
until pg_isready -h postgres -p 5432 -U $POSTGRES_USER; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done


npx --yes prisma migrate dev --name init

# Connect to the database and create tables
# psql -h postgres -U $POSTGRES_USER -d $POSTGRES_DB << EOF

PGPASSWORD=$POSTGRES_PASSWORD psql -h postgres -U $POSTGRES_USER -d $POSTGRES_DB << EOF 

INSERT INTO "Item" (img , name , description , price , type , power , color)
VALUES ('http://localhost:3000/pd/pd1.png', 'test name1', 'test description', 10, 'paddle', 'Power', 'yellow');
INSERT INTO "Item" (img , name , description , price , type , power , color)
VALUES ('http://localhost:3000/pd/pd2.png', 'test name2', 'test description', 10, 'paddle', 'Power', 'green');
INSERT INTO "Item" (img , name , description , price , type , power , color)
VALUES ('http://localhost:3000/pd/pd3.png', 'test name3', 'test description', 10, 'paddle', 'Power', 'pink');
INSERT INTO "Item" (img , name , description , price , type , power , color)
VALUES ('http://localhost:3000/pd/pd4.png', 'test name4', 'test description', 10, 'paddle', 'Power', 'red');

INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/bn/bn1.jpeg', 'test name5', 'test description', 10, 'banner', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/bn/bn2.jpg', 'test name6', 'test description', 10, 'banner', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/bn/bn3.jpg', 'test name7', 'test description', 10, 'banner', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/bn/defaultBanner.jpg', 'test name8', 'test description', 10, 'banner', 'Power');


INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av1.png', 'test name9', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av10.png', 'test name10', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av2.png', 'test name11', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av3.png', 'test name12', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av4.png', 'test name13', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av5.png', 'test name14', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av6.png', 'test name15', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av7.png', 'test name16', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av8.png', 'test name17', 'test description', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/av/av9.png', 'test name18', 'test description', 10, 'avatar', 'Power');


EOF

echo "Data inserted successfully."

npm run start:dev