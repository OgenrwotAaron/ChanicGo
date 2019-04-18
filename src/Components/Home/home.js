import React from 'react';
import { View, Text } from 'react-native'

import Header from '../Header/header';
import Newslist from '../NewsList/newsList'

const Home = () => {
    return (
        <View>
            <Header headerText={'Home'}/>
            <Text>Home</Text>
            <Newslist/>
        </View>
    );
};

export default Home;