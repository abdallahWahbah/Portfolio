import React, {useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom';

import navImage from '../assets/main.jpg';
import { mainNavigationItems } from './JsonData';

const MainNavigation = () => 
{
    const [selectedItem, setSeletedItem] = useState(0);
    const location = useLocation();

    useEffect(() => 
    {
        const currentItem = mainNavigationItems.find(item => item.to === location.pathname);
        if(currentItem !== -1) setSeletedItem(currentItem?.id);
    }, [location.pathname])

    return (
        // css file: layouts/navigation
        <div className='navigation'>
            <div className='navigation__image--container'>
                <img className='navigation__image' src={navImage} alt="Navigation"/>
            </div>

            <ul className='navigation__list'>
                {mainNavigationItems.map(item => (
                    <li key={item.title} onClick={() => setSeletedItem(item.id)}>
                        <NavLink  
                            className={`navigation__item ${item.id === selectedItem ? "navigation__item--selected" : ''}`} 
                            to={item.to}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className='navigation__footer'>
                &copy; 2022 by <span className='navigation__footer--bold'>AbdallahWahbah</span>
            </div>
        </div>
    )
}

export default MainNavigation