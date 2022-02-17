import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectedOutsideClick";
import {Link} from "react-router-dom";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export const Dropdown = ({text, link, items}) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

    return (
            <div className="menu-container"
                 onMouseLeave={()=>setIsActive(!isActive)}
                 onMouseEnter={()=>setIsActive(!isActive)}
            >
                <nav
                    className="nav-item">
                    <Link to={link} className="icon-button">
                        {text}
                    </Link>
                </nav>
                <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                >
                    <ul>
                        {items.map((item, i)=>(
                            <li key={i}>
                                <a href={item.link}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
    );
}
