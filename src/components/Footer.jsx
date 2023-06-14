import React from 'react';
import github from '../images/header/github.svg'
import linkedIn from '../images/header/linkedin.svg'

function Footer(props) {
  return (
      <>
        <footer className="footer">
          <div className="container">
            <div className="footer__inner">
              <div className="footer__copyright">
                Copyright © 2023. All rights are reserved
              </div>
              <ul className="footer__icons">
                <li className="footer__icons-item">
                  <img src={github} alt=""/>
                </li>
                <li className="footer__icons-item">
                  <img src={linkedIn} alt=""/>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
  );
}

export default Footer;