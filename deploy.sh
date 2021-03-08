#!/usr/bin/env bash


yarn build &&
cd build   &&
git init  &&
git add . &&
git commit -m "deploy"  &&
git remote add origin git@github.com:richard1230/easy_editor.git &&
git push -u origin master -f
cd -