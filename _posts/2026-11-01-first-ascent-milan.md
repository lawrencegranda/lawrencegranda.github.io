---
title: "First Ascent: Four Days at Bending Spoons in Milan"
date: 2026-11-01 10:00:00 -0500
categories: [Career]
tags: [First Ascent, Bending Spoons, Hackathon, Software Engineering, Milan]
image: /assets/thumbnails/first-ascent-milan.jpg
pin: false
by: Lawrence Granda
---

In late October, I flew to Milan for four days to attend First Ascent USA. 

It is an all-expenses-paid retreat organized by Bending Spoons, an Italian tech company that acquires and operates products like Evernote, WeTransfer, Remini, and Meetup. Every year they invite twenty computer science and engineering students from across the United States to their headquarters in Milan to meet their engineers, learn about how they run the company, and compete in a couple of product challenges.

I applied back in April. I had come across the program online, went through their timed logic, algorithmic, and behavioral assessments in May, and then had an interview with Silvia from their talent team in July. When the acceptance email came through, I had to figure out how to balance it with my semester at Cornell. I was finishing my CS degree and starting coursework for my ORIE master's, but Bending Spoons had booked the travel months in advance through Perk, so it was actually pretty easy to give my professors early notice and arrange makeups for the classes I would miss.

## The Flights and Arriving Early

The trip started with an unexpected coincidence. 

On Tuesday afternoon, I got on the regional flight from Ithaca to JFK. Sitting nearby was Manuel, an assistant professor of architecture at Cornell. We started talking, and it turned out we are both from Galicia in northwest Spain—he is from Pontevedra, and I grew up in A Coruña. We were both on our way to Europe. It was one of those small-world moments that made the long travel day feel a lot shorter.

Because the overnight flight landed in Milan on Wednesday morning to give us time to adjust to the six-hour time change, a few of us had Wednesday afternoon and Thursday morning free before the welcome dinner. 

Instead of sitting around the hotel, some new friends and I took a regional train up to Lecco on Lake Como. We walked along the water, did a short hike, and spent a couple of hours eating and talking. By the time we got back to Milan for the welcome dinner, it didn't feel like a bunch of strangers showing up to a corporate recruiting event. It felt like a group of friends.

## Inside Bending Spoons

Before any coding started, Bending Spoons spent Friday morning talking about their business and engineering culture.

I was really curious about this part. In the US, most software companies fit neatly into one of two categories: either an early-stage startup looking for product-market fit, or a large tech company building on top of its core product. Bending Spoons operates very differently. They look a lot like a software company crossed with private equity. They acquire established products with millions of users, take a hard look at the engineering and operations, and apply very disciplined engineering, data analysis, and product management to turn them around and scale them.

For someone studying both computer science and operations research, hearing their leadership talk about that model was genuinely interesting. It is a company culture built around metrics, analytical rigor, and operational efficiency rather than hype.

## Challenge I: Building the MVP

On Friday afternoon, the hackathon kicked off.

We were split into teams of four or five, and each team was paired with a "guru"—a senior engineer from Bending Spoons who acted as our mentor.

Our group was Team Orange: Dini, Ishan, Andrew, and me (our fifth teammate couldn't make the trip). Our mentor was Dante, a software engineer at Vimeo.

Because of the NDA we signed for the selection tasks, I cannot share the details. But the general idea of the first challenge was to build a functional MVP for a specific problem space in three hours, using an established product as a baseline.

We built our prototype with a React and Vite frontend, an Express API, and Google Cloud Firestore, deployed on Google Cloud Run.

To be honest, Challenge I felt a bit under-specified to me, and building under a tight three-hour clock meant making fast compromises. But by the deadline at 6:30 PM, we had our service live and working.

That night, Bending Spoons took everyone to Teatro 7, a cooking school in Milan. As a team, we tried our hand at making a vegetarian version of a Milanese cotoletta using celeriac and potatoes. We were definitely better at writing code than cooking, but making dinner together with the team was a great way to decompress after staring at laptops all afternoon.

## Challenge II: The Data Turn

The second challenge on Saturday morning was my favorite part of the entire retreat.

What made Challenge II interesting was that it was not just an open-ended feature sprint. Bending Spoons gave us synthetic data from one of our competitors: user feedback, A/B test results, churn metrics, and feature comparisons. We had three and a half hours to study the data, decide what actually moved user behavior, implement those features into our app, and then pitch our roadmap to a mock board of emergency investors.

In most hackathons, teams fall into the trap of building whatever sounds flashy: chatbots, gamification, streaks, point systems. But when we dug into the A/B test data, the signal was very clear: the flashy mechanics had virtually no impact on retention, while a couple of simple, low-friction workflow improvements drove double-digit retention gains.

When it came time to pitch, we did not pitch vague features. We walked the judges through our unit economics, showed a path to €145K ARR based on the synthetic enterprise customer profiles, cited the exact retention lifts from the A/B test data, and gave a live demo of the deployed Cloud Run app. We asked for a fictional seed round of $2M at a $22.2M post-money valuation.

At the closing dinner on Saturday night, the organizers announced the outcome:

**Team Orange won the tech challenge!**

Winning the challenge felt great. The whole team was wonderful to work with under pressure, and Dante was a fantastic mentor who gave us feedback from the first challenge that helped us coordinate much better on the second.

## Wrapping Up

And just to cap off the travel coincidences: on the final flight from JFK back to Ithaca, another Spaniard sat right next to me. This time from Madrid. Out of all the seats on those regional flights, bookending the trip like that was pretty funny.

By Sunday night, I was back in Ithaca, getting ready for the week ahead and catching up on problem sets for my classes.

First Ascent was only four days, but it was one of the best experiences of my fall semester. It was a good reminder of how much fun it is to build things alongside smart people, to let data tell you what really matters, and to solve problems under a tight deadline.

Thank you to Silvia, Ilaria, Dante, and the rest of the Bending Spoons team for putting together such a thoughtful program. And to Dini, Ishan, and Andrew: it was a pleasure building together.
