import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LeftNav() {
    return (
        <>
            <div className="leftnav">
                <NavLink
                    exact to="/"
                    className="leftnav-btn">
                        <svg viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path>
                        </svg>
                    <span>Home</span>
                </NavLink>
                
                <NavLink
                    exact to="/feed/explore"
                    className="leftnav-btn">
                        <svg
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false">
                            <path d="M11.23 13.08c-.29-.21-.48-.51-.54-.86-.06-.35.02-.71.23-.99.21-.29.51-.48.86-.54.35-.06.7.02.99.23.29.21.48.51.54.86.06.35-.02.71-.23.99a1.327 1.327 0 01-1.08.56c-.28 0-.55-.08-.77-.25zM22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-3.97-6.03L9.8 9.8l-3.83 8.23 8.23-3.83 3.83-8.23z"></path>
                        </svg>
                    <span>Explore</span>
                </NavLink>

                <NavLink
                    exact to="/feed/subscriptions"
                    className="leftnav-btn">
                        <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false">
                        <path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"></path>
                        </svg>
                    <span>Subscriptions</span>
                </NavLink>

                <NavLink
                    exact to="/feed/likedvideos"
                    className="leftnav-btn">
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path>
                    </svg>    
                    <span>Library</span>
                </NavLink>


            </div>
        </>
    )
}