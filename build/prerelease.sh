#!/bin/bash

if [ -z "$1" ]
then
  type='prerelease'
else
  type=$1
fi

# build
npm version $type -m '[publish] '$type': @%s'
npm run build

# commit
git add .
git commit -m 'build'

# publish
git push origin -u dev
npm publish