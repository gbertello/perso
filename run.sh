#!/bin/bash -ex
#
# Configuration needs to be defined in ~/.profile with the following variables:
#   - MONGO_EXPRESS_USER
#   - MONGO_EXPRESS_PASSWORD
#

source ~/.profile

mkdir -p mongo/mongo_data/prod
mkdir -p storage

docker-compose down
docker-compose build
docker-compose up -d

until docker exec perso_mongo_prod mongo
do
  sleep 5
done

docker-compose up -d mongo_express_prod
