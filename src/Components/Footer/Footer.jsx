import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={`${classes.section} section--dark`}>
      <div className={`${classes.container} container-navbar`}>
        <a className='bold hover' href="tel:+79255087785">+7 925 508 77 85</a>
        <a className='hover' href="mail:9255087785@mail.ru">9255087785@mail.ru</a>
      </div>
    </div>
  )
}

export default Footer;