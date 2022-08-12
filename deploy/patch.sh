#!/usr/bin/env sh

# final commit
git add -A
git commit -m 'deploy'

# abort on errors
set -e

# update package version
npm version patch

# build
npm run prepack

# copy files to dist directory
cp package.json dist
cp LICENSE dist
cp README.md dist
cp .npmignore dist

npm publish dist

# navigate into the build output directory
#cd dist

#git init
#git checkout -b develop
#git add -A
#git commit -m 'deploy'

# update package version
#npm version patch

#npm pack

# publish
#npm publish dist

#rm -rf .git

#cd -
