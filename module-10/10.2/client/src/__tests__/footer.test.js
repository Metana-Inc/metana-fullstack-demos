import React from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE, COPYRIGHT_INFO } from '../config';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  test('renders the footer with the correct information', () => {
    console.log('Rendering Footer component...');
    render(<Footer />);

    console.log('Checking if the copyright information is correct.');
    expect(
      screen.getByText(`Copyright: ${COPYRIGHT_INFO}`)
    ).toBeInTheDocument();

    console.log(
      'Checking if the email address is present and correctly linked.'
    );
    const emailElement = screen.getByText(CONTACT_EMAIL);
    expect(emailElement).toBeInTheDocument();
    expect(emailElement).toHaveAttribute('href', `mailto:${CONTACT_EMAIL}`);

    console.log(
      'Checking if the phone number is correctly formatted and present.'
    );
    expect(screen.getByText(/ph:\s*\+1\(234\)567-8901/)).toBeInTheDocument();

    console.log('Footer component rendered with correct content.');
  });
});
