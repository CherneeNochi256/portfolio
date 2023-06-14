import React, {useState} from 'react';
import burger from '../images/header/burger.svg'
import cross from '../images/header/cross.svg'

function Navbar() {

  const [showBurgerList, setShowBurgerList] = useState(false);

  const navList = ['Home', 'About', 'Projects', 'Contact']


  const burgerNavItems = navList.map(item => {
    return (
        <li className="burger-list__item" onClick={() => setShowBurgerList(false)}>
          <a href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        </li>
    )
  })

  const navItems = navList.map(item => {
    return (
        <li className="nav__list-item">
          <a href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        </li>
    )
  })


  return (
      <>
        <div className={`burger-cross ${showBurgerList === false ? 'burger-cross--hidden' : ''}`}
             onClick={() => setShowBurgerList(false)}>
          <img src={cross} alt=""/>
        </div>
        <ul className={`burger-list ${showBurgerList === false ? 'burger-list--hidden' : ''}`}>
          {burgerNavItems}
        </ul>


        <nav className="nav">
          <a href="#home" className="nav__logo">
            Maxim.dev
          </a>
          <ul className="nav__list">
            {navItems}
          </ul>

          <div className="burger" onClick={() => setShowBurgerList(true)}>
            <img src={burger} alt=""/>
          </div>
        </nav>
      </>
  );
}

export default Navbar;