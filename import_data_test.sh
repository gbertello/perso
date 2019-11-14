docker cp perso.json perso_mongo_test:/tmp/perso.json 
docker exec perso_mongo_test mongoimport --db perso --collection perso --file /tmp/perso.json
docker exec perso_mongo_test rm /tmp/perso.json

docker cp books.json perso_mongo_test:/tmp/books.json 
docker exec perso_mongo_test mongoimport --db perso --collection books --file /tmp/books.json
docker exec perso_mongo_test rm /tmp/books.json
