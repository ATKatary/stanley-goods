import * as React from 'react';
import "../assets/css/utils.css";

import Nav from '../components/nav';
import Prodcuts from '../components/product';
import Contact from '../components/forms/contact';
import { NAV_GC } from '../components/content/nav';

import { GC, Notification, useCustomState } from '../components/utils';

function Landing() {
    const {NAV_LEFT, NAV_RIGHT, ...NAV_GC_REST} = NAV_GC({});
    const images = require.context('../assets/media/images', true);
    const [notification, setNotification] = useCustomState({value: null, notify: false});

    return (
        <>
        <Nav 
            vertical={false}
            collapsed={false}
            style={{zIndex: "10"}}
            
            itemsLeft={NAV_LEFT} 
            leftStyle={{padding: "0 0 0 30px", justifyContent: "center", width: "100%"}}
            
            itemsRight={NAV_RIGHT}
            rightStyle={{padding: "0 30px 0 0"}}
            
            openedStyle={{height: `${GC.NAV.HEIGHT}px`, padding: "0 0 10px 0"}}
            
            closedStyle={{height: `50px`, width: "75px", left: "calc(100% - 76px)", top: "10px", backgroundColor: GC.PRIMARY}}
        />

        <section id="products">
            <Prodcuts images={images}/>
        </section>
        
        <section id="contact" className="flex width-100 justify-center" style={{backgroundColor: GC.SECONDARY}}>
            <Contact setNotification={setNotification}/>
        </section>

        <Notification notification={notification} setNotification={setNotification} duration={6000} ContentProps={{className: `${GC.FONT.FAMILY.DEFAULT}`}}/>
        </>
    )
}

export default Landing;