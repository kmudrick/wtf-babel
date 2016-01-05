var start = (new Date()).getTime();

require('babel/register');

require('./lib/foo');

console.log('took %s ms to load with a single require using babel 5.8.21', (new Date()).getTime() - start);
