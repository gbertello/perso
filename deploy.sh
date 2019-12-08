#!/bin/bash -ex

ENV=$1

source ~/.profile

docker network create --driver bridge $ENV &> /dev/null || true
mkdir -p storage/db/$ENV

docker-compose -f docker-compose-$ENV.yml build
docker-compose -f docker-compose-$ENV.yml up -d

until docker exec perso_mongo_$ENV mongo
do
  sleep 5
done
