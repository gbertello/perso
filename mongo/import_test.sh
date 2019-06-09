BASEDIR=$(dirname "$0")

docker cp "$BASEDIR/data/test/cv.json" perso_mongo_test:/tmp/cv.json 
docker exec perso_mongo_test mongoimport --db cv --collection cv --drop --file /tmp/cv.json
docker exec perso_mongo_test rm /tmp/cv.json

docker cp "$BASEDIR/data/test/cover_letter.json" perso_mongo_test:/tmp/cover_letter.json 
docker exec perso_mongo_test mongoimport --db cv --collection cover_letter --drop --file /tmp/cover_letter.json
docker exec perso_mongo_test rm /tmp/cover_letter.json
