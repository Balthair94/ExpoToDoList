import React, { Component } from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  View,
  Button, 
  TextInput,
  FlatList,
  Alert,
  Text
} from 'react-native';
import ListItem from './src/components/ListItem/ListItem'

export default class App extends Component {

  state = {
    currentInput: '',
    list: []
  }

  textChangeHandler = value => {
    this.setState({currentInput: value});
  }

  submitTextInput = () => {
    if(this.state.currentInput.trim() === '') {
      Alert.alert('No content', 'There is no input to save');
    } else {
      this.setState(prev => ({
        list: prev.list.concat(prev.currentInput),
        currentInput: ''
      }));
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Button
            style={styles.buttonAction}
            title="Add"
            onPress={this.submitTextInput}
          />
          <TextInput
             style={styles.textInput}
             placeholder='Your task here'
             value={this.state.currentInput}
             onChangeText={text => this.textChangeHandler(text)}
             onSubmitEditing={this.submitTextInput}/>
        </View>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => <ListItem task={item}/>}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row'
  },
  textInput: {
    marginStart: 8,
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    flexGrow: 1,
  },
  buttonAction: {
    flexGrow: 1,
  }
});
