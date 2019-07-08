BASEDIR=$(dirname "$0")

docker cp "$BASEDIR/data/test/cv.json" perso_mongo_test:/tmp/cv.json 
docker exec perso_mongo_test mongoimport --db perso --collection cv --file /tmp/cv.json
docker exec perso_mongo_test rm /tmp/cv.json

docker cp "$BASEDIR/data/test/cover_letter.json" perso_mongo_test:/tmp/cover_letter.json 
docker exec perso_mongo_test mongoimport --db perso --collection cover_letter --file /tmp/cover_letter.json
docker exec perso_mongo_test rm /tmp/cover_letter.json

docker cp "$BASEDIR/data/test/loisirs.json" perso_mongo_test:/tmp/loisirs.json 
docker exec perso_mongo_test mongoimport --db perso --collection loisirs --file /tmp/loisirs.json
docker exec perso_mongo_test rm /tmp/loisirs.json
