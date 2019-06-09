BASEDIR=$(dirname "$0")

docker cp "$BASEDIR/data/prod/cv.json" perso_mongo_prod:/tmp/cv.json 
docker exec perso_mongo_prod mongoimport --db cv --collection cv --drop --file /tmp/cv.json
docker exec perso_mongo_prod rm /tmp/cv.json

docker cp "$BASEDIR/data/prod/cover_letter.json" perso_mongo_prod:/tmp/cover_letter.json 
docker exec perso_mongo_prod mongoimport --db cv --collection cover_letter --drop --file /tmp/cover_letter.json
docker exec perso_mongo_prod rm /tmp/cover_letter.json
