import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';


class PatternsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentWillMount() {

    return fetch('http://127.0.0.1:8000/patterns/')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          patterns: responseJson,
        })
      })
      .catch((error) =>{
        console.error(error);
      });
  }




  render() {
    

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <Text style={styles.pageTitle}>問題パターン</Text>


          <FlatList
            data={ this.state.patterns }
            renderItem={({item}) =>
                <TouchableOpacity onPress={ () => { navigate('Question', { pattern: item }) }} style={styles.btn}>
                  <Text style={styles.btnText}>{item.sub_name}</Text>
                </TouchableOpacity>
            }
            contentContainerStyle={styles.patternsList}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 70,
  },
  patternsList: {
    height: 250,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#58aae3',
    height: 60,
    width: 170,
  },
  btnText: {
    textAlign: 'center',
    lineHeight: 60,
  }
});

export default PatternsScreen;