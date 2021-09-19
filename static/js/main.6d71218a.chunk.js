(this["webpackJsonpgoit-react-33-hw-03-image-finder"]=this["webpackJsonpgoit-react-33-hw-03-image-finder"]||[]).push([[0],{19:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var a,o,r,i,c,l,s,p,d,u,h,g,b,x,f=t(0),m=t.n(f),j=t(11),O=t.n(j),v=(t(19),t(10)),y=t(5),w=t(6),k=t(8),S=t(7),C="https://pixabay.com/api/",z="20731913-04720c2299aa0ca3b12520f7d",I=t(2),M=t(3),P=M.a.header(a||(a=Object(I.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #faf613;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),D=M.a.form(o||(o=Object(I.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),V=M.a.button(r||(r=Object(I.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),E=M.a.label(i||(i=Object(I.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),F=M.a.input(c||(c=Object(I.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),L=t(1),Q=function(n){Object(k.a)(t,n);var e=Object(S.a)(t);function t(){var n;Object(y.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={inputValue:""},n.onChangeValue=function(e){var t=e.currentTarget.value;n.setState({inputValue:t})},n.onSubmitForm=function(e){e.preventDefault();var t=n.state.inputValue;n.props.onSubmit(t)},n}return Object(w.a)(t,[{key:"render",value:function(){var n=this.state.inputValue;return Object(L.jsx)(P,{children:Object(L.jsxs)(D,{onSubmit:this.onSubmitForm,children:[Object(L.jsx)(V,{type:"submit",children:Object(L.jsx)(E,{children:"Search"})}),Object(L.jsx)(F,{onChange:this.onChangeValue,value:n,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),t}(f.Component),T=M.a.ul(l||(l=Object(I.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),U=function(n){var e=n.children;return Object(L.jsx)(T,{children:e})},A=M.a.li(s||(s=Object(I.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n    0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),B=M.a.img(p||(p=Object(I.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),K=function(n){var e=n.items,t=n.onClick;return e.map((function(n){return Object(L.jsx)(A,{onClick:function(){return t(n)},children:Object(L.jsx)(B,{src:n.webformatURL,alt:n.tags})},n.id)}))},q=M.a.button(d||(d=Object(I.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #faf613;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #616160;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  :focus {\n    background-color: #faf613;\n  }\n"]))),J=function(n){var e=n.onClick;return Object(L.jsx)(q,{type:"button",onClick:e,children:"Load More"})},R=t(13),_=t.n(R),H=M.a.div(u||(u=Object(I.a)(["\n  margin: 0 auto;\n"]))),N=function(){return Object(L.jsx)(H,{children:Object(L.jsx)(_.a,{type:"ThreeDots",color:"#faf613",height:80,width:80})})},W=M.a.div(h||(h=Object(I.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),G=M.a.div(g||(g=Object(I.a)(["\n  width: 80%;\n\n  /* max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px); */\n"]))),X=function(n){Object(k.a)(t,n);var e=Object(S.a)(t);function t(){var n;Object(y.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).handleKeyDown=function(e){"Escape"===e.code&&n.props.closeModal()},n.handleBackdropClick=function(e){e.target===e.currentTarget&&n.props.closeModal()},n}return Object(w.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var n=this.props.image,e=n.largeImageURL,t=n.tags;return Object(L.jsx)(W,{onClick:this.handleBackdropClick,children:Object(L.jsx)(G,{children:Object(L.jsx)("img",{src:e,alt:t})})})}}]),t}(f.Component),Y=M.a.h1(b||(b=Object(I.a)(["\n  margin: 0 auto;\n  color: tomato;\n  font-weight: 500;\n"]))),Z=function(n){var e=n.message;return Object(L.jsx)(Y,{children:e})},$=M.a.div(x||(x=Object(I.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),nn=function(n){Object(k.a)(t,n);var e=Object(S.a)(t);function t(){var n;Object(y.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={searchQuery:"",currentPage:0,cardSet:[],selectedImage:null,loading:!1},n.fetchImages=function(e,t){var a=C,o=z;n.setState({loading:!0}),fetch("".concat(a,"?q=").concat(e,"&page=").concat(t,"&key=").concat(o,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(n){return n.json()})).then((function(e){return n.onFillColection(e.hits)})).catch((function(n){return console.log(n)})).finally((function(){return n.setState({loading:!1})}))},n.onFillColection=function(e){n.setState((function(n){return{cardSet:[].concat(Object(v.a)(n.cardSet),Object(v.a)(e))}})),n.onScrollPage()},n.onScrollPage=function(){n.state.currentPage>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},n.onSubmit=function(e){n.setState({cardSet:[],searchQuery:e,currentPage:1})},n.onloadMore=function(){n.setState((function(n){return{currentPage:n.currentPage+1}}))},n.onSelectImage=function(e){n.setState({selectedImage:e})},n.onCloseModal=function(){n.setState({selectedImage:null})},n}return Object(w.a)(t,[{key:"componentDidUpdate",value:function(n,e){var t=this.state,a=t.searchQuery,o=t.currentPage;o===e.currentPage&&a===e.searchQuery||this.fetchImages(a,o)}},{key:"render",value:function(){var n=this.state,e=n.currentPage,t=n.cardSet,a=n.selectedImage,o=n.loading;return Object(L.jsxs)($,{children:[Object(L.jsx)(Q,{onSubmit:this.onSubmit}),Object(L.jsx)(U,{children:Object(L.jsx)(K,{items:t,onClick:this.onSelectImage})}),o&&Object(L.jsx)(N,{}),1===e&&0===t.length&&!o&&Object(L.jsx)(Z,{message:"No images for this request."}),t.length>0&&Object(L.jsx)(J,{onClick:this.onloadMore}),a&&Object(L.jsx)(X,{image:a,closeModal:this.onCloseModal})]})}}]),t}(f.Component);O.a.render(Object(L.jsx)(m.a.StrictMode,{children:Object(L.jsx)(nn,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.6d71218a.chunk.js.map