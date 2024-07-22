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


INSERT INTO "Achievement" (name, description, uri)
VALUES ('First Win', 'Win your first match', 'http://localhost:3000/ach/first_win.png');
INSERT INTO "Achievement" (name, description, uri)
VALUES ('First Defeat', 'You have faced your first defeat. Rise and fight again!', 'http://localhost:3000/ach/first_defeat.png');
INSERT INTO "Achievement" (name, description, uri)
VALUES ('Flawless Victory', 'Win a single match without letting your opponent score a single point.', 'http://localhost:3000/ach/flawless.png');
INSERT INTO "Achievement" (name, description, uri)
VALUES ('Marathon Match', 'You have shown true stamina by completing a match that lasted over 5 minutes.', 'http://localhost:3000/ach/Speed_Demon.png');
INSERT INTO "Achievement" (name, description, uri)
VALUES ('Ping Pong Pro', 'Win 50 matches against tough opponents', 'http://localhost:3000/ach/ping_pong_pro.png');
INSERT INTO "Achievement" (name, description, uri)
VALUES ('AI Conqueror', 'Defeat the AI opponent on the highest difficulty level in a single match.', 'http://localhost:3000/ach/ai_conqueror.png');

EOF

echo "Data inserted successfully."

npm run start:dev