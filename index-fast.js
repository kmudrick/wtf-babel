var start = (new Date()).getTime();

require('babel-register')({
  presets: [ 'es2015', 'stage-1', 'react' ]
});

console.log('took %s ms to load with zero requires', (new Date()).getTime() - start);
