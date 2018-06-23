import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import { DangerZone } from 'expo';
let { Lottie } = DangerZone;


class PatternsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }


  componentWillMount() {

    return fetch('http://127.0.0.1:8000/patterns/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          patterns: responseJson,
        })
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  componentDidMount() {
    this.animation.play();
  }

  press(){
    this.setState({
      isLoading: false,
    })
  }

  render() {
    

    const { navigate } = this.props.navigation;

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 80,
              height: 80
            }}
            loop={ true }
            speed={ 1 }
            source={require("../../animations/loading.json")}
          />
          
          <TouchableOpacity onPress={ this.press.bind(this) }>
            <Text>ボタン</Text>
          </TouchableOpacity>
        </View>
      )
    }

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