import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Hoshi } from 'react-native-textinput-effects';


class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  login(){
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Top' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {

    return (
      <View style={styles.container}>
  <Hoshi
    label={'ユーザー名'}
    // this is used as active border color
    borderColor={'#abd3cc'}
    // this is used to set backgroundColor of label mask.
    // please pass the backgroundColor of your TextInput container.
    backgroundColor={'#F9F7F6'}
    autoCapitalize={'none'}
    inputStyle={{fontSize:20, padding:10}}
  />
  <Hoshi
    label={'パスワード'}
    // this is used as active border color
    borderColor={'#b76c94'}
    // this is used to set backgroundColor of label mask.
    // please pass the backgroundColor of your TextInput container.
    backgroundColor={'#F9F7F6'}
    autoCapitalize={'none'}
    secureTextEntry={true}
    inputStyle={{fontSize:20, padding:10}}

  />


        <TouchableOpacity onPress={ this.login.bind(this) }>
          <Text>ログインする</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => {this.props.navigation.navigate('SignUp')} }>
          <Text>登録画面へ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: '#fff',
  },
});

export default LoginScreen;
