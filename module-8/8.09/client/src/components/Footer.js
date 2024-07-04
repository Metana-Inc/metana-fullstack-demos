import './Footer.css';

function Footer() {
  return (
    <footer id="footer" className="justify-around">
      <div className="space-between w-95">
        <span>Copyright: 2024 Super Web Dev</span>
        <span className="footer-contact">
          <span className="footer-email">
            email: <a href="mailto:info@example.com">info@example.com</a>{' '}
          </span>
          <span className="footer-phone"> ph: +1(234)567-8901</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
