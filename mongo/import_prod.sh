BASEDIR=$(dirname "$0")

docker cp "$BASEDIR/data/prod/cv.json" perso_mongo_prod:/tmp/cv.json 
docker exec -it perso_mongo_prod mongoimport --db cv --collection cv --file /tmp/cv.json
docker exec -it perso_mongo_prod rm /tmp/cv.json
