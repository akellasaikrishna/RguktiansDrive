import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./components/loading-screen";
import LoginScreen from "./components/login-screen";
import firebase from "firebase";
import { firebaseConfig } from "./config";
import DashboardScreen from "./components/dashboard-screen";

firebase.initializeApp(firebaseConfig);

const App = () => {
  return <AppNavigator />;
};

const MainNavigator = createStackNavigator({
  loading: { screen: LoadingScreen },
  login: { screen: LoginScreen },
  dashboard: { screen: DashboardScreen }
});

const AppNavigator = createAppContainer(MainNavigator);

export default App;
