#!/bin/bash

cd ..
git clone --recursive git@github.com:elementnet/elementnet-www elementnet-deploy
cd elementnet-deploy
git checkout reorganize
git pull origin reorganize # in case path exists
mv gh-pages-config .
rm -r heroku-config
mv errors .
cd editor
npm install
cd ..

# git push --force -S git@github.com:elementnet/elementnet.github.io
# not pushing for now for testing purposes
