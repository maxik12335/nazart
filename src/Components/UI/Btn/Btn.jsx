import classes from './Btn.module.css'
import { NavLink } from 'react-router-dom';

const Btn = ({children, isColor, link, ...props}) => {
  
  const STYLES = {
    dark: classes.dark,
    light: classes.light,
    navbar: classes.navbar,
  }

  return (
    <NavLink className={`${classes.btn} ${STYLES[isColor]} text-sm`} to={link} {...props}>
      {children}
    </NavLink>
  )
}

export default Btn;