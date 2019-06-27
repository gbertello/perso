if [ -f ~/.profile ]
then
  source ~/.profile
fi

if [ -z "$MONGO_EXPRESS_USER_TEST" ] 
then
  echo -n User:
  read MONGO_EXPRESS_USER_TEST
  export MONGO_EXPRESS_USER_TEST=$MONGO_EXPRESS_USER_TEST
fi

if [ -z "$MONGO_EXPRESS_PASSWORD_TEST" ] 
then
  echo -n Password:
  read -s MONGO_EXPRESS_PASSWORD_TEST
  echo
  export MONGO_EXPRESS_PASSWORD_TEST=$MONGO_EXPRESS_PASSWORD_TEST
fi

mkdir -p mongo/mongo_data/test

docker-compose -f docker-compose-test.yml down
docker-compose -f docker-compose-test.yml build
docker-compose -f docker-compose-test.yml up -d

until docker exec perso_mongo_test mongo
do
  sleep 5
done

docker-compose -f docker-compose-test.yml up -d mongo_express_test
./mongo/import_test.sh
