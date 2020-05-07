#!/bin/bash -e

CWD=$(cd $(dirname $0) && pwd)
PARENT=$(dirname $CWD)

source $CWD/lib/common.sh
source ~/.bash_profile

SYSTEM="dev"
while getopts ":s:" option; do
  case "${option}" in
    s)
      SYSTEM=${OPTARG}
      ;;
  esac
done

VOLUME=$CWD/disk/$SYSTEM
TARGET_VOLUME=/app/storage

NETWORK=$SYSTEM
IMAGE=${PARENT##*/}_${CWD##*/}_${SYSTEM}

stop -i $IMAGE &> /dev/null || true

OPTIONS=""
OPTIONS="$OPTIONS -v $VOLUME:$TARGET_VOLUME"

if [[ $ENV -eq "prod" ]]
then
  OPTIONS="$OPTIONS -r always"
  OPTIONS="$OPTIONS -e USER=$USER|PASSWORD=$PASSWORD"
fi

mkdir -p $VOLUME
start -i $IMAGE -s $SYSTEM -n $NETWORK $OPTIONS
