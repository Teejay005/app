import React, { Component } from 'react';
import { View } from 'react-native';
import VoiceTest from './VoiceTest';
import RecordAudio from './RecordAudio';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VoiceTest/>
        <RecordAudio/>
      </View>
    );
  }
}


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};

// const mapStateToProps = ({ speech }) => {
//   return { speech };
// };
//
// export default connect(mapStateToProps, { translateText })(Main);
export default Main;