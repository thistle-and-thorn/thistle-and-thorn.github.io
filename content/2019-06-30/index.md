---
title: "Idea - Chamber Of Bullets"
cover: "https://unsplash.it/1280/100/?random?Chamber"
date: "2019/06/30"
category: "game"
tags:
    - idea
---

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/HiG4YMQxAU8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Writeup
---

### What we started with

We came up with a couple of core tenets on the final day of IHD development.

* “Continuous” time instead of “discrete”. Not a turn-based game.
* Flow of time is malleable

We wanted to push ourselves into learning something new, and since we had only made turn-based games together,
we felt it was time to move on into a more challenging space: real-time computation.

The goal of this second project is to start off on the right foot. We were going to focus on design
and architecture first and foremost.

### What it evolved into

Over the course of the video, you can see us shifting our gaze from aggressive, offense-focused games like *Superhot*
to something more "relaxing" like *Breath of the Wild* (we mentioned it several times on Saturday). The goal is to get players
into an "indirect" flow - they must run while something else handles the dirty work.

This was spawned by an idea I had over the course of the week. Patrick and I talked it over on Saturday and came up with a
third and fourth core tenet:

* The player is in control of a powerless avatar that controls another powerful being from the sidelines.
* The player's actions could kill them through collateral damage.

These tenets formed the basis of our more "final" design.

* You summon turrets to kill your enemies, but they only target you. You must hide behind your enemies in order to get them killed.

### Balance

There are a few important trade-offs in the game that I'm quite proud of.

* You can spawn as many turrets as you like.
  * Your enemies are unlikely to survive.
  * You will also die more easily.
* You are shielded when enemies are between you and your turret.
  * Bullets won't hit you - your enemies will take the hits.
  * You might get pinned against a wall, letting the enemies surround you.
* Some turrets can pierce through enemies.
  * More efficient slaughter.
  * Your best hiding place is a little weaker.

I think we'll develop these further as the game goes on, and there will be smaller, less important
decisions that the players will have to make very frequently.

### Timeline

We came up with the following scope for our first and second milestones:

#### Version 0 (4 weekends)
 * 3D Environment 
 * Mobs that follow the player
 * Turrets that track the player
 * Turrets with laser sight (for telegraphing aim)
 * Turrets that fire projectiles
 * Entities that take damage (enemies, player, turrets)
 * Player can drop turrets

If we're proud of this, and want to share the prototype with our friends, we'll continue with Version 1.

#### Version 1
 * Super basic visual effects (better models, particle effects, lighting)
 * Super basic audio effects (subtle music, sound effects for telegraphing and ambiance)
 * Adding turret types (grenade launcher, etc)
 * Adding enemy types

Once we share this with our friends, we'll move on to Version 2 if they enjoy playing. 

Of course, we'll stop at any time if we get burnt out on the project or find that the fundamental game design is lacking.
I want to learn how to be better at commiting and pushing through the drudgery too, so I hope we don't give up too easily.
