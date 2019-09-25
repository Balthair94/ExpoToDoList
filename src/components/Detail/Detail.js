import React, { PureComponent } from 'react';
import {
    StyleSheet, 
    Text,
    Button,
    SafeAreaView,
    Modal
} from 'react-native'

export default class Detail extends PureComponent {

    render() {
        return (
            <Modal
                visible= { this.props.task != null }
                animationType="slide"
                onRequestClose={ this.props.onCloseModal }>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.text}>
                        {this.props.task ? this.props.task : 'Some text'}
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