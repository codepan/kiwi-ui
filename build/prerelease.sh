#!/bin/bash

if [ -z "$1" ]
then
  type='prerelease'
else
  type=$1
fi

# build
npm version $type -m '[prerelease] '$type': @%s'
npm run build

# publish
npm publish
git push