#!/bin/bash -ex
#
# Configuration needs to be defined in ~/.profile with the following variables:
#   - MONGO_EXPRESS_USER
#

source ~/.profile

mkdir -p mongo/db/prod
mkdir -p storage

docker network create --driver bridge prod &> /dev/null
docker-compose down
docker-compose build
docker-compose up -d

until docker exec perso_mongo_prod mongo
do
  sleep 5
done

docker-compose up -d mongo_express_prod
