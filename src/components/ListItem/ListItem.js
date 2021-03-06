import React, { PureComponent } from 'react';
import {
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View
} from 'react-native'
import PropTypes from 'prop-types';

export default class ListItem extends PureComponent {

    static propTypes = {
        task: PropTypes.string.isRequired,
        onItemPressed: PropTypes.func
    }

    static defaultProps = {
        onItemPressed: () => {}
    }

    render () {
        return(
            <TouchableOpacity onPress={this.props.onItemPressed}>
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