import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
                <li className={classes.item__element}>
                    <NavLink to='/profile' className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
                </li>
                <li className={classes.item__element}>
                    <NavLink to='/dialogs' className={ navData => navData.isActive ? classes.active : classes.item }>Messages</NavLink>
                </li>
                <li className={classes.item__element}>
                    <NavLink to='/news' className={ navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
                </li>
                <li className={classes.item__element}>
                    <NavLink to='/music' className={ navData => navData.isActive ? classes.active : classes.item }>Music</NavLink>
                </li>
                <li className={classes.item__element}>
                    <NavLink to='/settings' className={ navData => navData.isActive ? classes.active : classes.item }>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
