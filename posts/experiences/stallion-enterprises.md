---
title: 'My First Software Developer Job - A Storage Buisness'
date: '2020-05-04'
img: stallion-enterprises-inc-2.png
---

[![Affordable Self Storage At Port Colborne Logo](/images/stallion-enterprises-inc-1.jpeg)](https://pcss.stallioneic.com/)

Affordable Port Colborne Self Storage is a customer focused self storage facility in Hamilton.

I worked remotely for the business owner for about a year, digitalizing their company and automating business logic. We started by developing a new design for the website and improving SEO; we devised a sketch and implemented a new look with Bootstrap and CSS. I then created a booking/checkout form with Angular 9 and Node.js and synchronized inventory with Google Sheets and MySQL. Customers could fill out the form and use Square API to make a credit card payment. After a completed payment, a storage is selected from the storage facility, and a password would be generated and assigned for the customer. Atrium – CDVI Americas, a web application, provides tools for those features, but we needed the process to be automated. I took it upon myself to create an [**npm library**](https://www.npmjs.com/package/http-atrium-cdvi) to perform API calls like _add user_, _set key code_, and _set access level_ to the web application, as there was no existing API.

In addition, I created automated scripts (cron jobs) to recurrently charge customers using their provided credit cards, send out warnings and potentially termination emails when credit cards would fail, and control Google AdWords budget depending on storage unit availability.

Towards the end of my contract, I wanted to give the owner the ability to control backend logic in urgent situations without relying on a developer to re-configure the backend, so I created an admin portal to turn on/off the checkout form recurring payments, and emails.

# Here are my achievements:

- Developed, designed and deployed a self-storage booking system using **Angular 9**, **Node.js (Express)**, **MySQL**, **Square API**, and **GoDaddy**.
- Reduced staff hours by creating recurring scripts with **node-cron** to charge customers monthly using Square API, warn customers of late payments/termination using **Nodemailer**, and adjust **Google AdWords** budget via **Google API**, saving the company 200+ staff hours.
- Created an admin portal for controlling recurring scripts using **Node.js** and **Google Sheets API**, giving the owner the ability to turn on/off backend business logic when needed.
- Mentored new hires in understanding the back-end and front-end system while studying full-time in 2021.
- Utilized **Bootstrap** and **CSS** to create a mobile-friendly user experience.
- Executed **SEO** practices to improve Google Search ranking.
- Featured on [EIN Presswire](https://www.einnews.com/pr_news/529408078/affordable-port-colborne-self-storage-launches-self-serve-reservation-portal).

# Tech Stack:

- Node.js (Express.js, JavaScript)
- Angular 10 (TypeScript, JavaScript, CSS, BootStrap 4, JQuery)
- GoDaddy (MySQL, Terminal, SSL)
- Google Sheets (formulas/functions)
