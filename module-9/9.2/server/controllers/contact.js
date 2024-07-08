// Contact functions for email signup / contact form
import validator from 'validator';

// Validation for contact form values
function validateValues({ email, firstName, lastName }) {
  const emailValid = validator.isEmail(email);
  const firstNameValid = validator.isAlpha(firstName?.trim().replace('-', '')); // replace hyphens in name before checking if it's alphabetic
  const lastNameValid = validator.isAlpha(lastName?.trim().replace('-', ''));

  return emailValid && firstNameValid && lastNameValid;
}

// Sanitization function for user input from signup / contact forms.
// Replaces any non-latin characters (besides .,_-!?"' and spaces). Allows Latin characters with diacritics.
const cleanStringRegex = new RegExp(`[^\p{L}\p{Pd} !\?,\.]`, 'gmiu');
const sanitizeText = (str) => str.trim().replace(cleanStringRegex, '');

// Sanitization function for human names. Allows spaces, latin characters, periods, and hyphens
const cleanNameRegex = new RegExp(`[^\p{L} -\.]`, 'gmiu');
const sanitizeName = (name) => name.trim().replace(cleanNameRegex, '');

// handler for the contact submit form
export async function handleSubmitContact({
  email,
  firstName,
  lastName,
  comments,
}) {
  if (!email || !firstName || !lastName) {
    throw new Error('form values cannot be empty');
  }
  if (!validateValues({ email, firstName, lastName, comments })) {
    throw new Error('invalid form values failed');
  }
  // Do something with this input
  await processContactForm({ email, firstName, lastName, comments });
}

// Function to save contact form data to database or send email to administrator
async function processContactForm({ email, firstName, lastName, comments }) {
  try {
    // Always sanitize any kind of input from users, or get hacked.
    if (!validator.isEmail(email)) {
      throw new Error('invalid email');
    }
    email = email.trim();
    firstName = sanitizeName(firstName);
    lastName = sanitizeName(lastName);
    comments = sanitizeText(comments);

    // FIXME: do something with this input -- send administrator an email, or store to a database for processing.
    console.log(`=== debug: form input received: `, {
      email,
      firstName,
      lastName,
      comments,
    });
  } catch (err) {
    throw new Error('sanitization failed');
  }
}
