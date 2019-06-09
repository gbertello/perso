BASEDIR=$(dirname "$0")

docker exec perso_mongo_prod mongoexport --db cv --collection cv --out /tmp/cv.json
docker cp perso_mongo_prod:/tmp/cv.json "$BASEDIR/data/prod/cv.json"
docker exec perso_mongo_prod rm /tmp/cv.json