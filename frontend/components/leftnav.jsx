import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LeftNav() {
    return (
        <>
            <div className="leftnav">
                <NavLink className="leftnav-btn" to="/">
                    
                    <span>Home</span>
                </NavLink>
                
                <NavLink className="leftnav-btn" to="/feed/trending">
                    <FontAwesomeIcon className="icon" icon={['fa', 'fire']} />
                    <span>Trending</span>
                </NavLink>

                <NavLink className="leftnav-btn" to="/feed/subscriptions">
                    <FontAwesomeIcon className="icon" icon={['fab', 'youtube']} />
                    <span>Subscriptions</span>
                </NavLink>

                <NavLink className="leftnav-btn" to="/feed/likedvideos">
                    <FontAwesomeIcon className="icon" icon={['fa', 'photo-video']} />
                    <span>Library</span>
                </NavLink>


            </div>
        </>
    )
}