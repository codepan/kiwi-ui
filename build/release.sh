#!/bin/bash

if [ -z "$1" ]
then
  type='patch'
else
  type=$1
fi

git add . && git commit -m 'build'

npm version $type -m '[publish] '$type': @%s' && node build.js && npm publish && git push origin master:master