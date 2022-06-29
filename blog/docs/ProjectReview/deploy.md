---
sidebar_position: 4
description: 'husky commintLint bamboo cloudFront'
---

# Deploy and Cloud
- As other front-end projects, we use es-lint and prettier, and use git hooks---husky to do pre-commit check, this is to guarantee the commited code will follow the team criterion. And use commintLint to check the commit message, to bind all commits with Jira tickets (agile board management platform).
- The build will auto start, after commit and tag on triggered branchs(dev master and release). On bamboo build Unit testing will run, and after generated zip file, it will auto uploaded to nexus. Then bamboo will sent a message to AWS, which will use S3 code build API and deploy code to target sites.
- On AWS the cloudFront is the project entry, we do redirect and CDN here. You can set several request regular expressions and write lambda functions to handle them. For example, we will check user agent and send crawel result for social media, and on PDF generate APIs we will request fund data on lamda function and run PDF UI services using puppeteer.