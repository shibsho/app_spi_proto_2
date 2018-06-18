import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Jiro } from 'react-native-textinput-effects';


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
        <View style={styles.textInputContainer}>
          <Jiro
            label={'ユーザー名'}
            borderColor={'#abd3cc'}
            autoCapitalize={'none'}
            inputStyle={{fontSize:20, padding:3}}
          />
          <Jiro
            label={'パスワード'}
            borderColor={'#b76c94'}
            autoCapitalize={'none'}
            secureTextEntry={true}
            style={{marginTop:20}}
            inputStyle={{fontSize:20, padding:3}}
          />
        </View>


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
  textInputContainer: {
    paddingRight: 20,
    paddingLeft: 20,
  },
});

export default LoginScreen;
