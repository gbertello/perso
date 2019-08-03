BASEDIR=$(dirname "$0")

docker cp "$BASEDIR/data/test/perso.json" perso_mongo_test:/tmp/perso.json 
docker exec perso_mongo_test mongoimport --db perso --collection perso --file /tmp/perso.json
docker exec perso_mongo_test rm /tmp/perso.json

docker cp "$BASEDIR/data/test/books.json" perso_mongo_test:/tmp/books.json 
docker exec perso_mongo_test mongoimport --db perso --collection books --file /tmp/books.json
docker exec perso_mongo_test rm /tmp/books.json
