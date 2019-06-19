(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a(262)},117:function(e,t,a){},118:function(e,t,a){},122:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(39),r=a.n(o),i=a(38),c=(a(117),a(118),a(269)),s=a(267),m=a(25),u=a(5),d=a(6),p=a(11),h=a(10),E=a(16),v=a(12),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,"Welcome to Target Tracker"))}}]),t}(l.a.Component),b=a(18),y=a(51),f=a.n(y),O=a(52),k=(a(122),a(33)),C=a(265),j=a(40),w=a.n(j),L="https://insitenserver.azurewebsites.net/api/",A={getAll:function(){var e=this;w.a.get(L+"values").then(function(t){t&&t.data&&t.data.success?e.setState({data:t.data.data,error:!1,isLoading:!1}):e.setState({data:t,error:!0,isLoading:!1})}).catch(function(t){e.setState({data:t,error:!0,isLoading:!1})})},get:function(e){var t=this;w.a.get("".concat(L,"values/").concat(e)).then(function(e){e&&e.data&&e.data.success?t.setState({data:JSON.parse(e.data.data),error:!1,isLoading:!1}):t.setState({data:e,error:!0,isLoading:!1})}).catch(function(e){t.setState({data:e,error:!0,isLoading:!1})})},delete:function(e,t){w.a.delete("".concat(L,"values/").concat(e)).then(function(e){e&&e.data&&e.data.success?t.setState({data:e.data.data,error:!1,isLoading:!1}):t.setState({data:e,error:!0,isLoading:!1})}).catch(function(e){t.setState({data:e,error:!0,isLoading:!1})})},save:function(e){var t=this;w.a.post(L+"values",e).then(function(e){e&&e.data&&e.data.success?t.setState({data:e.data.data,error:!1,isLoading:!1}):t.setState({data:e,error:!0,isLoading:!1})}).catch(function(e){t.setState({data:e,error:!0,isLoading:!1})})}},N=a(264);var S=function(e){return l.a.createElement(N.a,{style:{display:e.state.isLoading?"block":"none"},animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))},D=a(268);var I=function(e){return l.a.createElement("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"100px",display:e.state.isLoading?"block":"none"}},l.a.createElement(D.a,{className:"error-toast",style:{position:"absolute",top:0,right:0}},l.a.createElement(D.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Error!")),l.a.createElement(D.a.Body,null,"Message: ",e.state.error)))},x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).deleteItem=a.deleteItem.bind(Object(E.a)(a)),a.state={data:[],isLoading:!0,error:null},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){A.getAll.apply(this)}},{key:"deleteItem",value:function(e){if(!0===confirm("Are you sure you want to delete?")){A.delete(e,this);var t=Object(b.a)(this.state.data).find(function(t){return t.id!==e});t&&t.length||(t=new Array),this.setState({data:t||{},isLoading:!1,error:null})}}},{key:"render",value:function(){var e=this,t=l.a.createElement("div",{style:{display:this.state.isLoading?"none":"block"}},l.a.createElement(k.LinkContainer,{to:"/add"},l.a.createElement(C.a,null,l.a.createElement("div",{className:"icon-container"},l.a.createElement(f.a,{name:"plus",icon:O.b}),"Add Target"))),l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Id"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"City"),l.a.createElement("th",{scope:"col"},"State"),l.a.createElement("th",{scope:"col"},"Status"),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,!this.state.data&&this.state.data.map?null:this.state.data.map(function(t,a){return console.log("Entered"),l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.city),l.a.createElement("td",null,t.state),l.a.createElement("td",null,t.status),l.a.createElement("td",null,l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",{className:"icon-container"},l.a.createElement(k.LinkContainer,{to:"/view/"+t.id},l.a.createElement(f.a,{name:"pencil",icon:O.a}))),l.a.createElement("div",{className:"icon-container delete",onClick:function(){return e.deleteItem(t.id)}},l.a.createElement(f.a,{name:"times",icon:O.b})))))}))));return l.a.createElement("div",null,l.a.createElement("h2",null,"View Targets"),l.a.createElement(S,{state:this.state}),t,l.a.createElement(I,{state:this.state}))}}]),t}(l.a.Component),M=a(9),T=a(266),W=a(104),V=a(105),R=[188,13],z=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={error:null,isLoading:!1,validated:!1,tags:[],data:{},test:!1},a.handleDelete=a.handleDelete.bind(Object(E.a)(a)),a.handleAddition=a.handleAddition.bind(Object(E.a)(a)),a.handleDrag=a.handleDrag.bind(Object(E.a)(a)),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleDelete",value:function(e){var t=this.state.tags;this.setState(Object(M.a)({},this.state,{tags:t.filter(function(t,a){return a!==e})}))}},{key:"handleAddition",value:function(e){var t=this;this.setState(function(a){return Object(M.a)({},t.state,{tags:[].concat(Object(b.a)(a.tags),[e])})})}},{key:"handleDrag",value:function(e,t,a){var n=Object(b.a)(this.state.tags).slice();n.splice(t,1),n.splice(a,0,e),this.setState(Object(M.a)({},this.state,{tags:n}))}},{key:"handleSubmit",value:function(e){var t=e.currentTarget;console.log(t.elements),!1===t.checkValidity()&&(e.preventDefault(),e.stopPropagation()),console.log(t.elements.name);var a=Object(b.a)(this.state.tags);this.props&&this.props.data&&this.props.data.tags&&(a=[].concat(Object(b.a)(a),Object(b.a)(this.props.data.contacts.map(function(e){return{id:e,text:e}}))));var n={id:this.props.id?this.props.id:0,name:t.elements.name.value,status:t.elements.status.value,city:t.elements.city.value,state:t.elements.state.value,zip:t.elements.zip.value,description:t.elements.description.value,contacts:a.map(function(e){return e.text})};A.save.apply(this,[n]),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.props.data?this.props.data:{},a=this.state,n=a.validated,o=a.tags,r=a.test,i=Object(b.a)(o);return t&&t.contacts&&t.contacts&&!r&&(i=[].concat(Object(b.a)(o),Object(b.a)(t.contacts.map(function(e){return{id:e,text:e}}))),this.setState(Object(M.a)({},this.state,{test:!0,tags:Object(b.a)(i)}))),l.a.createElement(T.a,{noValidate:!0,validated:n,onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement(T.a.Row,null,l.a.createElement(T.a.Group,{as:W.a,md:"6",controlId:"comapny.name"},l.a.createElement(T.a.Label,null,"Company name"),l.a.createElement(T.a.Control,{required:!0,type:"text",ref:"name",name:"name",placeholder:"Compnay name",value:t.name}),l.a.createElement(T.a.Control.Feedback,{type:"invalid"},"Please enter the name of the company.")),l.a.createElement(T.a.Group,{as:W.a,md:"6",controlId:"company.status"},l.a.createElement(T.a.Label,null,"Status"),l.a.createElement(T.a.Control,{as:"select",ref:"status",name:"status",value:t.status},l.a.createElement("option",{value:"1"},"Researching"),l.a.createElement("option",{value:"2"},"Pending Approval"),l.a.createElement("option",{value:"3"},"Approved"),l.a.createElement("option",{value:"4"},"Declined")))),l.a.createElement(T.a.Row,null,l.a.createElement(T.a.Group,{as:W.a,md:"3",controlId:"company.city"},l.a.createElement(T.a.Label,null,"City"),l.a.createElement(T.a.Control,{type:"text",placeholder:"City",ref:"city",name:"city",value:t.city,required:!0}),l.a.createElement(T.a.Control.Feedback,{type:"invalid"},"Please enter the city in which the company is located.")),l.a.createElement(T.a.Group,{as:W.a,md:"3",controlId:"company.state"},l.a.createElement(T.a.Label,null,"State"),l.a.createElement(T.a.Control,{as:"select",ref:"state",name:"state",value:t.state,required:!0},l.a.createElement("option",{value:"AL"},"Alabama"),l.a.createElement("option",{value:"AK"},"Alaska"),l.a.createElement("option",{value:"AZ"},"Arizona"),l.a.createElement("option",{value:"AR"},"Arkansas"),l.a.createElement("option",{value:"CA"},"California"),l.a.createElement("option",{value:"CO"},"Colorado"),l.a.createElement("option",{value:"CT"},"Connecticut"),l.a.createElement("option",{value:"DE"},"Delaware"),l.a.createElement("option",{value:"DC"},"District Of Columbia"),l.a.createElement("option",{value:"FL"},"Florida"),l.a.createElement("option",{value:"GA"},"Georgia"),l.a.createElement("option",{value:"HI"},"Hawaii"),l.a.createElement("option",{value:"ID"},"Idaho"),l.a.createElement("option",{value:"IL"},"Illinois"),l.a.createElement("option",{value:"IN"},"Indiana"),l.a.createElement("option",{value:"IA"},"Iowa"),l.a.createElement("option",{value:"KS"},"Kansas"),l.a.createElement("option",{value:"KY"},"Kentucky"),l.a.createElement("option",{value:"LA"},"Louisiana"),l.a.createElement("option",{value:"ME"},"Maine"),l.a.createElement("option",{value:"MD"},"Maryland"),l.a.createElement("option",{value:"MA"},"Massachusetts"),l.a.createElement("option",{value:"MI"},"Michigan"),l.a.createElement("option",{value:"MN"},"Minnesota"),l.a.createElement("option",{value:"MS"},"Mississippi"),l.a.createElement("option",{value:"MO"},"Missouri"),l.a.createElement("option",{value:"MT"},"Montana"),l.a.createElement("option",{value:"NE"},"Nebraska"),l.a.createElement("option",{value:"NV"},"Nevada"),l.a.createElement("option",{value:"NH"},"New Hampshire"),l.a.createElement("option",{value:"NJ"},"New Jersey"),l.a.createElement("option",{value:"NM"},"New Mexico"),l.a.createElement("option",{value:"NY"},"New York"),l.a.createElement("option",{value:"NC"},"North Carolina"),l.a.createElement("option",{value:"ND"},"North Dakota"),l.a.createElement("option",{value:"OH"},"Ohio"),l.a.createElement("option",{value:"OK"},"Oklahoma"),l.a.createElement("option",{value:"OR"},"Oregon"),l.a.createElement("option",{value:"PA"},"Pennsylvania"),l.a.createElement("option",{value:"RI"},"Rhode Island"),l.a.createElement("option",{value:"SC"},"South Carolina"),l.a.createElement("option",{value:"SD"},"South Dakota"),l.a.createElement("option",{value:"TN"},"Tennessee"),l.a.createElement("option",{value:"TX"},"Texas"),l.a.createElement("option",{value:"UT"},"Utah"),l.a.createElement("option",{value:"VT"},"Vermont"),l.a.createElement("option",{value:"VA"},"Virginia"),l.a.createElement("option",{value:"WA"},"Washington"),l.a.createElement("option",{value:"WV"},"West Virginia"),l.a.createElement("option",{value:"WI"},"Wisconsin"),l.a.createElement("option",{value:"WY"},"Wyoming")),l.a.createElement(T.a.Control.Feedback,{type:"invalid"},"Please enter the state in which the company is located.")),l.a.createElement(T.a.Group,{as:W.a,md:"3",controlId:"company.zip"},l.a.createElement(T.a.Label,null,"Zip"),l.a.createElement(T.a.Control,{type:"text",placeholder:"Zip",value:t.zip,ref:"zip",name:"zip",required:!0}),l.a.createElement(T.a.Control.Feedback,{type:"invalid"},"Please enter the zip code in which the company is located."))),l.a.createElement(T.a.Row,null,l.a.createElement(T.a.Group,{as:W.a,md:"12",controlId:"company.description"},l.a.createElement(T.a.Label,null,"Company Description"),l.a.createElement(T.a.Control,{as:"textarea",rows:"3",value:t.description,ref:"description",name:"description"}))),l.a.createElement(T.a.Row,null,l.a.createElement(T.a.Group,{as:W.a,md:"12",controlId:"company.contacts"},l.a.createElement(T.a.Label,null,"Company Contacts"),l.a.createElement("div",null,l.a.createElement(V.WithContext,{tags:o,delimiters:R,handleDelete:this.handleDelete,handleAddition:this.handleAddition,handleDrag:this.handleDrag,handleTagClick:this.handleTagClick,placeholder:"Add a contact"})))),l.a.createElement(C.a,{type:"submit"},"Submit form"))}}]),t}(l.a.Component),G=(a(257),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={data:{},isLoading:!0,error:null},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){A.get.apply(this,[this.props.match.params.id])}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Add a new target"),l.a.createElement(S,{state:this.state}),l.a.createElement(z,{data:this.state.data,id:this.props.match.params.id}))}}]),t}(l.a.Component)),H=(a(258),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={data:[],isLoading:!0,error:null},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Add a new target"),l.a.createElement(S,{state:this.state}),l.a.createElement(z,null))}}]),t}(l.a.Component));var P=function(){return l.a.createElement("div",{className:"max-container"},l.a.createElement(c.a,{bg:"dark",variant:"dark"},l.a.createElement(c.a.Brand,null,"Target Tracker"),l.a.createElement(s.a,{className:"mr-auto"},l.a.createElement(k.LinkContainer,{to:"/"},l.a.createElement(s.a.Link,null,"Home")),l.a.createElement(k.LinkContainer,{to:"/viewTargets"},l.a.createElement(s.a.Link,null,"View Targets")))),l.a.createElement("main",null,l.a.createElement(m.g,null,l.a.createElement(m.d,{exact:!0,path:"/targetForm",component:z}),l.a.createElement(m.d,{exact:!0,path:"/add",component:H}),l.a.createElement(m.d,{exact:!0,path:"/view/:id",component:G}),l.a.createElement(m.d,{exact:!0,path:"/viewTargets",component:x}),l.a.createElement(m.d,{exact:!0,path:"/",component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(i.BrowserRouter,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[112,1,2]]]);
//# sourceMappingURL=main.cc407311.chunk.js.map