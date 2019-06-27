# Configuration needs to be defined in ~/.profile with the following variables:
#   - MONGO_EXPRESS_USER
#   - MONGO_EXPRESS_PASSWORD
#
if [ -f ~/.profile ]
then
  source ~/.profile
fi

mkdir -p mongo/mongo_data/prod

docker-compose down
docker-compose build
docker-compose up -d