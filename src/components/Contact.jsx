import React from 'react';
import pointer from '../images/contact/pointer.png'
import location from "../images/contact/location.png";
import mail from "../images/contact/mail.png";

function Contact(props) {
  return (
      <>
        <div className="contact" id="contact">
          <div className="container">
            <div className="contact__inner">
              <h1 className="contact__title">
                CONTACT
              </h1>
              <h2 className="contact__subtitle">
                Don't be shy! Hit me up!
                <img src={pointer} alt="pointer icon"/>
              </h2>
              <ul className="contact__list">
                <li className="contact__list-item">
                  <div className="contact__list-item-img">
                    <img src={location} alt="html" width={34}/>
                  </div>
                  <div className="contact__list-item-text">
                    <h2 className="contact__list-item-title">
                      Location
                    </h2>
                    <p className="contact__list-item-value">
                      Melitopol, Russia
                    </p>
                  </div>
                </li>
                <li className="contact__list-item">
                  <div className="contact__list-item-img">
                    <img src={mail} alt="html" width={34}/>
                  </div>
                  <div className="contact__list-item-text">
                    <h2 className="contact__list-item-title">
                      Mail
                    </h2>
                    <p className="contact__list-item-value">
                      Maks3d47@gmail.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
  );
}

export default Contact;