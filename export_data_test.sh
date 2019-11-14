docker exec perso_mongo_test mongoexport --db perso --collection perso --out /tmp/perso.json
docker cp perso_mongo_test:/tmp/perso.json perso.json
docker exec perso_mongo_test rm /tmp/perso.json

docker exec perso_mongo_test mongoexport --db perso --collection books --out /tmp/books.json
docker cp perso_mongo_test:/tmp/books.json books.json
docker exec perso_mongo_test rm /tmp/books.json
