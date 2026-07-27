# Keeping on Running 

# Picking up from my last point
I still haven’t done the hard work of properly learning what is happening in my code. The code. The code Cursor and Antigravity generated from my prompts and that I’ve now decided to publish in a tiny corner of the web. That probably isn’t surprising to anyone who knows me and the fullness of my life outside of this stuff.
If I’m being fair to myself though, I *am* learning. Just not in the traditional “complete a coding course, learn variables, build a calculator” kind of way.
I’m learning in a much messier, scattergun manner.
I’m learning about app structure. About frontend versus backend. About how different services connect together. About deployment. About asset pipelines. About Supabase. About why something that works perfectly on one platform suddenly explodes into flames on another.
I’m learning about the *shape* of software.
And because I have the impulse control of an excited Labrador when a new idea appears, I didn’t stop and consolidate that learning. I did the opposite.
I leaned harder into it.
MOOOAAARRRR APPPPSSS. Nice one.
# Stickman Runner
The app that has swallowed most of my time recently is Stickman Runner.
The original plan had actually been pretty wholesome.
My son had just turned 11. I’d helped run a coding club at his school doing Scratch and Micro:bit stuff and he’d recently got a new laptop. Somewhere in my head was this lovely vision that we would build a game together. Proper father and son creative project energy.
So I asked him what game he wanted to make. He said “a running game”, which was apparently all the creative direction we needed. Off we went.
This one felt different from the other little experiments I’d done. The earlier apps mostly felt like me poking at concepts and proving things could exist. Stickman Runner felt more like trying to make an *actual thing*; a game with flow and pacing and visuals and music and all the strange tiny details that make games feel alive.
Also — importantly — this was my first attempt at something designed as a mobile game first.
That immediately dragged me into a whole world of problems I had absolutely no understanding of.
# The tech bit (that I barely understand)
At one point I asked Cursor to explain the structure of the app back to me, partly because I genuinely needed help understanding what it had made.
This was its description:
“Stickman Runner is an Expo (React Native) app with expo-router for screens and React Native Skia for the game view—one canvas drives the runner, obstacles, and layered backgrounds (including parallax city strips), while a small game layer (state, useGameLoop, and systems for physics, collisions, and spawning) keeps logic separate from rendering. The same codebase targets iOS, Android, and web, with web using Skia’s CanvasKit path and asset loading tuned so strips decode reliably before play.”
Reader, I nodded at this like I understood all of it. In reality I probably understood about 40%, but weirdly that’s becoming part of the process.
I’m no longer blocked by needing to fully understand every technical detail before making progress. Instead I’m learning through direction, experimentation and debugging.
The AI is acting a bit like an infinitely patient technical collaborator. One that occasionally hallucinates complete nonsense and breaks everything, but still.
# It worked surprisingly early
One of the strangest things about vibe coding is how quickly something starts to *exist*.
Very early on, I had a little stickman running across the screen jumping over blocks. It was rough. Actually no, rough is generous. At one point the running animation looked like some sort of R-rated epileptic octopus. Limbs flailing in all directions. Knees bending backwards. Arms briefly phasing into other dimensions.
But then I started feeding the AI reference images.
And suddenly it got it.
The system began building a proper joint structure for the animation. Arms and legs started moving with rhythm. The silhouette became readable. The little runner actually looked like it had momentum.
That was probably one of the first moments where I sat back and thought:
“Oh. This is properly interesting.”
Because I hadn’t animated that myself. I’d *directed* it, which feels like a fundamentally different relationship with software creation.
# The grid
The bit I became irrationally obsessed with was the foreground grid.
If you’ve seen any 80s synthwave aesthetic ever, you already know the thing.
The glowing perspective grid stretching into the distance.
I described the effect I wanted — essentially a clipped single-point perspective grid moving beneath the player — and then spent an absurd amount of time iterating on it.
Not because it was essential, but because I wanted it to feel *right*.
Eventually we got there. The perspective worked, the movement synced with the obstacle speed and the scrolling finally felt convincing.
And honestly, getting that working gave me more satisfaction than some much larger things I’ve built in actual work contexts.
Because it felt handmade.
Or at least AI-assisted-handmade.
# The city at night
Another rabbit hole was the skyline.
I became fascinated by the idea that the level should slowly transition over time.
The moon descending.
The sky changing.
Building lights flickering on and off.
A gradual movement from night into dawn.
At one point I was literally documenting timed screenshots every 30 seconds and feeding detailed direction back into the AI.
“Moon should be descending from the top of the screen.”
“All buildings should now have lights.”
“Lights should gradually reduce.”
“Sky should now be yellow.”
“The visuals should not loop back to night at the end.”
I realised somewhere during this process that I had quietly shifted from “messing around with AI coding” into something much closer to game direction. The AI was generating the implementation, but I was increasingly shaping mood, pacing, atmosphere and progression.
There was also a slightly hilarious moment where the AI created a genuinely impressive procedurally generated lighting system for the city buildings… and then absolutely tanked performance.
So I fell back to hand-crafted sprites. Weirdly, *that* was the moment it started to feel most like making a game.
Not because I’d suddenly become a coder, but because I was making trade-offs. Choosing where fidelity mattered, deciding what was “good enough” and balancing ambition against performance all felt like very real creative decisions.
# Music from nowhere
I also used generative AI tools to create the music.
That part still slightly melts my brain.
The idea that I can describe a vibe and get back something that sounds vaguely like a lost synthwave track from 1987 still feels ridiculous.
The broader plan is to eventually have four distinct stages, a bit like old-school OutRun, each with different visuals, colour palettes, music and moods.
One stage might lean more neon city.
Another might push into sunrise desert.
Another maybe rain.
I don’t know yet.
That’s part of the fun.
# The pain of web versus mobile
The less fun bit was discovering how painful cross-platform development can be.
Particularly when you don’t fully understand the underlying rendering stack.
I hit all sorts of issues trying to get web and mobile versions behaving consistently.
Most of the problems revolved around Skia CanvasKit rendering.
Things that worked beautifully on mobile would fail on web.
Assets loaded differently.
Performance varied wildly.
Something would render fine in one browser and disappear entirely in another.
I spent an alarming amount of time staring at error logs that may as well have been ancient runes.
But this is another strange thing about AI-assisted development.
You don’t necessarily need to solve the problem yourself. You need to learn how to describe the problem clearly, test assumptions, identify patterns, direct the debugging process and recognise when the AI is confidently making things worse.
That last one is particularly important.
# It still isn’t finished
The game still has debug mode on and it still isn’t really a *game* in the proper sense. It’s playable, technically, but proper game feel is hard. Really hard.
A working application is one thing, but a genuinely enjoyable game is another entirely. Playability turns out to be massive.
Tiny timings matter.
Jump arcs matter.
Speed changes matter.
Obstacle spacing matters.
You start noticing how much invisible tuning exists inside games that feel effortless.
But that’s probably the biggest thing I’m taking from all this: you can have a crack at almost anything now.
A few years ago, the idea that I could decide on a whim to start making a cross-platform mobile runner game would have felt ridiculous.
Now the barrier to entry is dramatically lower.
Not because the work disappears, but because the “blank page problem” disappears.
The game existed from a very early iteration.
From there, most of the time has been spent on direction, taste, iteration and refinement; trying to move from “technically functional” towards “feels good”.
That’s a fascinating shift.
# And my son?
He liked it.
Which honestly mattered more than whether the rendering pipeline was optimal.
He played it, gave ideas and watched features appear after conversations.
And I think that might be the bit I keep coming back to.
This stuff lowers the distance between imagination and creation. Not perfectly, magically or without frustration, but enough that an 11-year-old saying “we should make a running game” can actually become a real thing sitting on the internet.
That still feels a bit wild.
There’s a web version here if you want to see the current state of the chaos:
~[https://stickman-runner-git-main-twoshedzzs-projects.vercel.app/](https://stickman-runner-git-main-twoshedzzs-projects.vercel.app/)~
It’s unfinished.
But then again, I suppose this whole learning journey is too.
