import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';


class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question_list: [],
      question: [],
      answered: false,
      order: 0,
    };
  }


  componentWillMount() {
    const { pattern } = this.props.navigation.state.params;
    return fetch(`http://127.0.0.1:8000/patterns/${pattern.id}/question_list/`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          question_list: responseJson,
        })
      })
      .then(() => {
        const { question_list, order } = this.state;
        this.setState({
          question: question_list[order]
        })
      })
      .catch((error) =>{
        console.error(error);
      });
  }


  submitAnswer(num){
    const { correct_choice, explanation } = this.state.question;
    if (num==correct_choice){
      this.setState({
        judge: '○',
      })
    }else{
      this.setState({
        judge: '×',
      })
    }
    this.setState({
      explanation: explanation,
      answered: true,
    })
  }

  nextHandle(order){
    order += 1;
    const { question_list } = this.state;
    this.setState({
      question: question_list[order],
      answered: false,
      judge: null,
      explanation: null,
      order: order,
    })
  }


  render() {

    const { question, answered } = this.state;
    let { order } = this.state;
    let color = '#888';

    if (this.state.judge === '○') {
      color = '#ff3333';
    }

    return (
      <ScrollView style={styles.container}>
        <Text>所要時間　{ question.time_limit }</Text>
        
        <View style={styles.statement_1Container}> 
          <Text style={styles.questionTitle}>問題</Text>       
          <Text>{ question.statement_1 }</Text>
        </View>

        <View style={styles.choiceButtonContainer}>
          <TouchableOpacity onPress={ this.submitAnswer.bind(this,1) } style={styles.choiceButton} >
            <Text>1.   { question.choice_1 }</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.submitAnswer.bind(this,2) } style={styles.choiceButton}>
            <Text>2.   { question.choice_2 }</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.submitAnswer.bind(this,3) } style={styles.choiceButton}>
            <Text>3.   { question.choice_3 }</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.submitAnswer.bind(this,4) } style={styles.choiceButton}>
            <Text>4.   { question.choice_4 }</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.submitAnswer.bind(this,5) } style={styles.choiceButton}>
            <Text>5.   { question.choice_5 }</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.judge, { color }]}>{ this.state.judge }</Text>
        <Text>{ this.state.explanation }</Text>
        
        { answered ? 
          <TouchableOpacity onPress={ this.nextHandle.bind(this,order) } style={styles.nextButton}>
            <Text style={styles.nextButtonText}>次の問題 ></Text>
          </TouchableOpacity>
          : null
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  statement_1Container: {
    padding: 20,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  questionTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  choiceButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  choiceButton: {
    backgroundColor: '#cceeff',
    width: '100%',
    padding: 15,
    marginBottom: 1,
    shadowOffset:{  width: 0,  height: 1,  },
    shadowColor: '#AAA',
    shadowOpacity: 1.0,
  },
  judge: {
    textAlign: 'center',
    fontSize: 100,
  },
  nextButton: {
    backgroundColor: '#CCC',
    padding: 15,
    marginTop: 30,
    marginBottom: 100,
    shadowOffset:{  width: 0,  height: 1,  },
    shadowColor: '#AAA',
    shadowOpacity: 1.0,
  },
  nextButtonText: {
  }
});

export default QuestionScreen;