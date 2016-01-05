var start = (new Date()).getTime();

require('babel-register')({
  presets: [ 'es2015', 'stage-1', 'react' ]
});

require('./lib/foo');

console.log('took %s ms to load with a single require using babel 6.3.13', (new Date()).getTime() - start);
