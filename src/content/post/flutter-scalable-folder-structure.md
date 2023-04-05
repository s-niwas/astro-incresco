---
publishDate: 2019-10-09T00:00:00Z
title: Scalable app structure in Flutter
description: Folder structure in flutter for scalability, clean code
excerpt: We need to have clear app structure to make the application more scalable and most importantly makes it easy and clear for the fellow team members to understand well. Let’s see how to organize files and folders.
image: https://cdn-images-1.medium.com/max/3200/0*O3-PzzXr2-TLmC4u
category: Tutorials
tags:
  - flutter
  - scalable
  - mobile app development
author: Parthiban Sudhaman
authorRole: CEO
authorAvatar: https://media.licdn.com/dms/image/C5603AQGFRGF7elhX_A/profile-displayphoto-shrink_800_800/0/1617151081605?e=1685577600&v=beta&t=gtKAwhp87sMtZtAl1wOz2qF03R41bhjYdagLTTXyY2A
authorLinkedinUrl: https://www.linkedin.com/in/parthibansudhaman/
---

![](https://cdn-images-1.medium.com/max/3200/0*O3-PzzXr2-TLmC4u)

As soon as I started Flutter, I was amazed with the simplicity it brings to the app development. Flutter has almost everything I can imagine, it got create-flutter starter kit, hot reloading, unit testing framework and lots and lots of widgets.

That’s great, I have developed a “Hello world!”, everything looked cool and fast. This is good, how about building a real application with more complex functionality, state maintenance, connecting to Firestore, making api request, custom theme etc. OK Let’s do that, lets pull-up main.dart file and start writing code.

Wait a sec, should I put all my stuff in main.dart file? Certainly not. We need to have clear app structure to make the application more scalable and most importantly makes it easy and clear for the fellow team members to understand well.

Let’s see how to organize files and folders.

![](https://cdn-images-1.medium.com/max/2000/1*rCpECOewnuq9tCTBPbrZaw.png)

**index.dart file:**

This file is to hold all my packages, which are required in other classes. I have imported this ONE file in all my other classes and widgets.

![](https://cdn-images-1.medium.com/max/2212/1*50VPSHMEey0D2QNe5kDq2A.png)

**images**: Folder to hold the images/assets used in the project.

**screens**: This folder contains the screens which will be configured in the routes in the main.dart file.

**providers**: I’m using provider pattern for this application for state management, so all the provider files goes to the providers folder with the file naming convention “user_provider.dart” as an example.

**models**: Providers will use these models, sort of mapped with my entity in database.

**services**: This folder is for backend operation like connecting to the Firestore or invoking HTTP calls etc.

**utilities**: All the common items goes in here, example., constants used in the project.

Coming from a non-mobile development background, this structure helps me with faster development. Of course there are other ways to organize better, please leave a comment if you have suggestions.

If you have scrolled this far, thanks for reading :)
