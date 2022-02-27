import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import React from "react";
import useScreenType from "react-screentype-hook";

function AppBottomNav() {

    const screenType = useScreenType();
    console.log(screenType);

    if(!screenType.isMobile) {
        return (<div/>);
    }

    return (
        <BottomNavigation
            showLabels
            // value={value}
            onChange={(event, newValue) => {
                // setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Recents"  />
            <BottomNavigationAction label="Favorites"  />
            <BottomNavigationAction label="Nearby"  />
        </BottomNavigation>
    );
}


export default AppBottomNav;
