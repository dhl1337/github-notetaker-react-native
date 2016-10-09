import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

class Separator extends Component {
    render() {
        return (
            <View style={styles.separator} />
        )
    }
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#E4E4E4',
        flex: 1,
        marginLeft: 15
    }
});

export default Separator;