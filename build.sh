
# Cleanup old assets
find ../../keys-server/public/docs -mtime +30 -exec rm {} \;
find ../../keys-server/public/assets -mtime +30 -exec rm {} \;

yarn vuepress build

cp -R .vuepress/dist/* ../../keys-server/public