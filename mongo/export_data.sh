ENV=$1

docker exec perso_mongo_$ENV mongoexport --db perso --collection perso --out /tmp/perso_$ENV.json
docker cp perso_mongo_$ENV:/tmp/perso_$ENV.json perso_$ENV.json
docker exec perso_mongo_$ENV rm /tmp/perso_$ENV.json

docker exec perso_mongo_$ENV mongoexport --db perso --collection books --out /tmp/books_$ENV.json
docker cp perso_mongo_$ENV:/tmp/books_$ENV.json books_$ENV.json
docker exec perso_mongo_$ENV rm /tmp/books_$ENV.json
