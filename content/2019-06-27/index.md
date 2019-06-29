---
title: "Post Mortem - Inevitable Heat Death (Of The Universe)"
cover: "https://unsplash.it/1280/100/?random?HeatDeath"
date: "2019/06/27"
category: "game"
tags:
    - "post-mortem"
    - demo
---

## Code

[https://github.com/thistle-and-thorn/ihd](https://github.com/thistle-and-thorn/ihd)

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/E23PKOaIBwg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Writeup
*by Zach*

### What is IHD(OTU)?
In our game, *Inevitable Heat Death (Of The Universe)*, the player is responsible for the lives of people living in the
grasslands. These people run to their homes at the first sight of fire spreading across the plains, but they might not escape
the fire's path. The player can swap tiles in the world to create a natural barrier of water to keep the villages scattered
across the plains protected from the flames. If the player manages to save any villagers by the time the fire has spread as
much as it can, the game progresses with a new map and new villagers to save.

On a scale of 1-10, I think I would rate this a 3.

### What did we do?
This game was programmed over the course of 5 weekends, where Patrick and I met up for about 4-6 hours each Saturday. We
jumped into programming the game on day 1. At that point the design wasn't fully fleshed out, but we instead had a 
tile-swapping mechanic that I implemented in another project, and Patrick wanted to mess with Perlin noise. We wanted to
improve on those two pillars and see where we would go.

The game design slowly grew in scope as we worked. We found at every turn the prototype just *wasn't fun*. We would shrug, hit
our heads against the wall meekly, and guess at what might not be working and try to improve it. The game continued to diverge
from the original idea: "the player makes a bridge of gradient color across a noisy landscape". The way we had decided to do
the tile-swapping and noise generation meant that the resolution was much too low to even see a "landscape" in a 12x12 grid.

On the final weekend, I made some too-loud and too-simple "dynamic" music in about an hour, and Patrick worked on making the
menu screens and win states for the game. Working on that was like putting the metaphorical nail in the coffin - we wanted to
be done with the project even though we still had some cool ideas remaining. The extra trappings for the game needed a solid
foundation, so we needed to say we had finished the core mechanic. Patrick had just discovered that making the game turn-based
made the game more fun, but we had to say goodbye.

### What went well?

#### Fast iteration
We were able to move really quickly and hash out multiple features in a half day of work. Each day felt like we made progress 
for the game. This was a far cry from both of our day jobs. It was nice to be able to know that making each line perfect would
be a waste of our time, and it would be better to just press on and discover problems later. I think in that way, we hit "bigger"
problems more than small ones. We realize now that we need a better structure for our code, which we can add into the foundation
of our next project.

#### Pair programming for foundational code
Even though I struggle to pay attention during pair programming, it was good to start the project out together instead of immediately
splitting off into separate areas. We were able to work out the foundation of the mechanics early on, and really refine it through constant
communication.

#### Keeping scope small
This took us roughly 25 hours to complete which equates to around 50 engineer-hours total. I think that length of time was
a great start to reinforcing a habit for making projects like this. Even though the game isn’t super fun, I think if we had
a larger vision, our motivation might have petered out before we completed anything, even if the game was actually gonna be fun.

### What didn't go well?

#### Unity project VS
This wasn't a great experience. We had to wait for somebody to finish up editing a file to avoid merge conflicts at times. It wasn't fun.
We’re more comfortable with git, plus it gives us more control. 

#### Do a bit more planning at the outset
We came up with the game design as we worked. Not so bad for a project like this, but I think we will feel more satisfaction
from creating a project that we're proud of. This first game was... meh. I want to make a game that is better than meh.

#### Plan to split work and come up with more isolated areas of code to work on
We ended up creating a huge class (GridStage) that did a lot of things. Familiarity with code goes down once the code
you wrote suddenly gets expanded upon by somebody else. We would also benefit from creating more modules in our code in
the next project. Learning class structure is almost as important as learning how to code in the first place.
