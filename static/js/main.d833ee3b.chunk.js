(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,function(e,t,c){e.exports={BoxBtn:"FeedbackOptions_BoxBtn__2TOvj",FeedBackBtn:"FeedbackOptions_FeedBackBtn__1s6J4"}},,,function(e,t,c){e.exports={Section:"Section_Section__146fn"}},function(e,t,c){e.exports={FeedbackList:"Statistics_FeedbackList__2YFWi"}},function(e,t,c){e.exports={Message:"Notification_Message__2ZYti"}},,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),i=c.n(s),o=(c(13),c(2)),r=c(6),b=c.n(r),u=c(0),d=function(e){var t=e.title,c=e.children;return Object(u.jsxs)("section",{className:b.a.Section,children:[Object(u.jsx)("h1",{children:t}),c]})},j=c(3),l=c.n(j),O=function(e){var t=e.onLeaveFeedback;return Object(u.jsxs)("div",{className:l.a.BoxBtn,children:[Object(u.jsx)("button",{type:"button",className:l.a.FeedBackBtn,onClick:function(){return t("good")},children:"Good"},"good"),Object(u.jsx)("button",{type:"button",className:l.a.FeedBackBtn,onClick:function(){return t("neutral")},children:"Neutral"},"neutral"),Object(u.jsx)("button",{type:"button",className:l.a.FeedBackBtn,onClick:function(){return t("bad")},children:"Bad"},"bad")]})},f=c(7),h=c.n(f),x=function(e){var t=e.good,c=e.neutral,n=e.bad,a=e.total,s=e.positivePercentage;return Object(u.jsxs)("ul",{className:h.a.FeedbackList,children:[Object(u.jsxs)("li",{children:["\ud83d\ude0a Goog: ",t]}),Object(u.jsxs)("li",{children:["\ud83d\ude10 Neutral: ",c]}),Object(u.jsxs)("li",{children:["\ud83d\ude12 Bad: ",n]}),Object(u.jsxs)("li",{children:["\u27aa Total: ",a]}),Object(u.jsxs)("li",{children:["\u27aa Positive feedback: ",s,"%"]})]})},k=c(8),B=c.n(k),g=function(e){var t=e.message;return Object(u.jsxs)("p",{className:B.a.Message,children:["\u261d ",t," "]})};function p(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(o.a)(s,2),r=i[0],b=i[1],j=Object(n.useState)(0),l=Object(o.a)(j,2),f=l[0],h=l[1],k=Object(n.useState)(0),B=Object(o.a)(k,2),p=B[0],v=B[1],_=Object(n.useState)(0),F=Object(o.a)(_,2),m=F[0],S=F[1];return Object(n.useEffect)((function(){var e=c+r+f,t=Math.round(100*c/e);v(e),S(t)}),[c,r,f]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{title:"Please leave feedback",children:Object(u.jsx)(O,{onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":h((function(e){return e+1}));break;default:return}}})}),Object(u.jsx)(d,{title:"Statistic",children:0===p?Object(u.jsx)(g,{message:"There is no feedback"}):Object(u.jsx)(x,{good:c,neutral:r,bad:f,total:p,positivePercentage:m})})]})}i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.d833ee3b.chunk.js.map