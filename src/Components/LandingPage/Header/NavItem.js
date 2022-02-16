import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <Link to={props.link} className="icon-button" onClick={() => setOpen(!open)}>
                {props.name}
            </Link>
            {open && props.children}
        </li>
    );
}