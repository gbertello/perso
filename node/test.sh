#!/bin/bash -e

CWD=$(cd $(dirname $0) && pwd)
PARENT=$(dirname $CWD)

source $CWD/lib/common.sh

SYSTEM="test"

NETWORK=$SYSTEM
IMAGE=${PARENT##*/}_${CWD##*/}_${SYSTEM}
VOLUME=$CWD/test/disk
TARGET_VOLUME=/app/storage

SYSTEM_TEST="pytest"

DOCKERFILE_TEST=$CWD/Dockerfile_test
IMAGE_TEST=${PARENT##*/}_${CWD##*/}_${SYSTEM_TEST}

stop -i $IMAGE_TEST &> /dev/null || true
stop -i $IMAGE &> /dev/null || true
$CWD/../mongo/stop.sh -s test &> /dev/null || true

OPTIONS=""
OPTIONS="$OPTIONS -v $VOLUME:$TARGET_VOLUME"

mkdir -p $VOLUME
$CWD/../mongo/start.sh -s test
start -i $IMAGE -n $NETWORK -s $SYSTEM $OPTIONS
start -i $IMAGE_TEST -d $DOCKERFILE_TEST -n $NETWORK -s $SYSTEM_TEST

docker exec $IMAGE_TEST pytest -q --color=yes test.py

stop -i $IMAGE_TEST &> /dev/null || true
stop -i $IMAGE &> /dev/null || true
$CWD/../mongo/stop.sh -s test &> /dev/null || true

rm -rf $CWD/../mongo/disk/test
