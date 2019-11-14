docker exec perso_mongo_prod mongoexport --db perso --collection perso --out /tmp/perso.json
docker cp perso_mongo_prod:/tmp/perso.json perso.json
docker exec perso_mongo_prod rm /tmp/perso.json

docker exec perso_mongo_prod mongoexport --db perso --collection books --out /tmp/books.json
docker cp perso_mongo_prod:/tmp/books.json books.json
docker exec perso_mongo_prod rm /tmp/books.json
