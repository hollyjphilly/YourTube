import React from "react";
import MastheadContainer from "./masthead/masthead_container";
import LeftNav from "./leftnav";
import ModalContainer from "./upload_modal/modal_container";
import { Route } from 'react-router-dom';

function Main() {
    return (
    <>
        <MastheadContainer />
        <LeftNav />
        <div className="splash-banner"></div>
        <div className="splash-gradient"></div>
        <div className="banner"><span>Discover your content</span></div>
        <Route exact path="/upload" component={ModalContainer} />
    </>
    )
}

export default Main;