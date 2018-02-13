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
import {
    observer
} from "mobx-react/native";
import "moment" ;
import "moment/locale/zh-cn" ;
import "./src/storage" ; //加载本地缓存
import Store from "./src/store" ; // 加载全局数据状态管理
export default class App extends Component {
  render() {
    return (
        <Provider {...Store}>
            <StackScreen/>
        </Provider>
    );
  }
}
