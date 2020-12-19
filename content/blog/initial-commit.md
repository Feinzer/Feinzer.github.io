---
title: "Finally, some progress"
author: "Daniel Hernández <danhernan23i@gmail.com>"
description: "So I'm finally going to start working on this, huh."
thumbnail: "initial-commit.png"
---
Hi there, so this was meant to be my portfolio alongside a little blog section I just wanted to make for myself. As original as that may sound- No, I'm not, obviously. But whatever, this was fun to make so moving on...

There really is not much of a point in having a blog for myself since I don't even post on my public social media, you know? I've had an instagram account for like 6 years now (maybe more!?) and I haven't posted on it ONCE. But then I thought it would be a nice way to share my opinion on some stupid technology I might come across and act like a total jerk while knowing nothing. Guess who's not adding a comments feature?

One thing I could share my thoughts right now is BootstrapVue, like, seriously, I get it you people don't want to deal with making simple card components or whatever but GOOD LORD IS THAT FRAMEWORK A MESS. A client used it on their website and I was tasked to make a mobile view from it and it was such a PITA. For example a simple card you would think it's just a div with a background, margin, padding, rounded corners and a shadow but BootstrapVue says NO, that thing was like 5 divs inside each other for NO REASON and trying to make a class for it would only affect the innermost layer, making a simple task like applying a margin take half an hour. But I'll be touching this further on another post.

For now I'll be focusing on completing my <nuxt-link to="/projects">Projects</nuxt-link> and <nuxt-link to="/about">About</nuxt-link> sections while documenting my progress in blog posts, of course I'll be making some small adjustments to my design, I'm still not fully convinced with it and needs a lot of polishing.

After this long break I just recently made a little deployment script that it's really comfy, it basically pushes my compiled contents to github pages but instead of initializing every deployment it will grab the current deployment and build on top of it. This way I won't be losing my deployment history and I can rollback real quick if I screw things up. At first I had issues with the commands because I wasn't using execSync on the script, really, synchronous and asynchronous operations are such a pain. After figuring out that was the reason it failed I managed to get it working and it's pretty decent, nice output on terminal and if I don't have a local deployment copy it clones it.

If I don't finish the sections before monday I'll probably pause it again since I'll be doing a supposedly really long technical test for a job interview (I'll post the results of it here later, wishing myself luck rn), however I'll do my best to keep the project going at least until I have a proper portfolio to show people and then update it constantly.
