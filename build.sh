
# Cleanup old assets
find ../../keys-server/public/docs -mtime +90 -exec rm {} \;
find ../../keys-server/public/assets -mtime +90 -exec rm {} \;

yarn vuepress build

cp -R .vuepress/dist/* ../../keys-server/public