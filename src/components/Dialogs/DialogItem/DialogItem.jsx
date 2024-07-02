import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <li className={classes.dialog__item}><NavLink to={path} className={classes.dialog}>{props.name}</NavLink>
        </li>
    )
}

export default DialogItem