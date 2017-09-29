if [ -d "./node_modules/" ]; then
  gulp
else
  npm install && gulp
fi
