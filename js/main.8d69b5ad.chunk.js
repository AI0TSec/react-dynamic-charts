(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(218)},21:function(e,a,t){},218:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),o=t.n(r),i=(t(21),t(6)),c=t(7),s=t(12),u=t(8),m=t(13),A=t(222),d=t(221),p=t(2),b=t.n(p),h=t(1),g=t.n(h),f=function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},E=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a};function S(){for(var e="#",a=0;a<6;a++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}var R=function(e){function a(){var e,t,n;f(this,a);for(var l=arguments.length,r=Array(l),o=0;o<l;o++)r[o]=arguments[o];return t=n=E(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))),n.eventStream=null,n.iterationTimeout=null,n.state={dataQueue:[],activeItemIdx:0,highestValue:0,currentValues:{}},n.init=function(){n.setState({dataQueue:n.props.data},function(){n.props.startAutomatically?n.start():n.setNextValues()})},n.start=function(){n.state.activeItemIdx>1||(n.props.onRunStart&&n.props.onRunStart(),n.nextStep(!0))},n.setNextValues=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},a=n.state,t=a.dataQueue,l=a.activeItemIdx,r=a.currentValues;if(!t[l])return n.iterationTimeout=null,void(n.props.onRunEnd&&n.props.onRunEnd());var o=t[l].values,i={},c=0;o.map(function(e){return i[e.id]=v({},e,{color:e.color||(r[e.id]||{}).color||S()}),Math.abs(e.value)>c&&(c=Math.abs(e.value)),e}),n.setState({currentValues:i,highestValue:c,activeItemIdx:l+1},e)},n.nextStep=function(e){n.setNextValues(function(){n.iterationTimeout=window.setTimeout(n.nextStep,e?n.props.startRunningTimeout:n.props.iterationTimeout)})},E(n,t)}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,p["Component"]),y(a,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){var e=this.state,a=e.currentValues,t=e.highestValue,n=e.dataQueue,l=e.activeItemIdx,r=this.props,o=r.barHeight,i=r.baseline,c=r.iterationTimeout,s=r.chartWrapperStyles,u=r.mainWrapperStyles,m=r.iterationTitleStyles,A=r.labelStyles,d=r.baselineStyles,p=r.showTitle,h=t/.85,g=Object.keys(a).sort(function(e,t){return a[t].value-a[e].value}),f=null!==i&&!isNaN(i),y=n[l-1]||{};return b.a.createElement("div",{className:"live-chart",style:u},b.a.createElement(b.a.Fragment,null,p&&b.a.createElement("h1",{style:m},y.name),b.a.createElement("section",{className:"chart",style:s},f&&b.a.createElement("div",{className:"baseline",style:d},b.a.createElement("span",null,i)),b.a.createElement("div",{className:"chart-bars "+(f?"with-baseline":""),style:{height:(o+20)*Object.keys(a).length}},g.map(function(e,t){var n=a[e],l=f?(n.value||i)-i:n.value,r=Math.abs(l/h*100),s=!1;f&&n.value<i&&(s=!0),f&&(r/=2);var u=void 0;return u=isNaN(r)||!r?"1px":r+"%",b.a.createElement("div",{className:"bar-wrapper "+(s?"behind-baseline":""),style:{width:u,top:(o+20)*t,transitionDuration:c/1e3},key:"bar_"+e},b.a.createElement("label",{style:A},n.label?n.label:e),b.a.createElement("div",{className:"bar",style:{height:o,background:"string"===typeof n.color?n.color:"linear-gradient(to right, "+n.color.join(",")+")"}}),b.a.createElement("span",{className:"value",style:{color:"string"===typeof n.color?n.color:n.color[0]}},n.value))})))))}}]),a}();R.propTypes={startAutomatically:g.a.bool,showTitle:g.a.bool,iterationTimeout:g.a.number,data:g.a.array,startRunningTimeout:g.a.number,barHeight:g.a.number,baseline:g.a.number,mainWrapperStyles:g.a.object,chartWrapperStyles:g.a.object,baselineStyles:g.a.object,iterationTitleStyles:g.a.object,labelStyles:g.a.object,onRunStart:g.a.func,onRunEnd:g.a.func},R.defaultProps={startAutomatically:!0,showTitle:!0,iterationTimeout:200,data:[],startRunningTimeout:0,barHeight:50,baseline:null,mainWrapperStyles:{},chartWrapperStyles:{},baselineStyles:{},iterationTitleStyles:{},labelStyles:{},onRunStart:null,onRunEnd:null};var C=t(14);var x={getRandomNumber:function(e,a){return Math.floor(Math.random()*(a-e+1)+e)},generateData:function(){for(var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,r=[],o=function(a){var o=t.map(function(t,n){return 0===a&&"number"===typeof t.value?t:Object(C.a)({},t,{value:0===a?e.getRandomNumber(1,1e3):r[a-1].values[n].value+e.getRandomNumber(0,l)})});r.push({name:"".concat(n.prefix||""," ").concat((n.initialValue||0)+a),values:o})},i=0;i<=a;i++)o(i);return r}},N={defaultChart:[{id:1,label:"Google",value:x.getRandomNumber(0,50)},{id:2,label:"Facebook",value:x.getRandomNumber(0,50)},{id:3,label:"Outbrain",value:x.getRandomNumber(0,50)},{id:4,label:"Apple",value:x.getRandomNumber(0,50)},{id:5,label:"Amazon",value:x.getRandomNumber(0,50)}],baselineWithNegatives:[{id:1,label:"Google",value:-x.getRandomNumber(100,1e3)},{id:2,label:"Facebook",value:-x.getRandomNumber(100,1e3)},{id:3,label:"Outbrain",value:x.getRandomNumber(1,1e3)},{id:4,label:"Apple",value:-x.getRandomNumber(1,1e3)},{id:5,label:"Amazon",value:x.getRandomNumber(1,1e3)}],customLabels:[{id:1,color:"#ea4335",label:l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/google-suits-1/32/1_google_search_logo_engine_service_suits-512.png",alt:"Google"})),value:x.getRandomNumber(1,1e3)},{id:2,color:"#3b5998",label:l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/124/124010.png",alt:"Facebook"})),value:x.getRandomNumber(1,1e3)},{id:3,color:"#f18421",label:l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:"https://www.outbrain.com/favicon/favicon-192x192.png",alt:"Outbrain"})),value:x.getRandomNumber(1,1e3)},{id:4,color:"#7cbb00",label:l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:"https://diylogodesigns.com/wp-content/uploads/2016/04/Microsoft-Logo-icon-png-Transparent-Background-768x768.png",alt:"Microsoft"})),value:x.getRandomNumber(1,1e3)},{id:5,color:"#146eb4",label:l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:"https://www.freeiconspng.com/uploads/amazon-icon-6.png",alt:"Amazon"})),value:x.getRandomNumber(1,1e3)}],runByCommand:[{id:1,color:"#000000",label:"This",value:x.getRandomNumber(1,1e3)},{id:2,color:"#333333",label:"is",value:x.getRandomNumber(1,1e3)},{id:3,color:"#666666",label:"So",value:x.getRandomNumber(1,1e3)},{id:4,color:"#999999",label:"Freaking",value:x.getRandomNumber(1,1e3)},{id:5,color:"#cccccc",label:"Awesome!!!",value:x.getRandomNumber(1,1e3)}],stylesGoCrazy:[{id:1,color:["#59C173","#a17fe0","#5D26C1"],label:"\ud83d\ude0e",value:x.getRandomNumber(1,100)},{id:2,color:["#DA4453","#89216B"],label:"\ud83e\udd14",value:x.getRandomNumber(1,100)},{id:3,color:["#636363","#a2ab58"],label:"\ud83e\udd2a",value:x.getRandomNumber(1,100)},{id:4,color:["#a8c0ff","#3f2b96"],label:"\ud83d\ude01",value:x.getRandomNumber(1,100)},{id:5,color:["#40E0D0","#FF8C00","#FF0080"],label:"\ud83d\ude0d",value:x.getRandomNumber(1,100)}]},w=(t(26),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).defaultChart=l.a.createRef(),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"main-section"},l.a.createElement("a",{href:"https://github.com/dsternlicht/react-dynamic-charts"},l.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAMAAABmfEh9AAACc1BMVEX///8AAAAAAAAAAAAAAAAAAAAAAABnZ2eCgoKlpaWSkpJtbW2Dg4OXl5dtbW0jIyMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZGR4eHiqqqqfn595eXl0dHSVlZWJiYloaGghISEAAAAAAAAAAAAAAABlZWWKioqxsbGdnZ1+fn6kpKSamppzc3MgICAAAAAAAAAAAAAAAABhYWFzc3OhoaGTk5NycnKLi4toaGgfHx8AAAAAAAAAAAAAAAAAAAAAAAAAAABfX1+IiIi3t7d1dXWbm5tzc3MAAAAAAAAAAAAAAABdXV19fX2ioqKQkJBubm4fHx9cXFyvr696enpxcXFsbGwAAAAAAABeXl6Hh4etra2ZmZmAgICmpqZwcHAAAAAAAABbW1ujo6OYmJgAAAAAAAC2trZ0dHR2dnagoKCPj4+zs7ONjY1vb29cXFynp6eUlJRtbW13d3eoqKhsbGxdXV1ra2twcHBqamppaWmMjIyGhoZoaGhnZ2dxcXF/f39mZmZlZWVkZGSEhIRpaWl7e3tjY2NiYmLAwMBqampeXl6urq5hYWFgYGCenp7///+WlpZfX1/p6el8fHzf39+rq6vS0tJYWFhaWlrJycm8vLxZWVlbW1tdXV2FhYWpqand3d1cXFxubm60tLRvb2/09PTIyMheXl6Ojo61tbXT09NXV1e7u7tra2vq6ure3t7V1dXBwcFycnKwsLC/v79VVVW9vb2cnJxWVlaBgYGysrLg4ODo6OhUVFTHx8e+vr7U1NTLy8usrKyRkZG6urpTU1Pz8/PR0dFxcXF0dHRbW1tkZGRiYmK4ubPZAAAA0XRSTlMAAQMEBwkMiv///////9o3JB8aFhIOCgUCDRGN/////////9o7JiEcF5H////////cPSgiHQaT///////bPykjGAgQFSCV/////90qEx4lmP////9Amv///9wLLJz//////90nLpz//xsv/93//////9yc///c////nf//////////3f//////2//////bnf//////////////////////////////3P/////////////c/////93////////////////////////////c25uUkLcVs+8AAAs6SURB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",alt:"Fork me on GitHub"})),l.a.createElement("div",{className:"chart-row"},l.a.createElement("div",{className:"description"},l.a.createElement("h3",null,"Hello Dynamic Charts!"),l.a.createElement("p",null,"React Dynamic Charts will allow you to create awesome animated dynamic charts to visualize your data."),l.a.createElement("p",null,"Here's the most basic example of how to use Dynamic Charts:"),l.a.createElement(A.a,{language:"javascript",style:d.a},"<DynamicBarChart\n  data={this.state.data}\n  // Timeout in ms between each iteration\n  iterationTimeout={100}\n/>"),l.a.createElement("p",null,"You may also add custom callbacks when animation starts, and animation ends. Check out your console to see it in action."),l.a.createElement(A.a,{language:"javascript",style:d.a},'<DynamicBarChart\n  data={this.state.data}\n  onRunStart={() => {\n    console.log("Started!");\n  }}\n  onRunEnd={() => {\n    console.log("Ended!");\n  }}\n/>')),l.a.createElement(R,{data:x.generateData(100,N.defaultChart,{prefix:"Iteration"}),iterationTimeout:100,showTitle:!0,mainWrapperStyles:{backgroundColor:"#fff"},chartWrapperStyles:{maxWidth:"1200px"},onRunStart:function(){console.log("Started!")},onRunEnd:function(){console.log("Ended!")},startRunningTimeout:2500})),l.a.createElement("div",{className:"chart-row"},l.a.createElement("div",{className:"description"},l.a.createElement("h3",null,"Custom Labels"),l.a.createElement("p",null,"Dynamic Charts support custom labels. So if you want to add images rather than plain text, you can!"),l.a.createElement("p",null,"All you'll have to do is to set a React element in the `label` field as part of your data structure:"),l.a.createElement(A.a,{language:"javascript",style:d.a},"var data = [\n  {\n    id: 1,\n    label: (\n      <React.Fragment>\n        <img src={'...'} alt=\"...\" />\n      </React.Fragment>\n    )\n  },\n  // ...\n];")),l.a.createElement(R,{data:x.generateData(100,N.customLabels,{prefix:"Year",initialValue:2e3},10),iterationTimeout:100,chartWrapperStyles:{maxWidth:"1200px"},mainWrapperStyles:{backgroundColor:"#fff"},startRunningTimeout:0})),l.a.createElement("div",{className:"chart-row"},l.a.createElement("div",{className:"description"},l.a.createElement("h3",null,"Baseline"),l.a.createElement("p",null,"If your chart has negative values, you may want to set a ",l.a.createElement("strong",null,"baseline"),"."),l.a.createElement("p",null,"The `baseline` property is any numeric value. In the example below, we set up a baseline of 0."),l.a.createElement(A.a,{language:"javascript",style:d.a},"<DynamicBarChart\n  data={this.state.data}\n  baseline={0}\n/>")),l.a.createElement(R,{data:x.generateData(20,N.baselineWithNegatives,{prefix:"Year",initialValue:2e3},100),barHeight:30,showTitle:!1,iterationTimeout:1e3,startRunningTimeout:1500,baseline:0,mainWrapperStyles:{backgroundColor:"#fff"}})),l.a.createElement("div",{className:"chart-row"},l.a.createElement("div",{className:"description"},l.a.createElement("h3",null,"Run by Command"),l.a.createElement("p",null,"By default, the animation starts automatically. You may choose to start the animation after a certain timeout:"),l.a.createElement(A.a,{language:"javascript",style:d.a},"<DynamicBarChart\n  data={this.state.data}\n  // Wait 2500 ms before animation starts\n  startRunningTimeout={2500}\n/>"),l.a.createElement("p",null,"Another option is to start the animation programmatically by calling the `start()` method, and disabling the `startAutomatically` flag:"),l.a.createElement(A.a,{language:"javascript",style:d.a},"<button onClick={() => this.defaultChart.current.start()}>\n  Start Running!\n</button>\n\n<DynamicBarChart\n  data={this.state.data}\n  startAutomatically={false}\n  ref={this.defaultChart}\n/>"),l.a.createElement("p",null,"Go ahead, try it out:"),l.a.createElement("button",{onClick:function(){return e.defaultChart.current.start()}},"Click Me!")),l.a.createElement(R,{data:x.generateData(100,N.runByCommand),showTitle:!1,iterationTimeout:100,barHeight:20,chartWrapperStyles:{maxWidth:"1200px"},mainWrapperStyles:{backgroundColor:"#fff"},startAutomatically:!1,ref:this.defaultChart,onRunStart:function(){console.log("It's on!")}})),l.a.createElement("div",{className:"chart-row"},l.a.createElement("div",{className:"description"},l.a.createElement("h3",null,"Styles Go Crazy!"),l.a.createElement("p",null,"Although Dynamic Charts have default styling, you have various of option to control and change how your chart looks like."),l.a.createElement("p",null),l.a.createElement(A.a,{language:"javascript",style:d.a},"<DynamicBarChart\n  data={this.state.data}\n  barHeight={50}\n  mainWrapperStyles={{\n    backgroundColor: '#333',\n    color: '#fff'\n  }}\n  chartWrapperStyles={{\n    maxWidth: '800px',\n    padding: '40px 20px'\n  }}\n  labelStyles={{\n    fontSize: '35px'\n  }}\n  iterationTitleStyles={{\n    color: '#fff',\n    fontSize: '24px',\n    backgroundColor: '#999',\n    borderRadius: '50em',\n    position: 'absolute',\n    right: '20px',\n    top: '440px',\n    padding: '10px 30px'\n  }}\n/>")),l.a.createElement(R,{data:x.generateData(100,N.stylesGoCrazy,{prefix:"Year",initialValue:2020}),iterationTimeout:100,startRunningTimeout:4e3,barHeight:50,chartWrapperStyles:{maxWidth:"1200px",padding:"40px 20px"},mainWrapperStyles:{backgroundColor:"#333"},iterationTitleStyles:{color:"#fff",fontSize:"24px",backgroundColor:"#999",borderRadius:"50em",position:"absolute",right:"20px",top:"440px",padding:"10px 30px"},labelStyles:{fontSize:"35px"}})))}}]),a}(n.Component));o.a.render(l.a.createElement(w,null),document.getElementById("root"))},26:function(e,a,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.8d69b5ad.chunk.js.map