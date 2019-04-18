import React from 'react';
import { AppRegistry } from 'react-native';
import { name as AppName} from './app.json';

import Home from './src/Components/Home/home'

const App = ()=>{
    return(
        <Home/>
    )
}

AppRegistry.registerComponent( AppName,()=> App);