ENV=$1

docker cp perso_$ENV.json perso_mongo_$ENV:/tmp/perso_$ENV.json 
docker exec perso_mongo_$ENV mongoimport --db perso --collection perso --file /tmp/perso_$ENV.json
docker exec perso_mongo_$ENV rm /tmp/perso_$ENV.json

docker cp books_$ENV.json perso_mongo_$ENV:/tmp/books_$ENV.json 
docker exec perso_mongo_$ENV mongoimport --db perso --collection books --file /tmp/books_$ENV.json
docker exec perso_mongo_$ENV rm /tmp/books_$ENV.json
