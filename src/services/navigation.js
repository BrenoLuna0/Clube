import * as React from 'react';

export const navigationRef = React.createRef();

export function getCurrentRoute(nav) {
    if(!nav){
        nav = navigationRef.current?.state.nav
    }
    
    if (Array.isArray(nav.routes) && nav.routes.length > 0) {
        return getCurrentRoute(nav.routes[nav.index])
    } else {
        return nav.routeName
    }
}
