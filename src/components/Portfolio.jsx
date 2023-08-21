import React from 'react';
import PortfolioCard from "./PortfolioCard";
import website from "../images/portfolio/website1.jpg";

function Portfolio() {
  return (
      <>
        <div className="portfolio" id="projects">
          <div className="container">
            <div className="portfolio__inner">
              <h3 className="portfolio__title">PORTFOLIO</h3>
              <div className="portfolio__subtitle">
                Each project is a unique piece of development 🧩
              </div>
              <PortfolioCard
                  img={website}
                  title={"VEHICLE REPAIR SERVICE 🚗"}
                  description={"A vehicle service that allows allows users to do anything with their car in one place. Includes many services such as Engine Repair, Diagnostics, Vehicle Repair etc."}
                  tech1={"CSS"}
                  tech2={"JQuery"}
                  codeLink="https://github.com/CherneeNochi256/finsweet-clone"
                  demoLink={"https://cherneenochi256.github.io/finsweet-clone/"}
                  scrollY={"-90%"}
              />
                <PortfolioCard
                    img={'https://raw.githubusercontent.com/CherneeNochi256/crypto-alert-frontend/master/public/crypto-alerts-homepage.jpg'}
                    title={"CRYPTO ALERTS ₿"}
                    description={"Crypto Alerts is a website the main goal of which is to help in tracking crypto concurrences. You can write the price of the coin in which you are interested. And when this price is reached you will be notified on the website and on your email ."}
                    tech1={"React"}
                    tech2={"Spring"}
                    codeLink="https://github.com/CherneeNochi256/crypto-alert-frontend"
                    demoLink={"https://crypto-alerts-app.vercel.app"}
                    scrollY={"-75%"}
                />
            </div>
          </div>
        </div>
      </>
  );
}

export default Portfolio;