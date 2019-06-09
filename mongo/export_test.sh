BASEDIR=$(dirname "$0")

docker exec perso_mongo_test mongoexport --db cv --collection cv --out /tmp/cv.json
docker cp perso_mongo_test:/tmp/cv.json "$BASEDIR/data/test/cv.json"
docker exec perso_mongo_test rm /tmp/cv.json

docker exec perso_mongo_test mongoexport --db cv --collection cover_letter --out /tmp/cover_letter.json
docker cp perso_mongo_test:/tmp/cover_letter.json "$BASEDIR/data/test/cover_letter.json"
docker exec perso_mongo_test rm /tmp/cover_letter.json
