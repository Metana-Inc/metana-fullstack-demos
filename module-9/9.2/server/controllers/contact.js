// Contact functions for email signup / contact form

// Validation for contact form values
function validateValues({ email, firstName, lastName, comments }) {
  const emailValid = !!email.length && true; // TODO: validate email
  const firstNameValid = !!firstName.length && true; // TODO: validate firstName
  const lastNameValid = !!lastName.length && true; // TODO: validate lastName
  const commentsValid = !!comments.length && true; // TODO: validate comments

  return emailValid && firstNameValid && lastNameValid & commentsValid;
}

// TODO: Sanitization function for email signup / contact form
const sanitizeText = (str) => {
  console.debug(`=== warning: sanitizeText not yet implemented`);
  return str.trim();
};

// TODO: Sanitization function for email address
const sanitizeEmail = (email) => {
  console.debug(`=== warning: sanitizeEmail not yet implemented`);
  return email.trim();
};

// handler for the contact submit form
export function handleSubmitContact({ email, firstName, lastName, comments }) {
  if (!validateValues({ email, firstName, lastName, comments })) {
    throw new Error('form validation failed');
  } else {
    // Do something with this input
    processContactForm({ email, firstName, lastName, comments });
  }
}

// Function to save contact form data to database or send email to administrator
export function processContactForm({ email, firstName, lastName, comments }) {
  // Always sanitize any kind of input from users, or get hacked.
  email = sanitizeEmail(email);
  firstName = sanitizeText(firstName);
  lastName = sanitizeText(lastName);
  comments = sanitizeText(comments);

  // FIXME: do something with this input -- send administrator an email, or store to a database for processing.
  console.log(`=== debug: form input received: `, {
    email,
    firstName,
    lastName,
    comments,
  });
}
