---
publishDate: 2022-06-03T00:00:00Z
title: Javascript frameworks in 2022
description: Comparison of react, angular, vue, jquery and svelte
excerpt: There are quite a few libraries such as React, Angular, Vue, Svelte, etc rose to the need to build high-performing, responsive websites.In this blog, I will explain some of the popular JS libraries
image: https://cdn-images-1.medium.com/max/2000/1*r2kukzjLWVCMj-S5QcT0AQ.png
category: Tutorials
tags:
  - javascript
  - react
  - angular
  - svelte
  - front-end
author: Santhosh Kumar Jayaraman
authorRole: CTO
authorAvatar: https://media.licdn.com/dms/image/D5603AQH0rXfN8KgTog/profile-displayphoto-shrink_800_800/0/1677514970547?e=1685577600&v=beta&t=U03V2igwr8D4-ooJzpq-HMorH5lNye-kpBwqd_ZB4JM
authorLinkedinUrl: https://www.linkedin.com/in/santhoshjayaraman/
---

![](https://cdn-images-1.medium.com/max/2000/1*r2kukzjLWVCMj-S5QcT0AQ.png)

In the last 10 years, website developers have seen quite a few libraries/frameworks which help to develop their websites rapidly. I remember when I came fresh out of college, jquery was being used on almost every website I have visited and nobody worried about mobile responsiveness or how fast the website was. <br/>

As per Statista, In 2021, the number of unique mobile internet users stood at 4.32 billion, indicating that over 90 percent of the [global internet population uses a mobile device to go online](https://www.statista.com/statistics/617136/digital-population-worldwide/). So it becomes more important to go on a mobile-first approach and most importantly the performance of the website becomes a key aspect both in terms of user experience as well as for search engine listing. There are quite a few libraries such as React, Angular, Vue, Svelte, etc rose to the need to build high-performing, responsive websites.

In this blog, I will explain some of the popular JS libraries
&nbsp;
&nbsp;

**1. jQuery:**

It's one of the oldest and early problem-solver for browser interoperability issues. It is still being used but not as mainstream and is loved by many developers. Till 2021, jQuery was voted the most popular web framework until React replaced it. In my perspective jQuery is more of a utility library than a framework. Many big companies like Google, Microsoft, and IBM use jQuery along with other popular JS libraries in their websites. It has close to 56.3K stars on Github.

**2. Angular:**

Released initially as Angularjs and in order to compete with React, it was modernized as Angular to take advantage of the vast improvements of ECMAScript 6 and tried to fulfill the promises to compete effectively with React.

Angular is a complete framework suitable for enterprise apps and high performance. One of the disadvantages is the steep learning curve. For people with a background in C#, Java can adapt quicker as typescript is being used. It has close to 81.7K stars on Github

**3. React:**

Most popular and sought by most developers and companies. Backed by Facebook, react is 10+ years old now and the concept of virtual DOM has blown away other JS library creators. With the introduction of hooks, it become simpler and faster. React has pushed to the latest standards of JavaScript, and it has pushed for JSX. React is no longer a framework, maybe it never was, it is just a library.

Support to PWA and react-native for mobile apps, Nextjs and Gatsby for server-side rendering, it has more power to create a wide range of applications in the ecosystem. To be honest, we have seen the true potential by building nextjs website, client-side rendering website, mobile(with react native), and desktop app (with Electron) with the same codebase in a monorepo. It has close to 189K stars on Github.

**4. Vue**

Vue was the answer for many developers who were looking for something more performant than AngularJS, but more stable and easy to use than Angular. Vue adapts the template system from Angular and Virtual dom from React.

However, few of the developers faced issues while using arrays with Vue and Vue has claimed its due to certain limitations in Javascript. Vue community also has support for building mobile apps but is still not popular like react-native. It has close to 196k stars on Github.

**5. SvelteJs**

Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the _browser_, Svelte shifts that work into a _compile step_ that happens when you build your app.

There is no doubt that it is more simple to use, but the translation to imperative, and the resulting component, is not as easy to predict as it seems. SvelteJS is not able to detect correct changes in some cases. When this happens, the state can be corrupted and views are not updated correctly. With the introduction of Sapper, which is Svelte’s version of Next.js, and SvelteNative for building native mobile applications, in the future svelte will become a strong contender for react.js once the common issues are fixed.

**Which is Better?**

**There is no better framework. All libraries are updated continuously to keep up with the competitor**. For instance, while React was believed to win because of its virtual DOM, Angular equaled the score by implementing change detection. Similarly, Vue absorbs good features from Angular and React and keeps improvising. Svelte is powerful in terms of performance. All the above frameworks/libraries are being commonly used and they cater to different project requirements. A lot of people have their own perspectives and project requirements before choosing the framework. Here is a quick comparison of different frameworks from my observations.

![Ranking with different factors](https://cdn-images-1.medium.com/max/2136/1*VhLCX9E-ebYhZm0PTJ5Xeg.png)

Angular, React, Vue, and Svelte, are all great frameworks. I’ve worked with all of them. Personally, I recommend React for beginners as it's more of javascript and modern features of ES7/8 instead of framework-oriented learning. I started using React.js when it was uncommon in 2015 and have seen many websites start adapting react. In fact, most of the popular websites we use on daily basis are built on React, such as Facebook, Whatsapp, Flipkart, Instagram, Cricinfo, Airbnb, Microsoft Outlook, Microsoft Teams, AWS, Jira, Slack, Monday.com, Netflix, Amazon Prime, Twitter, Paytm, Shopify, Wix and the list goes on.

![](https://cdn-images-1.medium.com/max/2000/1*NIArafTyMpo-93DpH_NLMA.png)

Most developers love Reactjs because of the simplicity and component-based approach. With a few tweaks, you can switch from one library to another. In fact, preact is a lighter-weight alternative to react and a lot of websites use that while bundling. Compare to other frameworks, the learning curve in react.js is so easy and the ecosystem is vast with a very active community and heavy contributions for next.js, gatsby, and react-native. Developers can spend more time writing modern JavaScript, and less time worrying about the framework-specific code. When combine with ES6/7, ReactJS is perfect for managing heavy loads with relative ease. That's the reason why Reactjs voted as the most popular framework in [StackOverflow’s 2021 survey](https://insights.stackoverflow.com/survey/2021#most-popular-technologies-webframe) and got twice as much as votes as Angular.

![](https://cdn-images-1.medium.com/max/5224/1*Twa7KP-RK8N_CD_e7vV-zw.png)

## What's next?

Even though react.js is so popular, in the future svelte and solid.js might get a lot of support from developers due to their performance and will slowly become a strong contenders for the title spot with React.js. React will continue to optimize its core fiber for smooth rendering. Nextjs will continue to be the most sought server-side rendering framework. Most companies will focus on building cross-platform apps with React native as it going to save a lot of time by building once and deploying everywhere.
