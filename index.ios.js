import React, {Component} from 'react';
import Main from './App/Components/Main';
import {
    AppRegistry,
    StyleSheet,
    Text,
    NavigatorIOS,
    View
} from 'react-native';

class githubNotetakerReactNative extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Github Notetaker',
                    component: Main
                }}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    }
});

AppRegistry.registerComponent('githubNotetakerReactNative', () => githubNotetakerReactNative);
