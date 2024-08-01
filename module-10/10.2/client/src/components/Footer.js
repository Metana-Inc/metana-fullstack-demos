import React from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE, COPYRIGHT_INFO } from '../config.js';

function Footer() {
  return (
    <footer
      id="footer"
      className="relative flex text-gray-500 text-sm bottom-0 bg-slate-200 w-full h-12 items-center justify-between px-4"
    >
      <span>Copyright: {COPYRIGHT_INFO}</span>
      <span className="footer-contact">
        <span className="footer-email">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{' '}
        </span>
        <span className="footer-phone ml-4"> ph: {CONTACT_PHONE}</span>
      </span>
    </footer>
  );
}

export default Footer;
