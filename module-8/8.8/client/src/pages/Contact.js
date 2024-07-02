import './Contact.css';
function Contact() {
  const email = 'contact@example.com';
  const facebook = '#';
  const twitterX = '#';
  return (
    <div>
      <h2>Contact</h2>

      <div>
        <h3>About me</h3>
        <p>
          Condimentum id auctor quis, ultricies in turpis. Vestibulum suscipit
          commodo ante quis tincidunt. Cras posuere fringilla lectus, ac posuere
          ligula auctor non. Mauris metus nulla, aliquet non aliquam a, lacinia
          sed nulla. Sed quis consequat massa. In hac habitasse plate.
        </p>
      </div>
      <div className="margin-top-30">
        <h3>Get in touch</h3>
        <p>If you'd like to get in touch, I'd love to hear from you.</p>

        <div className="contact-methods">
          <p>
            <label>Email</label>{' '}
            <span className="contact-method-item">
              <a href={`mailto:${email}`}>{email}</a>
            </span>
          </p>
          <p>
            <span className="contact-method-item">
              <a href={facebook}>Facebook</a>
            </span>
          </p>
          <p>
            <span className="contact-method-item">
              <a href={twitterX}>Twitter / X</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
