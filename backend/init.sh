#/bin/bash

# Wait for PostgreSQL to be ready
until pg_isready -h postgres -p 5432 -U $POSTGRES_USER; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done


npx --yes prisma migrate dev --name init

# Connect to the database and create tables
psql -h postgres -U $POSTGRES_USER -d $POSTGRES_DB << EOF

INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('http://localhost:3000/test.png', 'test name', 'test description', 10, 'Type', 'Power');

EOF

echo "Data inserted successfully."

npm run start:dev