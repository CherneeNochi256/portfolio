import React, {useState} from 'react';


function PortfolioCard({
                         img,
                         title,
                         description,
                         tech1,
                         tech2,
                         codeLink,
                         demoLink,
                         scrollY,
                       }) {

  const [scroll, setScroll] = useState(false);

  return (
      <>
        <div className="portfolio-card">
          <a href={demoLink} className="portfolio-card__website">
            <img
                src={img}
                alt="website"
                style={{
                  transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                  transition: "transform 10s ease-in-out",
                }}
                onMouseEnter={() => setScroll(true)}
                onMouseLeave={() => setScroll(false)}
            />
          </a>
          <div className="portfolio-card__text">
            <h3>{title}</h3>
            <p>
              {description}
            </p>
            <ul className="portfolio-card__tech">
              <li className="portfolio-card__tech-item">{tech1}</li>
              <li className="portfolio-card__tech-item">{tech2}</li>
            </ul>
            <ul className="portfolio-card__links">
              <li className="portfolio-card__links-item">
                <a href={codeLink} target={"_blank"}>
                  <h3>Code</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </li>
              <li className="portfolio-card__links-item">
                <a target={"_blank"} href={demoLink}>
                  <h3>Live Demo</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
  );
}

export default PortfolioCard;