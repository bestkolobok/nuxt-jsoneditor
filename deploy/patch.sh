#!/usr/bin/env sh

# final commit
git add -A
git commit -m 'deploy'

# abort on errors
set -e

# build
npm run prepack

# update package version
#npm version patch

# copy files to dist directory
cp package.json dist
cp LICENSE dist
cp README.md dist

# navigate into the build output directory
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# publish
#npm publish

rm -rf .git

cd -
