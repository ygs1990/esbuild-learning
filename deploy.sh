#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
# cd docs/.vuepress/dist

git add -A
git commit -m 'deploy'
git push

# git init
# git add README.md
# git commit -m "first commit"
# git remote add origin https://github.com/ygs1990/esbuild-learning.git
# git branch -M main
# git push -u origin main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:ygs1990/esbuild-learning.git master:gh-pages

cd -