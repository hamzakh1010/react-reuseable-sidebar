import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Submenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => {
        console.log("enter")
        setSubnav(true)
        setSubnav(!subnav)
    };
    console.log("subnav", subnav)
    return (
        <>
            {console.log("Called")}
            <Link className="sidebar-link" to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </Link>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <Link className="dropdown-link" to={item.path} key={index}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
        </>
    )
}

export default Submenu
