# stats-map [![Build Status](https://travis-ci.org/SamVerschueren/stats-map.svg?branch=master)](https://travis-ci.org/SamVerschueren/stats-map)

> [Mem](https://github.com/sindresorhus/mem) cache [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) that keeps track of the hits and misses


## Install

```
$ npm install --save stats-map
```


## Usage

```js
const StatsMap = require('./');
const mem = require('mem');

let i = 0;
const counter = () => ++i;

const cache = new StatsMap();
const memoized = mem(counter, {cache});

memoized('foo');
//=> 1

// cached as it's the same argument
memoized('foo');
//=> 1

// not cached anymore as the argument changed
memoized('bar');
//=> 2

memoized('bar');
//=> 2

console.log(cache.stats);
//=> {hits: 2, misses: 2}
```


## API

### StatsMap([iterable])

Inherits from [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

##### .stats

Type: `object`

The statistics of the map like the `hits` and `misses`.


## Related

- [mem](https://github.com/sindresorhus/mem) - Memoize functions - An optimization used to speed up consecutive function calls by caching the result of calls with identical input.


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
