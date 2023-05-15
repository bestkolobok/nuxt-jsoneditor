#! /bin/bash

git add -A
git commit -m 'deploy'

# abort on errors
#set -e

# build
npm run prepack:publish

# update package version
npm version "$1"

# copy files to dist directory
cp package.json dist
cp LICENSE dist
cp README.md dist
cp .npmignore dist

# navigate into the build output directory
cd dist

git init
git checkout -b main
git add -A
git commit -m 'publish'

# publish
npm publish

rm -rf .git

cd -
