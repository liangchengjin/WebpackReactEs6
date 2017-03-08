// 导入 React 文件
import React, {Component} from "react";
// 导入文件
import './index.css';

// 创建一个组件
    /*
     第一种写法 是简写

    export default class Header extends Component{
        // 渲染一句话
        render(){
            return <div>
                <h2>我是Header</h2>
            </div>;
        }
    }
    */

    // 第二种写法
    class Header extends Component{
        render(){
            return <div>
                <h1 className="header">我是Header的第二种写法</h1>
            </div>;
        }
    }

    export default Header;
