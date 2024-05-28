# script path: backend/script.sh

# first run the docker then execute the script (sdocker)
npm install
cp -rf ~/.env .
docker-compose -f ./docker-compose.yml up -d --build
npx prisma migrate dev --name "new db"
npm run start:dev
