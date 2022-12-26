rm -rf ./firebase-public-root

mkdir ./firebase-public-root

yarn run build

cp -r ./public/* ./firebase-public-root

cp -r ./dist/* ./firebase-public-root