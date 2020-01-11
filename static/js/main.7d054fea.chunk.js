(window.webpackJsonpconvictionvacation=window.webpackJsonpconvictionvacation||[]).push([[0],{173:function(e,a,t){e.exports=t(301)},178:function(e,a,t){},300:function(e,a,t){},301:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(41),o=t.n(i),l=(t(178),t(107)),s=t(25),r=t(19),u=t(23),d=t.n(u),v=t(317),h=t(314),m=t(313),f=t(302),b=t(310),E=t(316),C=t(311),p=t(312),y=t(32),w="FELONY_CLASS_B",D="FELONY_CLASS_C",R="MISDEMEANOR",g="MARIJUANA_MISDEMEANOR",k="GROSS_MISDEMEANOR",O=[{key:w,value:w,text:"Felony B"},{key:D,value:D,text:"Felony C"},{key:R,value:R,text:"Misdemeanor"},{key:g,value:g,text:"Marijuana Misdemeanor"},{key:k,value:k,text:"Gross Misdemeanor"},{key:"UNCLASSIFIED",value:"unclear",text:"Unclear"}],x=function(e){var a=e.index,t=e.conviction,n=e.handleChange,i=e.handleDelete,o=c.a.useState(window.matchMedia("(max-width:767px)").matches),l=Object(s.a)(o,2),u=l[0],d=l[1],v=function(e,t){var c=t.value;n(a,e.currentTarget.name,c)},h=u?"Domestic Violence":"",m=u?"DUI Related":"",w=u?"Last Relevant Date (Leave blank if none)":"";return c.a.useEffect((function(){var e=function(){d(window.matchMedia("(max-width:767px)").matches)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),c.a.createElement(E.a.Row,null,c.a.createElement(E.a.Cell,null,c.a.createElement(b.a,{fluid:!0,placeholder:"Case No.",name:"id",value:t.id,onChange:v})),c.a.createElement(E.a.Cell,null,c.a.createElement(b.a,{fluid:!0,placeholder:"Conviction name",name:"name",value:t.name,onChange:v})),c.a.createElement(E.a.Cell,null,c.a.createElement(C.a,{fluid:!0,placeholder:"Conviction classification",value:t.classification,onChange:function(e,t){var c=t.value;n(a,"classification",c),r.a.event({category:"Conviction",action:"user classified charge to be: "+c})},options:O})),c.a.createElement(E.a.Cell,null,c.a.createElement("label",null,w,c.a.createElement(b.a,{fluid:!0,type:"date",name:"date",value:t.date,onChange:v}))),c.a.createElement(E.a.Cell,null,c.a.createElement(p.a,{label:h,checked:t.isDomesticViolence,onChange:function(e,t){var c=t.checked;n(a,"isDomesticViolence",c),r.a.event({category:"Conviction",action:"user clicked Domestic Violence to be: "+c})}})),c.a.createElement(E.a.Cell,null,c.a.createElement(p.a,{label:m,checked:t.isDuiRelated,onChange:function(e,t){var c=t.checked;n(a,"isDuiRelated",c),r.a.event({category:"Conviction",action:"user clicked DUI to be: "+c})}})),c.a.createElement(E.a.Cell,null,c.a.createElement(f.a,{fluid:!0,icon:!0,onClick:function(){r.a.event({category:"Conviction",action:"user clicked button to delete conviction"}),i(a)}},c.a.createElement(y.a,{name:"close"}))))},N=[{text:"Case No.",width:"3"},{text:"Eligible Convictions",width:"4"},{text:"Classifications",width:"4"},{text:"Last Relevant Date",subtext:"(Leave blank if none)",width:"3"},{text:"Domestic Violence",width:"1"},{text:"DUI Related",width:"1"},{text:null,width:"1"}],S=function(e){var a=e.addConvictions,t=e.convictions,n=e.handleChange,i=e.handleDelete,o=e.clientName,l=e.setClientName,u=e.clientDOB,d=e.setClientDOB,h=c.a.useState(1),m=Object(s.a)(h,2),C=m[0],p=m[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{label:"Client Name: ",placeholder:"Client Name",size:"large",value:o,onChange:function(e,a){var t=a.value;l(t)}}),c.a.createElement(b.a,{label:"Client Date of Birth: ",type:"date",name:"date",size:"large",value:u,onChange:function(e,a){var t=a.value;d(t)}}),c.a.createElement(E.a,{striped:!0,stackable:!0},c.a.createElement(E.a.Header,null,c.a.createElement(E.a.Row,null,N.map((function(e){return c.a.createElement(E.a.HeaderCell,{key:e.text,width:e.width},c.a.createElement("div",null,e.text),e.subtext&&c.a.createElement("div",null,e.subtext))})))),c.a.createElement(E.a.Body,null,t.map((function(e,a){return c.a.createElement(x,{key:a,index:a,conviction:e,handleChange:n,handleDelete:i})})))),c.a.createElement(v.a,{padded:!0,stackable:!0,columns:1},c.a.createElement(v.a.Row,null,c.a.createElement(v.a.Column,{width:4},c.a.createElement(b.a,{fluid:!0,min:"1",max:"100",type:"number",placeholder:"Number of convictions",value:C,onChange:function(e,a){var t=a.value;r.a.event({category:"ConvictionsForm",action:"user clicked button and added "+t+" more convictions"}),p(t)},label:c.a.createElement(f.a,{secondary:!0,onClick:function(){r.a.event({category:"ConvictionsForm",action:"user clicked button Add More Convictions"}),a(parseInt(C))}},"Add More Convictions"),labelPosition:"right"})))))},M=t(315),V=[{text:"Case No.",width:"3"},{text:"Eligible Convictions",width:"3"},{text:"Eligibility",width:"3"},{text:"Reasons",width:"7"}],Y=function(e){var a=e.calculatorInput,t=e.calculatorOutput,n=e.clientName,i=(e.clientDOB,e.handleBack),o=e.handleReset,l=t.convictions.map((function(e,t){var n=e.id,c=e.vacatable,i=e.reasons,o=c?i.vacatableReasons:null===c?i.errors:i.notVacatableReasons;return{id:n,crime:a.convictions[t].crime,vacatable:c,reasons:o}}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Report for ".concat(n)),c.a.createElement(E.a,{striped:!0,stackable:!0},c.a.createElement(E.a.Header,null,c.a.createElement(E.a.Row,null,V.map((function(e){return c.a.createElement(E.a.HeaderCell,{key:e.text,width:e.width},e.text)})))),c.a.createElement(E.a.Body,null,l.map((function(e){var a=e.id,t=e.crime,n=e.vacatable,i=e.reasons;return c.a.createElement(E.a.Row,{key:a},c.a.createElement(E.a.Cell,null,c.a.createElement("b",{className:"results-table-header"},"".concat(V[0].text,": ")),a),c.a.createElement(E.a.Cell,null,c.a.createElement("b",{className:"results-table-header"},"".concat(V[1].text.slice(0,-1),": ")),t),c.a.createElement(E.a.Cell,null,c.a.createElement("b",{className:"results-table-header"},"".concat(V[2].text,": ")),c.a.createElement("b",{style:{color:n?"green":"red"}},n?"Yes":"No")),c.a.createElement(E.a.Cell,null,c.a.createElement("b",{className:"results-table-header"},"".concat(V[3].text,": ")),c.a.createElement(M.a,{bulleted:!0},i.map((function(e){return c.a.createElement(M.a.Item,{key:e},e)})))))})))),c.a.createElement(v.a,{padded:!0,stackable:!0,columns:2},c.a.createElement(v.a.Row,null,c.a.createElement(v.a.Column,{width:2},c.a.createElement(f.a,{fluid:!0,secondary:!0,onClick:i},"Back")),c.a.createElement(v.a.Column,{width:2},c.a.createElement(f.a,{fluid:!0,primary:!0,onClick:o},"Reset")))))},I=t(22),j=t(35),B=function(){function e(a,t){Object(I.a)(this,e),this.targetDate=a,this.convictions=t}return Object(j.a)(e,[{key:"getConviction",value:function(e){var a=null;return this.convictions.forEach((function(t){t.id===e&&(a=t)})),a}}]),e}(),A=function e(a,t,n){Object(I.a)(this,e),this.id=a,this.vacatable=t,this.reasons=n},L=function e(a,t,n){Object(I.a)(this,e),this.vacatableReasons=a,this.notVacatableReasons=t,this.errors=n},F=function(){function e(){Object(I.a)(this,e)}return Object(j.a)(e,[{key:"calculate",value:function(e){var a=this.createSkeletonCalculatorOutput(e),t=d()(e.calculationDate),n=d()(e.clientDOB),c=this.calculateLastConvictionDate(e),i=c.format("YYYY-MM-DD"),o=t.diff(c,"years");return e.convictions.forEach((function(e){var t=a.getConviction(e.id);switch(e.classification){case R:case k:o>=3?t.reasons.vacatableReasons.push("No new conviction within the last 3 years."):t.reasons.notVacatableReasons.push("The latest conviction date ".concat(i," is within the last 3 years."));break;case g:d()(e.relevantDate).diff(n,"years")>=21?t.reasons.vacatableReasons.push("Was at least 21 years old at time of offense."):t.reasons.notVacatableReasons.push("Was less than 21 years old at time of offense.");break;case w:o>=10?t.reasons.vacatableReasons.push("No new conviction within the last 10 years."):t.reasons.notVacatableReasons.push("The latest conviction date ".concat(i," is within the last 10 years."));break;case D:o>=5?t.reasons.vacatableReasons.push("No new conviction within the last 5 years."):t.reasons.notVacatableReasons.push("The latest conviction date ".concat(i," is within the last 5 years."));break;default:t.reasons.errors.push("Crime Classification not specified.")}})),e.convictions.forEach((function(e){var n=a.getConviction(e.id),c=d()(e.relevantDate),i=c.format("YYYY-MM-DD"),o=t.diff(c,"years");e.classification!==R&&e.classification!==k||(!0===e.isDuiRelated?o>=10?n.reasons.vacatableReasons.push("Conviction involves DUI, 10 year has passed since the Relevant Date"):n.reasons.notVacatableReasons.push("Conviction involves DUI, 10 years has not passed since the Relevant Date ".concat(i)):!0===e.isDomesticViolenceRelated?o>=5?n.reasons.vacatableReasons.push("Conviction involves Domestic Violence, 5 year has passed since the Relevant Date (completion of sentence and any treatment ordered)"):n.reasons.notVacatableReasons.push("Conviction involves Domestic Violence, 5 year has not passed since the Relevant Date  ".concat(i)):o>=3?n.reasons.vacatableReasons.push("3 year has passed since the Relevant Date"):n.reasons.notVacatableReasons.push("3 years has not passed since the Relevant Date ".concat(i)))})),e.convictions.forEach((function(e){var n=a.getConviction(e.id),c=d()(e.relevantDate),i=c.format("YYYY-MM-DD"),o=t.diff(c,"years");e.classification!==D&&e.classification!==w||(c>=d()("1984-07-01")?n.reasons.vacatableReasons.push("Offense's Relevant Date (committed) is after July 1st, 1984."):n.reasons.notVacatableReasons.push("Offense Relevant Date ".concat(i," is before July 1st, 1984."))),e.classification===w&&(o>=10?n.reasons.vacatableReasons.push("10 years has passed since the Relevant Date (latter of release or sentencing date)"):n.reasons.notVacatableReasons.push("10 years has not passed since the Relevant Date ".concat(i))),e.classification===D&&(o>=5?n.reasons.vacatableReasons.push("5 years has passed since the Relevant Date (latter of release or sentencing date"):n.reasons.notVacatableReasons.push("5 years has not passed since the Relevant Date ".concat(i)))})),this.setEligibilityProperty(a),a}},{key:"createSkeletonCalculatorOutput",value:function(e){var a=e.convictions.map((function(e){return new A(e.id,null,new L([],[],[]))}));return new B(e.calculationDate,a)}},{key:"calculateLastConvictionDate",value:function(e){var a=e.convictions.filter((function(e){return e.classification!==g})).map((function(e){return e.relevantDate})).filter((function(e){return void 0!==e})).sort().pop();return d()(a)}},{key:"setEligibilityProperty",value:function(e){e.convictions.forEach((function(e){e.reasons.errors.length>0?e.vacatable=null:e.reasons.notVacatableReasons.length>0?e.vacatable=!1:e.reasons.vacatableReasons.length>0?e.vacatable=!0:console.error("Conviction output does not have any errors, vacatable reasons and not vacatable reasons.")}))}}]),e}(),U=function e(a,t,n){Object(I.a)(this,e),this.calculationDate=a,this.clientDOB=t,this.convictions=n},_=function e(a,t,n,c,i,o){Object(I.a)(this,e),this.id=a,this.crime=t,this.classification=n,this.isDomesticViolenceRelated=c,this.isDuiRelated=i,this.relevantDate=o},z=function(){var e=new F,a=c.a.useState(!1),t=Object(s.a)(a,2),n=t[0],i=t[1],o=c.a.useRef(),u=c.a.useRef(),b=c.a.useState([]),E=Object(s.a)(b,2),C=E[0],p=E[1],y=c.a.useState(""),w=Object(s.a)(y,2),D=w[0],R=w[1],g=c.a.useState(""),k=Object(s.a)(g,2),O=k[0],x=k[1],N=c.a.useState(""),M=Object(s.a)(N,2),V=M[0],I=M[1],j=function(e){var a=Array.apply(null,Array(e)).map((function(){return{id:"",name:"",classification:"",isDomesticViolence:!1,date:""}}));p((function(e){return e.concat(a)}))};c.a.useEffect((function(){j(5)}),[]);return c.a.createElement(c.a.Fragment,null,n?c.a.createElement(Y,{calculatorInput:o.current,calculatorOutput:u.current,clientName:D,clientDOB:O,handleBack:function(){r.a.event({category:"ConvictionsCalculator",action:"user clicked the back button on the Convictions Calculator page"}),u.current=null,i(!1)},handleReset:function(){r.a.event({category:"ConvictionsCalculator",action:"user clicked the reset button"}),o.current=null,u.current=null,p([]),j(5),R(""),I(""),i(!1)}}):c.a.createElement(S,{addConvictions:j,convictions:C,handleChange:function(e,a,t){p((function(n){var c=Object(l.a)(n);return c[e][a]=t,c}))},handleDelete:function(e){p((function(a){var t=Object(l.a)(a);return t.splice(e,1),t}))},clientName:D,setClientName:R,clientDOB:O,setClientDOB:x}),c.a.createElement(v.a,{padded:!0,stackable:!0,columns:2},c.a.createElement(v.a.Row,null,c.a.createElement(v.a.Column,{width:13},c.a.createElement(h.a,null,c.a.createElement(h.a.Field,null,c.a.createElement("b",null,"Notes:")),c.a.createElement(m.a,{onChange:function(e,a){var t=a.value;r.a.event({category:"ConvictionsCalculator",action:"user has changed the Notes forms"}),I(t)},placeholder:"Notes and comments...",rows:10,value:V}))),c.a.createElement(v.a.Column,{verticalAlign:"middle",width:2},n&&c.a.createElement(f.a,{fluid:!0,primary:!0,onClick:function(){r.a.event({category:"ConvictionsCalculator",action:"user clicked the print button"}),window.print()}},"Print"),!n&&c.a.createElement(f.a,{fluid:!0,primary:!0,onClick:function(){r.a.event({category:"ConvictionsForm",action:"user clicked the submit button"});var a=C.filter((function(e){return e.id&&e.name&&e.classification&&e.date})).map((function(e){return new _(e.id,e.name,"unclear"===e.classification?null:e.classification,e.isDomesticViolence,e.isDuiRelated,d()(e.date,"YYYY-MM-DD").toISOString())})),t=d()().toISOString(),n=d()(O,"YYYY-MM-DD").toISOString(),c=new U(t,n,a);o.current=c;var l=e.calculate(c);u.current=l,i(!0)}},"Submit")))),c.a.createElement("div",{id:"notes-print-area"},c.a.createElement("h5",null,"Notes:"),V))};t(300);var J=function(){return c.a.useEffect((function(){r.a.initialize("UA-156075348-1"),r.a.pageview(window.location.pathname+window.location.search)})),c.a.createElement("div",null,c.a.createElement("header",{className:"App-header"},c.a.createElement("p",null,"King County Conviction Vacation")),c.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[173,1,2]]]);
//# sourceMappingURL=main.7d054fea.chunk.js.map