import nodemailer from "nodemailer";
import Mailgen from "mailgen";

// Sending mail to the candidate on signing up to the job portal
export const registerNotification = (fullname, email) => {
  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  };

  const transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Job Portal",
      link: "http://localhost:5173",
    },
  });

  let mailResponse = {
    body: {
      name: fullname,
      intro:
        "Welcome to the Job portal, Unlock a new milestone in your career journey!",
      action: {
        instructions: "To get started, please click here:",
        button: {
          color: "#22BC66",
          text: "Login",
          link: "http://localhost:5173/login",
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  let mail = MailGenerator.generate(mailResponse);

  let message = {
    from: process.env.EMAIL,
    to: email,
    subject: "Welcome to Job Portal",
    html: mail,
  };

  transporter.sendMail(message);
};

// Sending mail to the admin on signing up to the job portal
export const registerAdminNotification = (fullname, email) => {
  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  };

  const transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Job Portal",
      link: "http://localhost:5173",
    },
  });

  let mailResponse = {
    body: {
      name: fullname,
      intro:
        `Welcome to the Job portal, You can create new Jobs and register companies,
         and hire the candidates who are good fit for your business requirements.`,
      action: {
        instructions: "To get started, please click here:",
        button: {
          color: "#22BC66",
          text: "Login",
          link: "http://localhost:5173/login",
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  let mail = MailGenerator.generate(mailResponse);

  let message = {
    from: process.env.EMAIL,
    to: email,
    subject: "Welcome to Job Portal",
    html: mail,
  };

  transporter.sendMail(message);
};

// Sending email notification to the candidate on applying to a job.
export const jobApplyNotification = (fullname, email, jobTitle) => {
  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  };

  const transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Job Portal",
      link: "http://localhost:5173",
    },
  });

  let mailResponse = {
    body: {
      name: fullname,
      intro: `This is regarding your recent application for the role of ${jobTitle}.`,
      action: {
        instructions:
          "To know the status of your application, please click here:",
        button: {
          color: "#22BC66",
          text: "Application status",
          link: "http://localhost:5173/login",
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  let mail = MailGenerator.generate(mailResponse);

  let message = {
    from: process.env.EMAIL,
    to: email,
    subject: "Confirmation on your job application",
    html: mail,
  };

  transporter.sendMail(message);
};

// Sending notification to the candidate whenever a new job is created in the job portal
export const newJobNotification = (jobTitle, candidateEmails) => {
  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  };

  const transporter = nodemailer.createTransport(config);

  const MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Job Portal",
      link: "http://localhost:5173/login",
    },
  });

  let mailResponse = {
    body: {
      name: "Candidate",
      intro: `New job has been created!!.. For the role of ${jobTitle}. Just take a look at it, if it aligns with your skills.
      If yes, be the first to apply to it.`,
      action: {
        instructions:
          "To know about more details about the job, feel free to check it out using the below link",
        button: {
          color: "#22BC11",
          text: "View job",
          link: "http://localhost:5173/login",
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  let mail = MailGenerator.generate(mailResponse);

  let message = {
    from: process.env.EMAIL,
    bcc: candidateEmails,
    subject: "New job is posted in our platform!!",
    html: mail,
  };

  transporter.sendMail(message);
};
