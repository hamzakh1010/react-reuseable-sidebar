import { SidebarLinks } from './sidebar-links';
import Submenu from './submenu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className="nav">
                <Link className="nav-icon" to='#'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <div className={sidebar ? `sidebar-nav` : `sidebar-nav-closes`}>
                <div className="sidebar-wrap">
                    <Link className="nav-icon" to='#'>
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </Link>
                    {SidebarLinks.map((item, index) => {
                        return <Submenu item={item} key={index} />;
                    })}
                </div>
            </div>
        </>
    )
}

export default Sidebar
