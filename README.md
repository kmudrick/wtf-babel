# wtf-babel

Transpiling with babel 6.x on the fly is **slow as fuck**.  Seriously.  Really, really, really slow.

This uses the latest babel-register with the es2015, react, and stage-1 presets (6.3.13 right now).


```
npm start
> wtf-babel@1.0.0 start /Users/kmudrick/projects/wtf-babel
> ./run.sh

took 6441 ms to load with a single require using babel 6.3.13
took 531 ms to load with zero requires
took 968 ms to load with a single require using babel 5.8.21
```

A 12x performance hit?!?

If those of us trying to build apps that are universal / isomorphic / whatever the fuck name we are calling it this week, and node itself requires restarts on source changes... what are we supposed to do?
