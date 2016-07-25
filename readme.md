# stats-map [![Build Status](https://travis-ci.org/SamVerschueren/stats-map.svg?branch=master)](https://travis-ci.org/SamVerschueren/stats-map)

> [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) that keeps track of the hits and misses


## Install

```
$ npm install --save stats-map
```


## Usage

```js
const StatsMap = require('stats-map');

const map = new StatsMap();
map.set('foo', 'bar');

map.get('foo');
//=> 'bar'

map.get('unicorn');
//=> undefined

console.log(map.stats);
//=> {hits: 1, misses: 1}
```


## API

### StatsMap([iterable])

Inherits from [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

##### .stats

Type: `object`

The statistics of the map like the `hits` and `misses`.


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
