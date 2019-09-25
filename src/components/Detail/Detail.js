import React, { PureComponent } from 'react';
import {
    StyleSheet, 
    Text,
    Button,
    SafeAreaView,
    Modal
} from 'react-native'
import PropTypes from 'prop-types';

export default class Detail extends PureComponent {

    static propTypes = {
        task: PropTypes.string,
        onCloseModal: PropTypes.func,
        onDeleteItem: PropTypes.func
    }

    static defaultProps = {
        task: 'Some text',
        onCloseModal: () => {},
        onDeleteItem: () => {}
    }

    render() {
        return (
            <Modal
                visible= { this.props.task != null }
                animationType="slide"
                onRequestClose={ this.props.onCloseModal }>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.text}>
                        {this.props.task}
                    </Text>
                    <Button
                        title="Close"
                        onPress={ this.props.onCloseModal } />
                    <Button
                        title="Delete"
                        color='red'
                        onPress={ this.props.onDeleteItem } />
                </SafeAreaView>
            </Modal>
        );
    }
}

const styles  = StyleSheet.create({
    container: {
        margin: 16,
    },
    text: {
        fontSize: 20,
        marginBottom: 16
    }
});