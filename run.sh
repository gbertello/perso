#!/bin/bash -ex

source ~/.profile

docker network create --driver bridge prod &> /dev/null || true
docker-compose down || true

mkdir -p storage/db/prod
mkdir -p storage/node/prod

docker-compose build
docker-compose up -d

until docker exec perso_mongo_prod mongo
do
  sleep 5
done
