mkdir -p mongo/data/prod

if [ -z "$MONGO_EXPRESS_USER" ] 
then
  echo -n User:
  read MONGO_EXPRESS_USER
  export MONGO_EXPRESS_USER=$MONGO_EXPRESS_USER
fi

if [ -z "$MONGO_EXPRESS_PASSWORD" ] 
then
  echo -n Password:
  read -s MONGO_EXPRESS_PASSWORD
  echo
  export MONGO_EXPRESS_PASSWORD=$MONGO_EXPRESS_PASSWORD
fi

docker-compose down
docker-compose build
docker-compose up -d