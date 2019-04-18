import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {

    const { textStyle, viewStyle } = styles;

    return (
        <View>
            <Text>{props.headerText}</Text>
            <View style={viewStyle}>
                <Text style={textStyle}>Home</Text> 
                <Text style={textStyle}>Mechanics</Text> 
                <Text style={textStyle}>Gas</Text> 
            </View>  
        </View>
        
        
    );
};

const styles={
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'space-around',
        flexDirection:'row',
        height:60,
        paddingTop:15,
        //shadowColor:'#000',
        //shadowOffset: {width:0,height:2},
        //shadowOpacity:1,
        //elevation:2,
        //position:'relative'
    },
    textStyle:{
        fontSize:20
    }
};

export default Header;