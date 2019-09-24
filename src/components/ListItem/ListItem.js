import React, { PureComponent } from 'react';
import {
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View
} from 'react-native'

export default class ListItem extends PureComponent {
    render () {
        return(
            <TouchableOpacity>
                <View  style={ styles.container }>
                    <Text>{ this.props.task }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        height: 50,
        justifyContent: 'center',
        marginTop: 16
    }
});