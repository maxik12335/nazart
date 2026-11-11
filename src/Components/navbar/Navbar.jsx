import classes from "./Navbar.module.css"
import MobileMenu from "../MobileMenu/MobileMenu";
import watsapp from '../../assets/watsapp.png'
import telegram from '../../assets/telegram.png'
import Btn from "../UI/Btn/Btn";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  return (
   <div className={`${classes.navbar} line-dark`}>
      <div className="container-navbar">

        <div className={classes.desctopMenu}>
          <NavLink to={'/'} className="h3">Nazart</NavLink>

          <Btn isColor={'light'} link={'/catalog'}>
            каталог
          </Btn>
          
          <div className={classes.contacts}>
            <a className={`${classes.tel} text-sm hover`} href="tel:+79255087785">+7 925 508 77 85</a>
          
          
            <div className={classes.media}>
              <a
                className={`${classes.icon} hover`}
                href="https://wa.me/79255087785?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%21%20%D0%A1%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20NazArt.shop"
                target="_blank"
              >
                <img className={classes.iconImg} src={watsapp} alt="watsapp" />
              </a>
              <a
                className={`${classes.icon} hover`}
                href="https://t.me/Alex_sound1"
                target="_blank"
              >
                <img className={classes.iconImg} src={telegram} alt="telegram" />
              </a>
            </div>
          </div>
        </div>

        <MobileMenu />

      </div>
    </div>
  )
}

export default Navbar;