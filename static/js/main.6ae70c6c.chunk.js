(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),l=n.n(r),c=(n(14),n(1)),s=n(4),u=n(5),i=n(7),h=n(6),d=n(8),m=function(e){var t=e.value,n=e.handleSelect,a=e.handleReverse,r=e.handleSortAbc,l=e.handleSortLength,c=e.handleReset;return o.a.createElement("div",{className:"actions"},o.a.createElement("select",{className:"select",value:t,onChange:n},Array.from({length:10},(function(e,t){return o.a.createElement("option",{value:t+1,key:t+1},t+1)}))),o.a.createElement("button",{className:"button",type:"button",onClick:a},"Reverse"),o.a.createElement("button",{className:"button",type:"button",onClick:r},"Sort alphabetically"),o.a.createElement("button",{className:"button",type:"button",onClick:l},"Sort by length"),o.a.createElement("button",{className:"button",type:"button",onClick:c},"Reset"))},g=function(e){var t=e.handleStart;return o.a.createElement("button",{className:"button",type:"button",onClick:t},"Start")},b=function(e){var t=e.goods;return o.a.createElement(o.a.Fragment,null,t.map((function(e){return o.a.createElement("li",{className:"item",key:e},e)})))},f=(n(15),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={isStarted:!1,goods:Object(c.a)(n.props.goods),initialGoods:Object(c.a)(n.props.goods),length:1},n.handleStart=function(){n.setState({isStarted:!0})},n.handleReverse=function(){n.setState((function(e){return{goods:Object(c.a)(e.goods).reverse()}}))},n.handleSortAbc=function(){n.setState((function(e){return{goods:Object(c.a)(e.goods).sort((function(e,t){return e.localeCompare(t)}))}}))},n.handleSortLength=function(){n.setState((function(e){return{goods:Object(c.a)(e.goods).sort((function(e,t){return e.length-t.length}))}}))},n.handleReset=function(){n.setState((function(e){return{goods:e.initialGoods,length:1}}))},n.handleSelect=function(e){n.setState({length:Number(e.target.value)})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.goods,n=e.isStarted,a=e.length,r=t.filter((function(e){return e.length>=a}));return o.a.createElement(o.a.Fragment,null,n?o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{value:a,handleSelect:this.handleSelect,handleReverse:this.handleReverse,handleSortAbc:this.handleSortAbc,handleSortLength:this.handleSortLength,handleReset:this.handleReset}),o.a.createElement("ul",{className:"list"},o.a.createElement(b,{goods:r}))):o.a.createElement(g,{handleStart:this.handleStart}))}}]),t}(a.Component)),S=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,{goods:S}))};l.a.render(o.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6ae70c6c.chunk.js.map