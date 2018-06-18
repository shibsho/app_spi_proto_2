import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

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
        <Text>ログイン</Text>
        <TextInput
          style={{height: 40}}
          placeholder="ユーザー名"
          onChangeText={(username) => this.setState({username})}
          autoCapitalize="none"
        />
        <TextInput
          style={{height: 40}}
          placeholder="パスワード"
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          autoCapitalize="none"
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
    backgroundColor: '#fff',
  },
});

export default LoginScreen;
