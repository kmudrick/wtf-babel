BABEL_CACHE_PATH=./new-cache.json node index-slow.js
node index-fast.js
BABEL_CACHE_PATH=./old-cache.json node index-old.js
