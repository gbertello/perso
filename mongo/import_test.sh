BASEDIR=$(dirname "$0")

docker cp "$BASEDIR/data/test/cv.json" perso_mongo_test:/tmp/cv.json 
docker exec perso_mongo_test mongoimport --db cv --collection cv --drop --file /tmp/cv.json
docker exec perso_mongo_test rm /tmp/cv.json
