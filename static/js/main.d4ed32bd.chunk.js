(this["webpackJsonpthe-star-match-game"]=this["webpackJsonpthe-star-match-game"]||[]).push([[0],[,,,,,,function(e,t){var a={sum:function(e){return e.reduce((function(e,t){return e+t}),0)},range:function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randomSumIn:function(e,t){for(var n=[[]],r=[],s=0;s<e.length;s++)for(var i=0,c=n.length;i<c;i++){var u=n[i].concat(e[s]),o=a.sum(u);o<=t&&(n.push(u),r.push(o))}var l=r[a.random(0,r.length-1)];return l&&!e.includes(l)?a.randomSumIn(e,t):l}};t.utils=a},,,function(e,t){t.constants={colors:{available:"lightgray",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"}}},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),i=a.n(s),c=(a(15),a(2)),u=a(3),o=a(1),l=a(4),m=a(5),h=a(9),d=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){this.props.onNumberChange(this.props.number,this.props.status)}},{key:"render",value:function(){var e=this.props.number,t=this.props.status;return r.a.createElement("button",{className:"number",style:{backgroundColor:h.constants.colors[t]},onClick:this.handleClick},e)}}]),a}(r.a.Component),v=a(6),f=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.count;return r.a.createElement(r.a.Fragment,null,v.utils.range(1,e).map((function(e){return r.a.createElement("div",{key:e,className:"star"})})))}}]),a}(r.a.Component),b=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){this.props.onResetGame()}},{key:"render",value:function(){var e="lost"===this.props.gameStatus;return r.a.createElement("div",{className:"game-done"},r.a.createElement("div",{className:"message",style:{color:e?"red":"green"}},e?"Game Over":"Nice!"),r.a.createElement("button",{onClick:this.handleClick},"PlayAgain"))}}]),a}(r.a.Component);var g=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={stars:v.utils.random(1,9),availableNums:v.utils.range(1,9),candidateNums:[],secondsLeft:15},n.handleNumberChange=n.handleNumberChange.bind(Object(o.a)(n)),n.handleResetGame=n.handleResetGame.bind(Object(o.a)(n)),n._timerId=null,n}return Object(u.a)(a,[{key:"handleResetGame",value:function(){this.props.onStarNewGame()}},{key:"handleNumberChange",value:function(e,t){if("active"===this.gameStatus&&"used"!==t){var a="available"===t?this.state.candidateNums.concat(e):this.state.candidateNums.filter((function(t){return t!==e}));if(v.utils.sum(a)!==this.state.stars)this.setState({candidateNums:a});else{var n=this.state.availableNums.filter((function(e){return!a.includes(e)})),r=v.utils.randomSumIn(n,9);this.setState({stars:r}),this.setState({availableNums:n}),this.setState({candidateNums:[]})}}}},{key:"componentDidMount",value:function(){this._timerId=this.updateTimer()}},{key:"componentWillUpdate",value:function(){this.isGameDone||(clearInterval(this._timerId),this._timerId=this.updateTimer())}},{key:"componentDidUpdate",value:function(){this.isGameDone&&clearInterval(this._timerId)}},{key:"render",value:function(){var e=this,t=this.state.stars;return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"help"},"Pick 1 or more numbers that sum to the number of stars"),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"left"},"active"!==this.gameStatus?r.a.createElement(b,{onResetGame:this.handleResetGame,gameStatus:this.gameStatus}):r.a.createElement(f,{count:t})),r.a.createElement("div",{className:"right"},v.utils.range(1,9).map((function(t){return r.a.createElement(d,{key:t,status:e.retrieveNumberStatus(t),number:t,onNumberChange:e.handleNumberChange})})))),r.a.createElement("div",{className:"timer"},"Time Remaining: ",this.state.secondsLeft))}},{key:"retrieveNumberStatus",value:function(e){return this.state.availableNums.includes(e)?this.state.candidateNums.includes(e)?this.candidatesAreWrong?"wrong":"candidate":"available":"used"}},{key:"updateTimer",value:function(){var e=this;return setTimeout((function(){var t=e.state.secondsLeft;e.setState({secondsLeft:t-1})}),1e3)}},{key:"candidatesAreWrong",get:function(){return v.utils.sum(this.state.candidateNums)>this.state.stars}},{key:"gameStatus",get:function(){return 0===this.state.availableNums.length?"won":0===this.state.secondsLeft?"lost":"active"}},{key:"isGameDone",get:function(){return!(this.state.secondsLeft>0&&this.state.availableNums.length>0)}}]),a}(r.a.Component),p=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={gameId:1},n.handleStartNewGame=n.handleStartNewGame.bind(Object(o.a)(n)),n}return Object(u.a)(a,[{key:"handleStartNewGame",value:function(){var e=this.state.gameId;this.setState({gameId:++e})}},{key:"render",value:function(){var e=this.state.gameId;return r.a.createElement(g,{key:e,onStarNewGame:this.handleStartNewGame})}}]),a}(r.a.Component);a(16);var k=function(){return r.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d4ed32bd.chunk.js.map