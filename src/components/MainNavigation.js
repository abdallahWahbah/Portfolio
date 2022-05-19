import React, {useState, useEffect, useRef} from 'react'
import { NavLink, useLocation } from 'react-router-dom';

import navImage from '../assets/main.jpg';
import { mainNavigationItems } from './JsonData';

const MainNavigation = () => 
{
    const [selectedItem, setSeletedItem] = useState(0);
    const [itemClicked, setItemClicked] = useState(false);
    const checkboxRef = useRef();
    const location = useLocation();

    useEffect(() => 
    {
        const currentItem = mainNavigationItems.find(item => item.to === location.pathname);
        if(currentItem !== -1) setSeletedItem(currentItem?.id);
    }, [location.pathname])

    useEffect(()=> // this useEffect is used so that when I click on a certain mainNavigation item, close the navigation (in case of responsive design ... before width of 1200px)
    {   
        checkboxRef.current.checked=false;
        setItemClicked(false)
    }, [itemClicked])

    return (
        // css file: layouts/navigation
        <React.Fragment>
            <input className='navigation__input' id='navigation__icon--input' type="checkbox" ref={checkboxRef}/>
            <label className='navigation__button' htmlFor='navigation__icon--input'>
                <span className='navigation__button--text'></span>
            </label>

            <nav className='navigation'>

                <div className='navigation__image--container'>
                    <img className='navigation__image' src={navImage} alt="Navigation"/>
                </div>

                <ul className='navigation__list'>
                    {mainNavigationItems.map(item => (
                        <li key={item.title} onClick={() => setSeletedItem(item.id)}>
                            <NavLink  
                                className={`navigation__item ${item.id === selectedItem ? "navigation__item--selected" : ''}`} 
                                to={item.to}
                                onClick={() => setItemClicked(true)}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className='navigation__footer'>
                    &copy; 2022 by <span className='navigation__footer--bold'>AbdallahWahbah</span>
                </div>
                </nav>

        </React.Fragment>
    )
}

export default MainNavigation