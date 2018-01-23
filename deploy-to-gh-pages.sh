#!/bin/bash

# Make sure to delete elementnet-deploy or use a CI
cd ..
git clone --recursive git@github.com:elementnet/elementnet-www elementnet-deploy --branch=reorganize # for testing
cd elementnet-deploy
mv gh-pages-config .
rm -r heroku-config
mv errors .
cd editor
npm install
cd ..

# git push --force -S git@github.com:elementnet/elementnet.github.io
# not pushing for now for testing purposes
