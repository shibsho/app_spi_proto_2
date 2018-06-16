import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';


class TopScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={ () => { navigate('MemoCreate') }} style={styles.btn}>
          <Text style={styles.btnTitle}>問題一覧</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'blue',
    height: 70,
    width: 180,
  },
  btnTitle: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 70,
  }
});

export default TopScreen;