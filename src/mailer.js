import nodemailer from 'nodemailer';

const from = "'Bookaroo' <info@bookaroo.com";

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

export function sendConfirmationEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Welcome to Bookaroo',
    text: `
      Enjoy Bookaroo Library!
      Please confirm your email.

      ${user.generateConfirmationUrl()}
    `
  };
  transport.sendMail(email);
}

export function sendResetPasswordEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Bookaroo Password Reset',
    text: `
      Click this link to reset Your password

      ${user.generateResetPasswordLink()}
    `
  };
  transport.sendMail(email);
}
