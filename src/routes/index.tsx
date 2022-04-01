import React from 'react';
import AuthStack from "./AuthStack";
import LoggedStack from "./LoggedStack";

function Routes(){
    const isAuthenticated = true;
    return isAuthenticated ? <LoggedStack /> : <AuthStack />
}

export default Routes;