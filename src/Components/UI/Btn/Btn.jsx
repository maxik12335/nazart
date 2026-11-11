import classes from './Btn.module.css'
import { NavLink } from 'react-router-dom';

const Btn = ({children, isColor, link, ...props}) => {
  return (
    <NavLink className={`${isColor === 'dark' ? classes.btnForDark : classes.btnForLight} text-sm`} to={link} {...props}>
      {children}
    </NavLink>
  )
}

export default Btn;