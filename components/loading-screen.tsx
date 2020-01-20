import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import firebase from "firebase";

export default class LoadingScreen extends React.Component<any, any> {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("dashboard");
      } else {
        this.props.navigation.navigate("login");
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Splash Screen</Text> */}
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
