import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import '../Styles/Navbar.css';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const links = [
        { title: 'Link 1', sublinks: ['Sublink 1-1', 'Sublink 1-2', 'Sublink 1-3', 'Sublink 1-4'] },
        { title: 'Link 2', sublinks: ['Sublink 2-1', 'Sublink 2-2', 'Sublink 2-3', 'Sublink 2-4'] },
        { title: 'Link 3', sublinks: ['Sublink 3-1', 'Sublink 3-2', 'Sublink 3-3', 'Sublink 3-4'] },
        { title: 'Link 4', sublinks: ['Sublink 4-1', 'Sublink 4-2', 'Sublink 4-3', 'Sublink 4-4'] },
        { title: 'Link 5', sublinks: ['Sublink 5-1', 'Sublink 5-2', 'Sublink 5-3', 'Sublink 5-4'] },
        { title: 'Link 6', sublinks: ['Sublink 6-1', 'Sublink 6-2', 'Sublink 6-3', 'Sublink 6-4'] },
        { title: 'Link 7', sublinks: ['Sublink 7-1', 'Sublink 7-2', 'Sublink 7-3', 'Sublink 7-4'] },
    ];

    const handleMouseEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <div className="navbar">
            <div className="menu">
                <h3>Code<span style={{ color: 'red' }}>n</span>trix</h3>
            </div>
            <div className="links">
                {links.map((link, index) => (
                    <div 
                        key={index} 
                        className="nav-item" 
                        onMouseEnter={() => handleMouseEnter(index)} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="#">{link.title}</Link>
                        {activeDropdown === index && (
                            <div className="dropdown">
                                <ul>
                                    {link.sublinks.map((sublink, subindex) => (
                                        <li key={subindex}><Link to="#">{sublink}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="profile">
                <div className='icon'><ManageAccountsIcon /></div>
                {/* <div className='icon'><MenuIcon /></div> */}
            </div>
        </div>
    );
};

export default Navbar;
