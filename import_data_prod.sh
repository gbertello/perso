docker cp perso.json perso_mongo_prod:/tmp/perso.json 
docker exec perso_mongo_prod mongoimport --db perso --collection perso --file /tmp/perso.json
docker exec perso_mongo_prod rm /tmp/perso.json

docker cp books.json perso_mongo_prod:/tmp/books.json 
docker exec perso_mongo_prod mongoimport --db perso --collection books --file /tmp/books.json
docker exec perso_mongo_prod rm /tmp/books.json
