---
title: Creating a jargon free therapy directory
date: 2024-03-12
---
I'm excited to share a project I've been working on. It's called Bobbe, and it's all about making the process of finding a therapist simpler and more welcoming.

It all started when a few friends mentioned their struggles with finding a therapist. After some research I realised that existing directories, while comprehensive, can be overwhelming and complex, especially when you're not feeling great.

From personal experience, the right therapist can change your life. I want other people to have that experience.

So, with some time on my hands from being in-between jobs, I decided to embark on creating a simple, friendly, and jargon-free directory where anyone can find their perfect therapist.

## Mission:
To remove the barriers for people wanting to accesss therapy, by creating a directory, that:

- Has an intuitive, friendly and accessible interface
- Focuses on essentials rather than overwhelming users
- Use everyday jargon free language

## Personal goals:

- Level up my coding skills
- Build a project that will help me stand out to potential employers
- Create something that might make a difference in someone's life

## The journey so far 🚀

I'm excited to share what I've accomplished so far:

- Designed a warm, friendly interface
- Created an intuitive way for users to search and filter
- Created dashboard for therapists to manage their profile

{% image "./images/bobbe-landing-page.png", "Bobbe therapy WIP landing page" %}
{% image "./images/bobbe-search-results.png", "Bobbe therapy WIP landing page" %}

## What's next 🔮

Over the next month, I'll be focusing on building out the back-end, aiming to launch a working MVP by the end of this month. I'll be sharing my progress, wins, and challenges.

If you're curious to see how Bobbe is shaping up, feel free to have a look at the early work-in-progress front-end [here](https://bobbe.fly.dev/)!

 What do you think? Would you find Bobbe useful, or do you think it's a terrible idea? How can I make it better? I'm all ears and would really appreciate your feedback!

## The joys of building from scratch

You might be wondering why I didn't just take the easy route and use a pre-built template. Building Bobbe from scratch has been a great learning opportunity. It has allowed me to give the platform its own unique personality while gaining invaluable experience in UX/UI and front-end development.

## Why is it called Bobbe?

<p style="margin-bottom: 0;">
My dog Bobby has been a great companion over the last few years and got me through some tough times, so Bobbe is named after Bobby. My hope is that Bobbe can be a similar companion to those seeking a therapist.
</p>

<div style="width:300px; margin-bottom: 0.8rem;">
{% image "./images/bobby-dog-2.png", "Bobby dog"  %}
</div>

## The tech stack

- Remix for developer experience, simple design pattern, ability to fetch data directly in the component, and improved SEO

### Front-end
- Tailwind CSS combined with CVA for styling (so good!)
- ShadUI for solid accessible components which I customised

### Back-end and database
- Zod for form validation
- Supabase or Pocketbase to manage DB/Auth (undecided)
- Faker.js for populating the database with sensible dummy data
