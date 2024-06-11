# script path: backend/script.sh

# first run the docker then execute the script (sdocker)
npm install
cp -rf ~/.env .
docker-compose -f ./docker-compose.yml up -d --build
npx prisma migrate dev --name "new db"
npm run start:dev

INSERT INTO "Achievement" ("name" , "description" , "uri")
VALUES ('First Win','Win your first match', '/Precision_Paddler.png');

INSERT INTO "Achievement" ("name" , "description" , "uri")
VALUES ('First Defeat', 'You have faced your first defeat. Rise and fight again!', '/first_defeat.png');
INSERT INTO "Achievement" ("name" , "description" , "uri")
VALUES ('Flawless Victory', 'Win a single match without letting your opponent score a single point.', '/flawless.png');
INSERT INTO "Achievement" ("name" , "description" , "uri")
VALUES ('Marathon Match', 'You have shown true stamina by completing a match that lasted over 5 minutes.', '/Speed_Demon.png');

INSERT INTO "Achievement" ("name" , "description" , "uri")
VALUES ('Ping Pong Pro', 'Win 50 matches against tough opponents', '/ping_pong_pro.png');

INSERT INTO "Achievement" ("name" , "description" , "uri")
VALUES ('AI Conqueror', 'Defeat the AI opponent on the highest difficulty level in a single match.', '/ai_conqueror.png');




