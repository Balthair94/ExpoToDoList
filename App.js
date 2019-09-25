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
import Detail from './src/components/Detail/Detail'

export default class App extends Component {

  state = {
    currentInput: '',
    list: [],
    selected: null
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

  closeModal = () => {
    this.setState({
      selected: null
    });
  }

  itemSelected = value => {
    this.setState(prev => ({
      selected: prev.list.find(text => text === value)
    }));
  }

  deleteItem = () => {
    this.setState(prev => ({
      list: prev.list.filter(item => { return item != prev.selected}),
      selected: null
    }));
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
          renderItem={({ item }) => 
            <ListItem task={item} onItemPressed={() => this.itemSelected(item)}/>
          }/>
        <Detail 
          task={this.state.selected}
          onCloseModal={this.closeModal}
          onDeleteItem={this.deleteItem} />
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
