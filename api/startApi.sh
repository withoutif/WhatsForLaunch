#!/bin/bash

TAG="launch-box"
docker build -t "$TAG" .
docker run \
  -p 3001:3001 -d "$TAG"

