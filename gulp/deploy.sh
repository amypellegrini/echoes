#!/bin/bash
git config --global user.email "farhioren@gmail.com"
git config --global user.name "travis-ci"
npm run release
cd dist
git init
git add .
git commit -m "deployed new version from travis"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1