import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';


export default class CustomButton extends Component{
    static defaultProps = {
        title: 'untitled',
        buttonColor: '#000',
        titleColor: '#fff',
        onPress: () => null,
        imgUrl: 'none',
        imgSize: 30,
    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <TouchableOpacity style={[
                styles.button,
                {backgroundColor: this.props.buttonColor}
            ]}
            onPress={this.props.onPress}>
                <Image source={{uri:this.props.imgUrl}} resizeMode='contain' style={{width: this.props.imgSize, height: this.props.imgSize}}/>
                <Text style={[
                    styles.title,
                    {color: this.props.titleColor}
                ]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        borderRadius: 5,
        height: responsiveHeight(7),
        flexDirection: 'row',
        width: responsiveWidth(80)
    },
    title: {
        fontSize: responsiveFontSize(2),
        width: '85%',
        textAlign: 'center'
    },
});