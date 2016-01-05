# wtf-babel

Transpiling with babel 6.x on the fly is **slow as fuck**.  Seriously.  Really, really, really slow.  It seems to have gotten considerably slower since 5.x

Note: The babel 6.3.13 runs use the es2015, react, and stage-1 presets and babel 5.8.21 runs have no stages defined, which should give us stage-1 by default (I think.)


First time, with a fresh (empty) cache
```
npm start
> wtf-babel@1.0.0 start /Users/kmudrick/projects/wtf-babel
> ./run.sh

took 4026 ms to load with a single require using babel 6.3.13
took 310 ms to load with zero requires
took 591 ms to load with a single require using babel 5.8.21
```
A 6.8x performance hit?!?

```
rm old-cache.json new-cache.json
```

A second time, with the existing cache
```
npm start
> wtf-babel@1.0.0 start /Users/kmudrick/projects/wtf-babel
> ./run.sh

took 3870 ms to load with a single require using babel 6.3.13
took 264 ms to load with zero requires
took 534 ms to load with a single require using babel 5.8.21
```

7.2x performance hit!

[Oh the answer is to upgrade to npm 3 or use `npm dedupe`](https://phabricator.babeljs.io/T6756)

```
npm dedupe && npm start
> wtf-babel@1.0.0 start /Users/kmudrick/projects/wtf-babel
> ./run.sh

took 1271 ms to load with a single require using babel 6.3.13
took 273 ms to load with zero requires
took 807 ms to load with a single require using babel 5.8.21
```

Heh, this sped up babel 6 but slowed down babel 5 :)

See also: [Node’s `require` is dog slow](https://kev.inburke.com/kevin/node-require-is-dog-slow/)
