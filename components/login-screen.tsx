import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import * as GoogleSignIn from "expo-google-sign-in";
import * as AppAuth from "expo-app-auth";

export default class LoginScreen extends Component<any, any> {
  state = { data: null };
  static navigationOptions = {
    header: null
  };

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    console.log("_syncUserWithStateAsync", { user });
    this.setState({ user });
    this.props.navigation.navigate("dashboard");
  };

  signInWithGoogleAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const user = await GoogleSignIn.signInAsync();
      if (user.type == "success") {
        this.setState({ data: user });
        this._syncUserWithStateAsync();
      } else {
        this.props.navigation.navigate("login");
      }
    } catch (error) {
      this.setState({ data: error });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign In" onPress={() => this.signInWithGoogleAsync()} />
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
