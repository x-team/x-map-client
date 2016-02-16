#!/bin/bash
set -ev

TAG=$1

# build
docker build -t xteam/x-map:$TAG .

# push to docker hub
docker login -e="$DOCKER_EMAIL" -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD"
docker push xteam/x-map