import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Axios from 'axios';

class NewsList extends Component {

    componentWillMount(){
        Axios.get('http://localhost:3004/articles')
        .then(response =>{
            console.log(response)
        })
    }

    render() {
        return (
            <View>
                <Text>NewsList</Text>
            </View>
        );
    }
}

export default NewsList;