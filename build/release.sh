#!/bin/bash

if [ -z "$1" ]
then
  type='release'
else
  type=$1
fi

# build
npm version $type -m '[release] '$type': @%s'
npm run build

# publish
npm publish
git push