/*
    引入以下两个文件
        components\Footer.js
        components\Header.js
 */

import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// 导入文件
import './index.css';

export default class App extends Component{
    render(){
        return (
            <div className="app">
                <Header />
                <Footer />
            </div>
        );

    }
}
