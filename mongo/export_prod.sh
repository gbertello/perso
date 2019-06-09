BASEDIR=$(dirname "$0")

docker exec perso_mongo_prod mongoexport --db cv --collection cv --out /tmp/cv.json
docker cp perso_mongo_prod:/tmp/cv.json "$BASEDIR/data/prod/cv.json"
docker exec perso_mongo_prod rm /tmp/cv.json

docker exec perso_mongo_prod mongoexport --db cv --collection cover_letter --out /tmp/cover_letter.json
docker cp perso_mongo_prod:/tmp/cover_letter.json "$BASEDIR/data/prod/cover_letter.json"
docker exec perso_mongo_prod rm /tmp/cover_letter.json