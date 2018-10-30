import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../init/store';
import { Image, Dimensions } from 'react-native';
import { Container } from 'native-base';

export default class ShowPhoto extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam ('name', 'Photo'),
            headerStyle: { backgroundColor: '#324291', },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', },
        };
    };

    render() {
        const { navigate } = this.props.navigation;
        const url = this.props.navigation.getParam ('url', 'url');
        const imageUrl = { uri: url };
        const win = Dimensions.get('window');
        const imageSize = { width: win.width, height: win.height-80 };
        return (
            <Provider store={ store }>
                <Container>
                    <Image
                        style = { imageSize }
                        source = { imageUrl }
                    />
                </Container>
            </Provider>
        );
    }
}