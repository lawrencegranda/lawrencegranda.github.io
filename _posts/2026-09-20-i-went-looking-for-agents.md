---
title: I Went Looking for Agents
date: 2026-09-20 20:00:00 -0400
categories: [Career]
tags: [Career Fair, AI, Agents, Cornell]
image: /assets/thumbnails/career-fair-headshot.png
pin: false
by: Lawrence Granda
---

A quiet dispatch from the high, drafty rafters of Barton Hall on a Wednesday afternoon in late September.

Barton Hall is an odd, cavernous place. Built in 1917 as a military drill hall for Cornell cadets, it feels less like a campus facility and more like an airplane hangar grafted onto an armory: towering arched steel trusses, a scuffed 200-meter indoor rubber track running around the perimeter, and the unmistakable scent of aged varnish, floor wax, and recycled dust. Once or twice a year, the university covers the red synthetic surface with heavy protective floor tarps, hauls in hundreds of standard folding tables, cranks up every overhead pendant hanging from the dark timber rafters, and invites two thousand students in nervous, poly-blend navy suits to perform the ancient, clammy-palmed ritual of the All Industries Career Fair.

I walked through the double doors in an enviable, slightly disorienting state: I didn't need a job.

I am starting an ORIE M.Eng while finishing my computer science degree, and my full-time post-grad plans were already signed and locked away. I had no fifty-pack of resumes printed on 32-pound linen cardstock. I had no faux-leather padfolio tucked like a breastplate under my arm, no memorized thirty-second elevator pitch waiting to be fired at the first recruiter who made polite eye contact. 

I was free to be a flâneur. Hands in pockets, wandering the track, watching the strange human theater unfold beneath the rafters. 

I had come for one specific, slightly obsessive question: *Where are the agents?*

---

### The Box vs. The Engine

I brought a very particular builder's bias into the room. 

I spent the past summer in Bellevue working on production generative AI systems at Meta. If you spend twelve intense weeks building around modern foundation models, the ambient marketing fog evaporates pretty quickly. You realize early on that the model itself—the transformer spitting out probabilistic tokens—is rarely the hard part. The model is a parlor trick until you wrap it in the grueling, unglamorous, deterministic ninety percent of the system: schema validators, real-time sync pipelines against ground-truth databases, retry heuristics, evaluation harnesses, and state machines. 

When you live inside that kind of engineering, your brain starts mapping every workplace bottleneck into an optimization loop: *Here is a messy human workflow; surely someone has wired up an autonomous agent, an optimizer, or a tool-calling system to lift this weight off people's shoulders.*

I expected to walk through Barton Hall and hear engineers talking about the systems they were deploying to do real work while their teams slept. 

Instead, I spent four hours walking from banner to banner, and what I heard, over and over, was a chorus of people describing *chatbots*. 

We should be precise about words here, because the tech industry has spent the last two years running a blender through the dictionary. 

When I say *chatbot*, I mean **The Box**. A text field sitting on a screen. You type a prompt, it squirts back a polite paragraph of prose, and then *you* still do the actual labor. You copy the text, paste it into a slide deck, verify the numbers, reformat the tables, fix the citations, and send the email. It is a slightly faster typewriter with an absurd electric bill.

When I say *agent*, I mean **The Engine**. You hand it an open-ended goal, and it walks off to do the job. It inspects documents, selects tools, queries databases, writes temporary code, handles transient network errors, balances constraints, formats the deliverables, and deposits a finished, auditable artifact onto your desk while you brew an espresso. You still review it, naturally—you hold the steering wheel—but you are not trapped in the loop for every single keystroke.

I wanted to find teams living in the second world. 

What I found was that almost everyone I talked to was either trapped in the first, avoiding the technology entirely, or buying a turnkey license from a third-party vendor and praying their employees would actually use it.

---

### 1. The Courtroom and the Replicable Word

My first stop was Edgeworth Economics. 

They do high-stakes economic consulting: antitrust litigation, labor class actions, intellectual property damages. Their booth was staffed by sharp, understated people in dark suits. On the placards behind them, the methods listed weren't speculative frontier frameworks. They were the battle-tested stalwarts of quantitative economics: SAS, Stata, R, Python, and linear regressions.

Back in 2023, Edgeworth published a thoughtful note on large language models in legal work. The interesting conclusion wasn't the usual breathless hype about how AI will automate courtroom testimony. It was the exact opposite: an LLM answer is an exercise in probabilistic pattern matching, whereas the federal rules of evidence demand methods that are transparent, deterministic, auditable, and replicable. 

If an expert witness sits on the stand in an antitrust trial and says, *"The model outputted this market-share estimate,"* they would be laughed out of the courtroom.

Then there is the matter of client confidentiality. You do not pipe hundreds of gigabytes of sealed discovery documents, proprietary source code, or unredacted internal communications into an external cloud API. 

The recruiter at the booth smiled when I asked about LLMs. The version on the ground was delightfully blunt: confidential client data never touches a public model, and getting the data into an internal warehouse in the first place is a six-month IT security slog involving data-use agreements and air-gapped servers.

That is not a team that "failed" to adopt agents. They are simply operating under a legal and ethical reality where if you feed their work into a chatbot, it immediately ceases to be work a court can accept.

---

### 2. The Two Floors of the Expert Network

Across the track stood a major expert network firm.

They connect hedge funds, private equity partners, and strategy consultants with industry specialists for paid advisory calls. If you look at their engineering marketing, they will tell you about custom knowledge graphs, proprietary internal GPTs, libraries of indexed expert calls, vector search, and automated conversation summaries.

It sounds like the dream of an agentic pipeline: automated matching, synthesized transcripts, self-optimizing knowledge retrieval.

Then you look down at the carpet. The role they were recruiting for in Barton Hall was Client Service Associate. 

What does an associate actually do? They sit at a desk with a dual-monitor setup and a headset, and they dial the phone. For eight or nine hours a day, they trawl LinkedIn with boolean keyword searches, find someone who was a Director of Cold-Chain Logistics in Kansas City three years ago, and try to convince that human being to spend forty-five minutes on a recorded telephone call with a client.

They are told to use internal "AI sourcing tools," which, as far as anyone on the floor could describe, are glorified search bars over their internal database. The heavy lifting—the persuasion, the vetting, the scheduling, the human negotiation—is carried out entirely by twenty-two-year-olds on the phone.

Their engineering hubs in London or New York might be busy fine-tuning semantic search over call archives, but what they were actually pitching to students in Barton Hall was an engine powered by vocal cords and sheer persistence. The software is just a searchable directory. The human on the headset is still the only real agent in the room.

---

### 3. Preaching Autonomy to the C-Suite

Next came a global CEO-advisory and management consultancy. 

Their booth was spotless. Four-color booklets, matte-finish banners, crisp infographics. They recently appointed a Global Head of AI, published a sweeping survey of four hundred Fortune 500 CEOs on "Unlocking Generative ROI," and announced joint ventures with enterprise software giants to build bespoke AI agents for multinational clients.

I asked the recruiter what the entry-level campus role looks like today.

The campus role is still first-year analysts pulling eighty-hour weeks assembling PowerPoint slide decks, drafting interview guides, and synthesizing interview notes by hand. 

I asked what was actually causing headaches for their clients right now. They didn't talk about autonomous systems or agentic workflows. What they named was a simple lack of clarity, and salespeople discounting too much. 

I went home that evening and found both in their own published essays: sense-making framed as "clarity in complexity," and pricing papers about limiting frontline discounting. 

Those are real commercial problems. They just aren't problems that run while you sleep.

---

### 4. The Custom Habit and the Midnight Bank

Near the far wall was a boutique healthcare investment bank. 

No engineering roles on the table. The junior job here is the classic, brutal, eighty-hour-a-week Wall Street gauntlet: pitch books, comparable company analysis, discounted cash flow models in Excel, and formatting margins at two in the morning.

When I brought up automation, the banker didn't mention an internal software team. Instead, he pointed me toward a vendor: [Rogo](https://rogo.com/).

Rogo is perhaps the only genuine candidate for an "agent" company in this entire story. It is a specialized, finance-native platform designed to read regulatory filings, parse internal models, draft deal memos, and manipulate Excel and PowerPoint directly.

Later that night, I pulled up Rogo's website. One sentence jumped off the page, and it felt like the single most honest, insightful statement I encountered all week:

> *Every deployment is custom, because every banker wants the work done a different way.*

What a profound distillation of the real world. 

The barrier to agent adoption in knowledge work is rarely the raw intelligence of the model. The barrier is the ferocious, idiosyncratic entropy of human habit. Every managing director has their own holy spreadsheet layout, their own sacred keyboard shortcuts, their own private visual grammar for debt schedules, their own non-negotiable preference for font sizes in footnote disclosures. 

A general-purpose agent cannot simply show up and "do the model." It has to be patiently, painstakingly trained to mimic the neuroses of each specific banking team.

And when you look at public chatter from the junior analysts actually forced to use these tools, the picture becomes even more familiar. The base product is essentially a clunky chatbot wrapper around SEC filings. The true "agentic" workflow—the one that claims to take a company ticker and autonomously generate a four-statement financial model—is an expensive enterprise add-on. And even when it runs, the formatting inevitably comes back slightly crooked, meaning the analyst still sits up until three in the morning fixing table borders by hand.

Even the company selling the agent ends up delivering a chatbot with misaligned margins to the people in the trenches.

---

### 5. The Water and the Bedrock

Tucked away toward the back corner was the New Jersey Department of Environmental Protection (NJ DEP).

No glossy venture capital banners. No talk of generative paradigms. Just state logos, field maps, and civil service titles. 

The DEP runs sophisticated hydrological models, groundwater flow simulations, and atmospheric dispersion calculations. They maintain extensive GIS infrastructure that has been quietly humming on state servers since before most students in Barton Hall were born. 

New Jersey actually has a formal, state-wide generative AI policy and an official catalog of approved chat assistants. DEP even has a modest pilot project testing LLMs to help search legacy permit archives and draft boilerplate responses to public comments.

Yet the people hiring at Barton were looking for environmental analyst trainees and IT specialists.

When the recruiter told me AI wasn't really a priority for their team, she wasn't saying the department doesn't model complex phenomena. They model the physical earth every single day. They simply aren't hiring students to automate that work with generative tokens.

---

### 6. The Far Curve of the Track

On the far bend of the 200-meter track sat the federal government and military booths.

Here, the technological conversation met an immediate, immovable constraint: U.S. citizenship. 

One agency publicly recruits software engineers and rotational AI fellows for critical national security infrastructure. The other was the United States Marine Corps, recruiting for Officer Candidate Course. 

Neither conversation had anything to do with automating workflows or prompt engineering. One was a conversation about clearance eligibility and background checks. The other was about pull-ups, physical conditioning, moral leadership under duress, and leading an infantry platoon through freezing rain. 

Standing on the rubber track, watching a candidate attempt a pull-up challenge while two Marines in dress blues kept count, was a bracing, healthy splash of cold water. It was a reminder that outside the glowing glass screens of our laptops, there remains an enormous, unyielding world made entirely of physical law, sovereign authority, and human grit.

---

### Evening Light on the Slope

After three hours of walking, the air in Barton Hall began to feel heavy. The acoustic roar of two thousand voices bouncing off steel girders was almost giving me a headache. I stepped out through the heavy wooden double doors into the cool, damp September twilight of Ithaca. 

I walked back down the slope toward West Campus, thinking through my notes. 

That evening, I did what any self-respecting engineer does: I went digging on the internet to see if my conversations matched reality. I combed through corporate filings, job postings, and forum threads on Reddit. 

The internet did not overturn what I saw in Barton Hall; it confirmed it down to the decimal point. Junior associates at expert networks were on Reddit venting about call quotas. First-year analysts at investment banks were complaining that AI tools generated broken Excel formulas. State agencies were slowly drafting committee memos about data governance.

It is tempting, when you spend your days building frontier tech in Big Tech laboratories, to look at the rest of the economy and assume everyone else is simply twelve months behind on the adoption curve. 

I don't think that's the right read.

They aren't "behind." They are simply playing entirely different games governed by different rules.

In legal economics, a probabilistic answer is an evidentiary liability. In expert networks, the primary asset is human trust and personal persuasion. In CEO advisory, the real bottleneck is executive politics and organizational fog. In investment banking, software breaks against the stubborn, artisanal habits of human analysts.

I still study computer science and operations research. I still look at clunky, repetitive, friction-laden processes and instinctively want to write code, design an optimizer, or wire up an agent to make them smoother. That impulse hasn't changed.

What has changed is my ear. 

From now on, whenever an enterprise company proudly announces, *"We use AI across our entire workflow,"* I will no longer assume they have built an autonomous fleet of software engines quietly carrying out complex tasks while their staff sips tea.

Most of the time—at least this September—it just means someone has a browser tab open to a chatbot, copying text from a box into a slide, hoping the margins don't break.
