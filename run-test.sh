#!/bin/bash -ex
#
#

source ~/.profile

rm -rf mongo/mongo_data/test
mkdir -p mongo/mongo_data/test

docker network create --driver bridge test &> /dev/null || true
docker-compose -f docker-compose-test.yml down
docker-compose -f docker-compose-test.yml build
docker-compose -f docker-compose-test.yml up -d

until docker exec perso_mongo_test mongo
do
  sleep 5
done

docker-compose -f docker-compose-test.yml up -d mongo_express_test
./mongo/import_test.sh
