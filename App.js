/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Provider
} from "mobx-react/native" ;
import StackScreen from "./src";
import Store from "./src/store" ;
import {
    observer
} from "mobx-react/native";
import "moment" ;
import "moment/locale/zh-cn" ;
@observer
export default class App extends Component {
  render() {
    return (
        <Provider {...Store}>
            <StackScreen/>
        </Provider>
    );
  }
}
