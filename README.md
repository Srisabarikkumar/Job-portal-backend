# Job Portal App Backend

This repository walks you through the Job Portal API project setup.

# Project setup

This project has four entities, through which the controllers, models and routes are created:

1. Users
2. Companies
3. Jobs
4. Applications

# Technologies Used

1. Nodejs and Expressjs
2. MongoDB
3. Mongoose ORM
4. Nodemailer and Mailgen for sending emails
5. Cloudinary CDN
6. bcryptjs
7. JWT

# Getting Started

1. Clone the repo:

```bash
 git clone repo
```
2. Install node modules:

```bash
 npm install
```
3. Set up Environment Variables:

Create a .env file in the root directory and add your env variables.

```bash
 PORT=3000
 DB=your_mongoDB_connection_string
```

4. Start the development server:

```bash
 nodemon index.js
```

# Nodemailer setup

The email service feature can be tested via:

https://temp-mail.org

The steps to test the email notification is listed in the frontend repo:

https://github.com/Srisabarikkumar/Job-Portal-frontend