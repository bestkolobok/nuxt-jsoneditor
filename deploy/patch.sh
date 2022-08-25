#! /bin/bash

echo "!!!!! $0"
echo "===== $1"

git add -A
git commit -m 'deploy'

# abort on errors
set -e

# update package version
npm version $0

# build
npm run prepack:publish

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
