import React from 'react'
import ReactDom from 'react-dom'

// 创建dom元素
let myDiv = React.createElement('div', null, '我是div')

let myDiv2 = <div title="title">111</div>

// 渲染到dom
ReactDom.render(myDiv2, document.getElementById('app'))
