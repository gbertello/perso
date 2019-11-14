#!/bin/bash -ex

source ~/.profile

docker network create --driver bridge test &> /dev/null || true
docker-compose -f docker-compose-test.yml down || true

if (docker exec perso_mongo_test mongo); then
  echo "Shut down mongo db before cleaning up data directory"
  exit 1
fi

mkdir -p storage/db/test

docker-compose -f docker-compose-test.yml build
docker-compose -f docker-compose-test.yml up -d

until docker exec perso_mongo_test mongo
do
  sleep 5
done
