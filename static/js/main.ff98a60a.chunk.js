(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),i=c(13),o=c.n(i),a=c(11),l=c.n(a),j=c(14),u=c(2),d=c(4),b=Object(r.createContext)(),p=c(9),O=function(){return Object(n.jsx)("div",{className:"left-nav-container",children:Object(n.jsx)("div",{className:"icons",children:Object(n.jsxs)("div",{className:"icons-bis",children:[Object(n.jsx)(p.b,{to:"/",exact:!0,activeClassName:"active-left-nav",children:Object(n.jsx)("img",{src:"./img/icons/home.svg",alt:"home"})}),Object(n.jsx)("br",{}),Object(n.jsx)(p.b,{to:"/trending",exact:!0,activeClassName:"active-left-nav",children:Object(n.jsx)("img",{src:"./img/icons/rocket.svg",alt:"home"})}),Object(n.jsx)("br",{}),Object(n.jsx)(p.b,{to:"/profil",exact:!0,activeClassName:"active-left-nav",children:Object(n.jsx)("img",{src:"./img/icons/user.svg",alt:"home"})})]})})})},m=c(3),h=function(e){var t=Date.parse(e);return new Date(t).toLocaleDateString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit",weekday:"long",year:"numeric",month:"short",day:"numeric"}).toString()},f=function(e){return new Date(e).toLocaleDateString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit",weekday:"long",year:"numeric",month:"short",day:"numeric"}).toString()},x=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},g=c(5),v=c.n(g),w="GET_POSTS",y="GET_ALL_POSTS",k="LIKE_POST",N="UNLIKE_POST",S="UPDATE_POST",_="DELETE_POST",E="EDIT_COMMENT",C="DELETE_COMMENT",I="GET_TRENDS",T="GET_POST_ERRORS",R=function(e){return function(t){return v.a.get("".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/post/")).then((function(c){var n=c.data.slice(0,e);t({type:w,payload:n}),t({type:y,payload:c.data})})).catch((function(e){return console.log(e)}))}},F=function(e){return function(t){return v.a.post("".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/post/"),e).then((function(e){e.data.errors?t({type:T,payload:e.data.errors}):t({type:T,payload:""})}))}},L=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),o=Object(u.a)(i,2),a=o[0],d=o[1],b=Object(r.useState)(null),O=Object(u.a)(b,2),h=O[0],g=O[1],v=Object(r.useState)(""),w=Object(u.a)(v,2),y=w[0],k=w[1],N=Object(r.useState)(),S=Object(u.a)(N,2),_=S[0],E=S[1],C=Object(m.c)((function(e){return e.userReducer})),I=Object(m.c)((function(e){return e.errorReducer.postError})),T=Object(m.b)(),L=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a||h||y)){e.next=12;break}return(t=new FormData).append("posterId",C._id),t.append("message",a),_&&t.append("file",_),t.append("video",y),e.next=8,T(F(t));case 8:T(R()),D(),e.next=13;break;case 12:alert("Veuillez entrer un message");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){d(""),g(""),k(""),E("")};return Object(r.useEffect)((function(){x(C)||s(!1);!function(){for(var e=a.split(" "),t=0;t<e.length;t++)if(e[t].includes("https://www.yout")||e[t].includes("https://yout")){var c=e[t].replace("watch?v=","embed/");k(c.split("&")[0]),e.splice(t,1),d(e.join(" ")),g("")}}()}),[C,a,y]),Object(n.jsx)("div",{className:"post-container",children:c?Object(n.jsx)("i",{className:"fas fa-spinner fa-pulse"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"data",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:C.following?C.following.length:0})," ","Abonnement",C.following&&C.following.length>1?"s":null]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:C.followers?C.followers.length:0})," ","Abonn\xe9",C.followers&&C.followers.length>1?"s":null]})]}),Object(n.jsx)(p.b,{exact:!0,to:"/profil",children:Object(n.jsx)("div",{className:"user-info",children:Object(n.jsx)("img",{src:C.picture,alt:"user-img"})})}),Object(n.jsxs)("div",{className:"post-form",children:[Object(n.jsx)("textarea",{name:"message",id:"message",placeholder:"Quoi de neuf ?",onChange:function(e){return d(e.target.value)},value:a}),a||h||y.length>20?Object(n.jsxs)("li",{className:"card-container",children:[Object(n.jsx)("div",{className:"card-left",children:Object(n.jsx)("img",{src:C.picture,alt:"user-pic"})}),Object(n.jsxs)("div",{className:"card-right",children:[Object(n.jsxs)("div",{className:"card-header",children:[Object(n.jsx)("div",{className:"pseudo",children:Object(n.jsx)("h3",{children:C.pseudo})}),Object(n.jsx)("span",{children:f(Date.now())})]}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("p",{children:a}),Object(n.jsx)("img",{src:h,alt:""}),y&&Object(n.jsx)("iframe",{src:y,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:y})]})]})]}):null,Object(n.jsxs)("div",{className:"footer-form",children:[Object(n.jsxs)("div",{className:"icon",children:[x(y)&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:"./img/icons/picture.svg",alt:"img"}),Object(n.jsx)("input",{type:"file",id:"file-upload",name:"file",accept:".jpg, .jpeg, .png",onChange:function(e){return function(e){g(URL.createObjectURL(e.target.files[0])),E(e.target.files[0]),k("")}(e)}})]}),y&&Object(n.jsx)("button",{onClick:function(){return k("")},children:"Supprimer video"})]}),!x(I.format)&&Object(n.jsx)("p",{children:I.format}),!x(I.maxSize)&&Object(n.jsx)("p",{children:I.maxSize}),Object(n.jsxs)("div",{className:"btn-send",children:[a||h||y.length>20?Object(n.jsx)("button",{className:"cancel",onClick:D,children:"Annuler message"}):null,Object(n.jsx)("button",{className:"send",onClick:L,children:"Envoyer"})]})]})]})]})})},D="GET_USER",M="UPLOAD_PICTURE",P="UPDATE_BIO",U="FOLLOW_USER",A="UNFOLLOW_USER",H="GET_USER_ERRORS",V=function(e){var t=e.idToFollow,c=e.type,s=Object(m.c)((function(e){return e.userReducer})),i=Object(r.useState)(!1),o=Object(u.a)(i,2),a=o[0],l=o[1],j=Object(m.b)();return Object(r.useEffect)((function(){x(s.following)||(s.following.includes(t)?l(!0):l(!1))}),[s,t]),Object(n.jsxs)(n.Fragment,{children:[a&&!x(s)&&Object(n.jsxs)("span",{onClick:function(){var e,c;j((e=s._id,c=t,function(t){return v()({method:"patch",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/user/unfollow/")+e,data:{idToUnfollow:c}}).then((function(e){t({type:A,payload:{idToUnfollow:c}})})).catch((function(e){return console.log(e)}))})),l(!1)},children:["suggestion"===c&&Object(n.jsx)("button",{className:"unfollow-btn",children:"Abonn\xe9"}),"card"===c&&Object(n.jsx)("img",{src:"./img/icons/checked.svg",alt:"checked"})]}),!1===a&&!x(s)&&Object(n.jsxs)("span",{onClick:function(){j(function(e,t){return function(c){return v()({method:"patch",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/user/follow/")+e,data:{idToFollow:t}}).then((function(e){c({type:U,payload:{idToFollow:t}})})).catch((function(e){return console.log(e)}))}}(s._id,t)),l(!0)},children:["suggestion"===c&&Object(n.jsx)("button",{className:"follow-btn",children:"Suivre"}),"card"===c&&Object(n.jsx)("img",{src:"./img/icons/check.svg",alt:"check"})]})]})},z=c(31),B=(c(65),function(e){var t=e.post,c=Object(r.useState)(!1),s=Object(u.a)(c,2),i=s[0],o=s[1],a=Object(r.useContext)(b),l=Object(m.b)();return Object(r.useEffect)((function(){t.likers.includes(a)?o(!0):o(!1)}),[a,t.likers,i]),Object(n.jsxs)("div",{className:"like-container",children:[null===a&&Object(n.jsx)(z.a,{trigger:Object(n.jsx)("img",{src:"./img/icons/heart.svg",alt:"like"}),position:["bottom center","bottom right","bottom left"],closeOnDocumentClick:!0,children:Object(n.jsx)("div",{children:"Connectez-vous pour aimer un post !"})}),a&&!1===i&&Object(n.jsx)("img",{src:"./img/icons/heart.svg",onClick:function(){var e,c;l((e=t._id,c=a,function(t){return v()({method:"patch",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/post/like-post/")+e,data:{id:c}}).then((function(n){t({type:k,payload:{postId:e,userId:c}})})).catch((function(e){return console.log(e)}))})),o(!0)},alt:"like"}),a&&i&&Object(n.jsx)("img",{src:"./img/icons/heart-filled.svg",onClick:function(){var e,c;l((e=t._id,c=a,function(t){return v()({method:"patch",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/post/unlike-post/")+e,data:{id:c}}).then((function(n){t({type:N,payload:{postId:e,userId:c}})})).catch((function(e){return console.log(e)}))})),o(!1)},alt:"unlike"}),Object(n.jsx)("span",{children:t.likers.length})]})}),q=function(e){var t=Object(m.b)(),c=function(){return t((c=e.id,function(e){return v()({method:"delete",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/post/").concat(c)}).then((function(t){e({type:_,payload:{postId:c}})})).catch((function(e){return console.log(e)}))}));var c};return Object(n.jsx)("div",{onClick:function(){window.confirm("Voulez-vous supprimer cet article ?")&&c()},children:Object(n.jsx)("img",{src:"./img/icons/trash.svg",alt:"trash"})})},G=function(e){var t=e.comment,c=e.postId,s=Object(r.useState)(!1),i=Object(u.a)(s,2),o=i[0],a=i[1],l=Object(r.useState)(!1),j=Object(u.a)(l,2),d=j[0],p=j[1],O=Object(r.useState)(""),h=Object(u.a)(O,2),f=h[0],x=h[1],g=Object(r.useContext)(b),w=Object(m.b)(),y=function(){return w(function(e,t){return function(c){return v()({method:"patch",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/post/delete-comment-post/").concat(e),data:{commentId:t}}).then((function(n){c({type:C,payload:{postId:e,commentId:t}})})).catch((function(e){return console.log(e)}))}}(c,t._id))};return Object(r.useEffect)((function(){g===t.commenterId&&a(!0)}),[g,t.commenterId]),Object(n.jsxs)("div",{className:"edit-comment",children:[o&&!1===d&&Object(n.jsx)("span",{onClick:function(){return p(!d)},children:Object(n.jsx)("img",{src:"./img/icons/edit.svg",alt:"edit-comment"})}),o&&d&&Object(n.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),f&&(w(function(e,t,c){return function(n){return v()({method:"patch",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/post/edit-comment-post/").concat(e),data:{commentId:t,text:c}}).then((function(r){n({type:E,payload:{postId:e,commentId:t,text:c}})})).catch((function(e){return console.log(e)}))}}(c,t._id,f)),x(""),p(!1))},className:"edit-comment-form",children:[Object(n.jsx)("label",{htmlFor:"text",onClick:function(){return p(!d)},children:"Editer"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"text",onChange:function(e){return x(e.target.value)},defaultValue:t.text}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"btn",children:[Object(n.jsx)("span",{onClick:function(){window.confirm("Voulez-vous supprimer ce commentaire ?")&&y()},children:Object(n.jsx)("img",{src:"./img/icons/trash.svg",alt:"delete"})}),Object(n.jsx)("input",{type:"submit",value:"Valider modification"})]})]})]})},J=function(e){var t=e.post,c=Object(r.useState)(""),s=Object(u.a)(c,2),i=s[0],o=s[1],a=Object(m.c)((function(e){return e.usersReducer})),l=Object(m.c)((function(e){return e.userReducer})),j=Object(m.b)();return Object(n.jsxs)("div",{className:"comments-container",children:[t.comments.map((function(e){return Object(n.jsxs)("div",{className:e.commenterId===l._id?"comment-container client":"comment-container",children:[Object(n.jsx)("div",{className:"left-part",children:Object(n.jsx)("img",{src:!x(a[0])&&a.map((function(t){return t._id===e.commenterId?t.picture:null})).join(""),alt:"commenter-pic"})}),Object(n.jsxs)("div",{className:"right-part",children:[Object(n.jsxs)("div",{className:"comment-header",children:[Object(n.jsxs)("div",{className:"pseudo",children:[Object(n.jsx)("h3",{children:e.commenterPseudo}),e.commenterId!==l._id&&Object(n.jsx)(V,{idToFollow:e.commenterId,type:"card"})]}),Object(n.jsx)("span",{children:f(e.timestamp)})]}),Object(n.jsx)("p",{children:e.text}),Object(n.jsx)(G,{comment:e,postId:t._id})]})]},e._id)})),l._id&&Object(n.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),i&&j(function(e,t,c,n){return function(r){return v()({method:"patch",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/post/comment-post/").concat(e),data:{commenterId:t,text:c,commenterPseudo:n}}).then((function(t){r({type:"ADD_COMMENT",payload:{postId:e}})})).catch((function(e){return console.log(e)}))}}(t._id,l._id,i,l.pseudo)).then((function(){return j(R())})).then((function(){return o("")}))},className:"comment-form",children:[Object(n.jsx)("input",{type:"text",name:"text",onChange:function(e){return o(e.target.value)},value:i,placeholder:"Laisser un commentaire"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"submit",value:"Envoyer"})]})]})},W=function(e){var t=e.post,c=Object(r.useState)(!0),s=Object(u.a)(c,2),i=s[0],o=s[1],a=Object(r.useState)(!1),l=Object(u.a)(a,2),j=l[0],d=l[1],b=Object(r.useState)(null),p=Object(u.a)(b,2),O=p[0],f=p[1],g=Object(r.useState)(!1),w=Object(u.a)(g,2),y=w[0],k=w[1],N=Object(m.c)((function(e){return e.usersReducer})),_=Object(m.c)((function(e){return e.userReducer})),E=Object(m.b)();return Object(r.useEffect)((function(){!x(N[0])&&o(!1)}),[N]),Object(n.jsx)("li",{className:"card-container",children:i?Object(n.jsx)("i",{className:"fas fa-spinner fa-spin"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"card-left",children:Object(n.jsx)("img",{src:!x(N[0])&&N.map((function(e){return e._id===t.posterId?e.picture:null})).join(""),alt:"poster-pic"})}),Object(n.jsxs)("div",{className:"card-right",children:[Object(n.jsxs)("div",{className:"card-header",children:[Object(n.jsxs)("div",{className:"pseudo",children:[Object(n.jsx)("h3",{children:!x(N[0])&&N.map((function(e){return e._id===t.posterId?e.pseudo:null})).join("")}),t.posterId!==_._id&&Object(n.jsx)(V,{idToFollow:t.posterId,type:"card"})]}),Object(n.jsx)("span",{children:h(t.createdAt)})]}),!1===j&&Object(n.jsx)("p",{children:t.message}),j&&Object(n.jsxs)("div",{className:"update-post",children:[Object(n.jsx)("textarea",{defaultValue:t.message,onChange:function(e){return f(e.target.value)}}),Object(n.jsx)("div",{className:"button-container",children:Object(n.jsx)("button",{className:"btn",onClick:function(){var e,c;O&&E((e=t._id,c=O,function(t){return v()({method:"put",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/post/").concat(e),data:{message:c}}).then((function(n){t({type:S,payload:{message:c,postId:e}})})).catch((function(e){return console.log(e)}))})),d(!1)},children:"Valider modification"})})]}),t.picture&&Object(n.jsx)("img",{src:t.picture,alt:"card-pic",className:"card-pic"}),t.video&&Object(n.jsx)("iframe",{width:"500",height:"300",src:t.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:t._id}),_._id===t.posterId&&Object(n.jsxs)("div",{className:"button-container",children:[Object(n.jsx)("div",{onClick:function(){return d(!j)},children:Object(n.jsx)("img",{src:"./img/icons/edit.svg",alt:"edit"})}),Object(n.jsx)(q,{id:t._id})]}),Object(n.jsxs)("div",{className:"card-footer",children:[Object(n.jsxs)("div",{className:"comment-icon",children:[Object(n.jsx)("img",{onClick:function(){return k(!y)},src:"./img/icons/message1.svg",alt:"comment"}),Object(n.jsx)("span",{children:t.comments.length})]}),Object(n.jsx)(B,{post:t}),Object(n.jsx)("img",{src:"./img/icons/share.svg",alt:"share"})]}),y&&Object(n.jsx)(J,{post:t})]})]})},t._id)},K=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(5),o=Object(u.a)(i,2),a=o[0],l=o[1],j=Object(m.b)(),d=Object(m.c)((function(e){return e.postReducer})),b=function(){window.innerHeight+document.documentElement.scrollTop+1>document.scrollingElement.scrollHeight&&s(!0)};return Object(r.useEffect)((function(){return c&&(j(R(a)),s(!1),l(a+5)),window.addEventListener("scroll",b),function(){return window.removeEventListener("scroll",b)}}),[c,j,a]),Object(n.jsx)("div",{className:"thread-container",children:Object(n.jsx)("ul",{children:!x(d[0])&&d.map((function(e){return Object(n.jsx)(W,{post:e},e._id)}))})})},Q=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),o=Object(u.a)(i,2),a=o[0],l=o[1];return Object(n.jsxs)("form",{action:"",onSubmit:function(e){console.log({email:c,password:a}),e.preventDefault();var t=document.querySelector(".email.error"),n=document.querySelector(".password.error");v()({method:"post",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/user/login"),data:{email:c,password:a}}).then((function(e){e.data.errors?(t.innerHTML=e.data.errors.email,n.innerHTML=e.data.errors.password):(localStorage.setItem("jwt",e.data.token),window.location="/my-social-network")})).catch((function(e){console.log(e)}))},id:"sign-up-form",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"email",id:"email",onChange:function(e){return s(e.target.value)},value:c}),Object(n.jsx)("div",{className:"email error"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return l(e.target.value)},value:a}),Object(n.jsx)("div",{className:"password error"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"submit",value:"Se connecter"})]})},X=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),o=Object(u.a)(i,2),a=o[0],d=o[1],b=Object(r.useState)(""),p=Object(u.a)(b,2),O=p[0],m=p[1],h=Object(r.useState)(""),f=Object(u.a)(h,2),x=f[0],g=f[1],w=Object(r.useState)(""),y=Object(u.a)(w,2),k=y[0],N=y[1],S=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,n,r,i,o,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c=document.getElementById("terms"),n=document.querySelector(".pseudo.error"),r=document.querySelector(".email.error"),i=document.querySelector(".password.error"),o=document.querySelector(".password-confirm.error"),j=document.querySelector(".terms.error"),o.innerHTML="",j.innerHTML="",x===k&&c.checked){e.next=14;break}x!==k&&(o.innerHTML="Les mots de passe ne correspondent pas"),c.checked||(j.innerHTML="Veuillez valider les conditions g\xe9n\xe9rales"),e.next=16;break;case 14:return e.next=16,v()({method:"post",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/user/register"),data:{pseudo:a,email:O,password:x}}).then((function(e){e.data.errors?(n.innerHTML=e.data.errors.pseudo,r.innerHTML=e.data.errors.email,i.innerHTML=e.data.errors.password):s(!0)})).catch((function(e){return console.log(e)}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:c?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Q,{}),Object(n.jsx)("span",{}),Object(n.jsx)("h4",{className:"success",children:"Enregistrement r\xe9ussi, veuillez-vous connecter"})]}):Object(n.jsxs)("form",{action:"",onSubmit:S,id:"sign-up-form",children:[Object(n.jsx)("label",{htmlFor:"pseudo",children:"Pseudo"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"pseudo",id:"pseudo",onChange:function(e){return d(e.target.value)},value:a}),Object(n.jsx)("div",{className:"pseudo error"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"email",children:"Email"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"email",id:"email",onChange:function(e){return m(e.target.value)},value:O}),Object(n.jsx)("div",{className:"email error"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return g(e.target.value)},value:x}),Object(n.jsx)("div",{className:"password error"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"password-conf",children:"Confirmer mot de passe"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"password",name:"password",id:"password-conf",onChange:function(e){return N(e.target.value)},value:k}),Object(n.jsx)("div",{className:"password-confirm error"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"checkbox",id:"terms"}),Object(n.jsxs)("label",{htmlFor:"terms",children:["J'accepte les"," ",Object(n.jsx)("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:"conditions g\xe9n\xe9rales"})]}),Object(n.jsx)("div",{className:"terms error"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"submit",value:"Valider inscription"})]})})},Y=function(e){var t=Object(r.useState)(e.signup),c=Object(u.a)(t,2),s=c[0],i=c[1],o=Object(r.useState)(e.signin),a=Object(u.a)(o,2),l=a[0],j=a[1],d=function(e){"register"===e.target.id?(j(!1),i(!0)):"login"===e.target.id&&(i(!1),j(!0))};return Object(n.jsx)("div",{className:"connection-form",children:Object(n.jsxs)("div",{className:"form-container",children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{onClick:d,id:"register",className:s?"active-btn":null,children:"S'inscrire"}),Object(n.jsx)("li",{onClick:d,id:"login",className:l?"active-btn":null,children:"Se connecter"})]}),s&&Object(n.jsx)(X,{}),l&&Object(n.jsx)(Q,{})]})})},Z=function(){var e=Object(m.c)((function(e){return e.allPostsReducer})),t=Object(m.c)((function(e){return e.usersReducer})),c=Object(m.c)((function(e){return e.trendingReducer})),s=Object(m.b)();return Object(r.useEffect)((function(){if(!x(e[0])){var t=Object.keys(e).map((function(t){return e[t]})).sort((function(e,t){return t.likers.length-e.likers.length}));t.length=3,s(function(e){return function(t){t({type:I,payload:e})}}(t))}}),[e,s]),Object(n.jsxs)("div",{className:"trending-container",children:[Object(n.jsx)("h4",{children:"Trending"}),Object(n.jsx)(p.b,{exact:!0,to:"/trending",children:Object(n.jsx)("ul",{children:c.length&&c.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("div",{children:[e.picture&&Object(n.jsx)("img",{src:e.picture,alt:"post-pic"}),e.video&&Object(n.jsx)("iframe",{src:e.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:e._id}),x(e.picture)&&x(e.video)&&Object(n.jsx)("img",{src:t[0]&&t.map((function(t){return t._id===e.posterId?t.picture:null})).join(""),alt:"profil-pic"})]}),Object(n.jsxs)("div",{className:"trend-content",children:[Object(n.jsx)("p",{children:e.message}),Object(n.jsx)("span",{children:"Lire"})]})]},e._id)}))})})]})},$=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(!0),o=Object(u.a)(i,2),a=o[0],l=o[1],j=Object(r.useState)([]),d=Object(u.a)(j,2),b=d[0],p=d[1],O=Object(m.c)((function(e){return e.userReducer})),h=Object(m.c)((function(e){return e.usersReducer}));return Object(r.useEffect)((function(){!a||x(h[0])||x(O._id)||(!function(){var e=[];h.map((function(t){if(t._id!==O._id&&!t.followers.includes(O._id))return e.push(t._id)})),e.sort((function(){return.5-Math.random()})),window.innerHeight>780?e.length=5:window.innerHeight>720?e.length=4:window.innerHeight>615?e.length=3:window.innerHeight>540?e.length=1:e.length=0,p(e)}(),s(!1),l(!1))}),[h,O,a]),Object(n.jsxs)("div",{className:"get-friends-container",children:[Object(n.jsx)("h4",{children:"Suggestions"}),c?Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("i",{className:"fas fa-spinner fa-pulse"})}):Object(n.jsx)("ul",{children:b&&b.map((function(e){for(var t=0;t<h.length;t++)if(e===h[t]._id)return Object(n.jsxs)("li",{className:"user-hint",children:[Object(n.jsx)("img",{src:h[t].picture,alt:"user-pic"}),Object(n.jsx)("p",{children:h[t].pseudo}),Object(n.jsx)(V,{idToFollow:h[t]._id,type:"suggestion"})]},e)}))})]})},ee=function(){var e=Object(r.useContext)(b);return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)(O,{}),Object(n.jsxs)("div",{className:"main",children:[Object(n.jsx)("div",{className:"home-header",children:e?Object(n.jsx)(L,{}):Object(n.jsx)(Y,{signin:!0,signup:!1})}),Object(n.jsx)(K,{})]}),Object(n.jsx)("div",{className:"right-side",children:Object(n.jsx)("div",{className:"right-side-container",children:Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)(Z,{}),e&&Object(n.jsx)($,{})]})})})]})},te=function(){var e=Object(r.useState)(),t=Object(u.a)(e,2),c=t[0],s=(t[1],Object(m.b)()),i=Object(m.c)((function(e){return e.userReducer}));return Object(n.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("name",i.pseudo),t.append("userId",i._id),t.append("file",c),s(function(e,t){return function(c){return v.a.post("".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/user/upload"),e).then((function(e){if(!e.data.errors)return c({type:H,payload:""}),v.a.get("".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/user/").concat(t)).then((function(e){c({type:M,payload:e.data.picture})}));c({type:H,payload:e.data.errors})})).catch((function(e){return console.log(e)}))}}(t,i._id))},className:"upload-pic",children:[Object(n.jsx)("label",{htmlFor:"file",children:"Changer d'image"}),Object(n.jsx)("input",{type:"file",id:"file",name:"file",accept:".jpg, .jpeg, .png"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"submit",value:"Envoyer"})]})},ce=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(!1),o=Object(u.a)(i,2),a=o[0],l=o[1],j=Object(m.c)((function(e){return e.userReducer})),d=Object(m.c)((function(e){return e.usersReducer})),b=Object(m.c)((function(e){return e.errorReducer.userError})),p=Object(m.b)(),f=Object(r.useState)(!1),x=Object(u.a)(f,2),g=x[0],w=x[1],y=Object(r.useState)(!1),k=Object(u.a)(y,2),N=k[0],S=k[1];return Object(n.jsxs)("div",{className:"profil-container",children:[Object(n.jsx)(O,{}),Object(n.jsxs)("h1",{children:[" Profil de ",j.pseudo]}),Object(n.jsxs)("div",{className:"update-container",children:[Object(n.jsxs)("div",{className:"left-part",children:[Object(n.jsx)("h3",{children:"Photo de profil"}),Object(n.jsx)("img",{src:j.picture,alt:"user-pic"}),Object(n.jsx)(te,{}),Object(n.jsx)("p",{children:b.maxSize}),Object(n.jsx)("p",{children:b.format})]}),Object(n.jsxs)("div",{className:"right-part",children:[Object(n.jsxs)("div",{className:"bio-update",children:[Object(n.jsx)("h3",{children:"Bio"}),!1===a&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{onClick:function(){return l(!a)},children:j.bio}),Object(n.jsx)("button",{onClick:function(){return l(!a)},children:"Modifier bio"})]}),a&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{type:"text",defaultValue:j.bio,onChange:function(e){return s(e.target.value)}}),Object(n.jsx)("button",{onClick:function(){p(function(e,t){return function(c){return v()({method:"put",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/user/")+e,data:{bio:t}}).then((function(e){c({type:P,payload:t})})).catch((function(e){return console.log(e)}))}}(j._id,c)),l(!1)},children:"Valider modifications"})]})]}),Object(n.jsxs)("h4",{children:["Membre depuis le : ",h(j.createdAt)]}),Object(n.jsxs)("h5",{onClick:function(){return w(!0)},children:["Abonnements : ",j.following?j.following.length:""]}),Object(n.jsxs)("h5",{onClick:function(){return S(!0)},children:["Abonn\xe9s : ",j.followers?j.followers.length:""]})]})]}),g&&Object(n.jsx)("div",{className:"popup-profil-container",children:Object(n.jsxs)("div",{className:"modal",children:[Object(n.jsx)("h3",{children:"Abonnements"}),Object(n.jsx)("span",{className:"cross",onClick:function(){return w(!1)},children:"\u2715"}),Object(n.jsx)("ul",{children:d.map((function(e){for(var t=0;t<j.following.length;t++)if(e._id===j.following[t])return Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{src:e.picture,alt:"user-pic"}),Object(n.jsx)("h4",{children:e.pseudo}),Object(n.jsx)("div",{className:"follow-handler",children:Object(n.jsx)(V,{idToFollow:e._id,type:"suggestion"})})]},e._id);return null}))})]})}),N&&Object(n.jsx)("div",{className:"popup-profil-container",children:Object(n.jsxs)("div",{className:"modal",children:[Object(n.jsx)("h3",{children:"Abonn\xe9s"}),Object(n.jsx)("span",{className:"cross",onClick:function(){return S(!1)},children:"\u2715"}),Object(n.jsx)("ul",{children:d.map((function(e){for(var t=0;t<j.followers.length;t++)if(e._id===j.followers[t])return Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{src:e.picture,alt:"user-pic"}),Object(n.jsx)("h4",{children:e.pseudo}),Object(n.jsx)("div",{className:"follow-handler",children:Object(n.jsx)(V,{idToFollow:e._id,type:"suggestion"})})]},e._id);return null}))})]})})]})},ne=function(){var e=Object(r.useContext)(b);return Object(n.jsx)("div",{className:"profil-page",children:e?Object(n.jsx)(ce,{}):Object(n.jsxs)("div",{className:"log-container",children:[Object(n.jsx)(Y,{signin:!1,signup:!0}),Object(n.jsx)("div",{className:"img-container",children:Object(n.jsx)("img",{src:"./img/log.svg",alt:"img-log"})})]})})},re=function(){var e=Object(r.useContext)(b),t=Object(m.c)((function(e){return e.trendingReducer}));return Object(n.jsxs)("div",{className:"trending-page",children:[Object(n.jsx)(O,{}),Object(n.jsx)("div",{className:"main",children:Object(n.jsx)("ul",{children:!x(t[0])&&t.map((function(e){return Object(n.jsx)(W,{post:e},e._id)}))})}),Object(n.jsx)("div",{className:"right-side",children:Object(n.jsxs)("div",{className:"right-side-container",children:[Object(n.jsx)(Z,{}),e&&Object(n.jsx)($,{})]})})]})},se=function(){return Object(n.jsx)("li",{onClick:function(){localStorage.removeItem("jwt"),window.location="/"},children:Object(n.jsx)("img",{src:"./img/icons/logout.svg",alt:"logout"})})},ie=function(){var e=Object(r.useContext)(b),t=Object(m.c)((function(e){return e.userReducer}));return Object(n.jsx)("nav",{children:Object(n.jsxs)("div",{className:"nav-container",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)(p.b,{exact:!0,to:"/",children:Object(n.jsxs)("div",{className:"logo",children:[Object(n.jsx)("img",{src:"./img/la-personne.png",alt:"icon"}),Object(n.jsx)("h3",{children:"Jason-Dev-Web"})]})})}),e?Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{}),Object(n.jsx)("li",{className:"welcome",children:Object(n.jsx)(p.b,{exact:!0,to:"/profil",children:Object(n.jsxs)("h5",{children:["Bienvenue ",t.pseudo]})})}),Object(n.jsx)(se,{})]}):Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{}),Object(n.jsx)("li",{children:Object(n.jsx)(p.b,{exact:!0,to:"/profil",children:Object(n.jsx)("img",{src:"./img/icons/login.svg",alt:"login"})})})]})]})})},oe=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(ie,{}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/",element:Object(n.jsx)(ee,{})}),Object(n.jsx)(d.a,{path:"/profil",element:Object(n.jsx)(ne,{})}),Object(n.jsx)(d.a,{path:"/trending",element:Object(n.jsx)(re,{})})]})]})})},ae=function(){var e=Object(r.useState)(null),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(m.b)();return Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"get",url:"".concat("https://jasondevweb-socialnetwork.herokuapp.com/","jwtid"),headers:{Cookies:localStorage.getItem("jwt")}}).then((function(e){s(e.data)})).catch((function(e){return console.log("No token",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),c&&i(function(e){return function(t){return v.a.get("".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/user/").concat(e)).then((function(e){t({type:D,payload:e.data})})).catch((function(e){return console.log(e)}))}}(c))}),[c,i]),Object(n.jsx)(b.Provider,{value:c,children:Object(n.jsx)(oe,{})})},le=(c(66),c(12)),je=c(32),ue=c(17),de=c(6),be={};var pe="GET_USERS",Oe={};var me={};var he={userError:[],postError:[]};var fe={};var xe={};var ge=Object(le.combineReducers)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return t.payload;case M:return Object(de.a)(Object(de.a)({},e),{},{picture:t.payload});case P:return Object(de.a)(Object(de.a)({},e),{},{bio:t.payload});case U:return Object(de.a)(Object(de.a)({},e),{},{following:[t.payload.idToFollow].concat(Object(ue.a)(e.following))});case A:return Object(de.a)(Object(de.a)({},e),{},{following:e.following.filter((function(e){return e!==t.payload.idToUnfollow}))});default:return e}},usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return t.payload;default:return e}},postReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.payload;case k:return e.map((function(e){return e._id===t.payload.postId?Object(de.a)(Object(de.a)({},e),{},{likers:[t.payload.userId].concat(Object(ue.a)(e.likers))}):e}));case N:return e.map((function(e){return e._id===t.payload.postId?Object(de.a)(Object(de.a)({},e),{},{likers:e.likers.filter((function(e){return e!==t.payload.userId}))}):e}));case S:return e.map((function(e){return e._id===t.payload.postId?Object(de.a)(Object(de.a)({},e),{},{message:t.payload.message}):e}));case _:return e.filter((function(e){return e._id!==t.payload.postId}));case E:return e.map((function(e){return e._id===t.payload.postId?Object(de.a)(Object(de.a)({},e),{},{comments:e.comments.map((function(e){return e._id===t.payload.commentId?Object(de.a)(Object(de.a)({},e),{},{text:t.payload.text}):e}))}):e}));case C:return e.map((function(e){return e._id===t.payload.postId?Object(de.a)(Object(de.a)({},e),{},{comments:e.comments.filter((function(e){return e._id!==t.payload.commentId}))}):e}));default:return e}},errorReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{postError:t.payload,userError:[]};case H:return{userError:t.payload,postError:[]};default:return e}},allPostsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.payload;default:return e}},trendingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return t.payload;default:return e}}}),ve=c(33),we=Object(le.createStore)(ge,Object(ve.composeWithDevTools)(Object(le.applyMiddleware)(je.a)));we.dispatch((function(e){return v.a.get("".concat("https://jasondevweb-socialnetwork.herokuapp.com/","api/user")).then((function(t){e({type:pe,payload:t.data})})).catch((function(e){return console.log(e)}))})),we.dispatch(R()),o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(p.a,{basename:"/my-social-network",children:Object(n.jsx)(m.a,{store:we,children:Object(n.jsx)(ae,{})})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.ff98a60a.chunk.js.map