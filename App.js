import React, { Component }  from 'react';
import {WebView} from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler} from 'react-native';


export default class App extends Component {
  WEBVIEW_REF = React.createRef();

  state = {
    canGoBack: false,
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => {
    if (this.state.canGoBack) {
      this.WEBVIEW_REF.current.goBack();
      return true;
    }
  };

  onNavigationStateChange = (navState) => {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  };

  render() {
    return (
      <WebView
        source={{ uri: "https://ni3ra5.github.io/nibraskhan/" }}
        ref={this.WEBVIEW_REF}
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }
}