(this.webpackJsonpreact_js_20=this.webpackJsonpreact_js_20||[]).push([[0],{10:function(e,a,t){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},23:function(e,a,t){e.exports={Button:"Button_Button__3R1xi"}},25:function(e,a,t){e.exports={Loader:"Loader_Loader__17sQZ"}},26:function(e,a,t){e.exports={App:"App_App__aOmNj"}},27:function(e,a,t){e.exports=t(72)},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),c=t.n(o),l=t(11),i=t(3),s=t(4),m=t(6),u=t(5),h=t(7),d=t(22),p=t.n(d),g=function(e,a){return p.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(a,"&key=").concat("15175045-77baaaeb3714f44ae698d8195","&image_type=photo&orientation=horizontal&per_page=12"))},f=t(8),b=t.n(f),y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={query:""},t.handleChange=function(e){t.setState({query:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),(0,t.props.onSubmit)(t.state.query),t.setState({value:""})},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("header",{className:b.a.Searchbar},r.a.createElement("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:b.a.SearchFormButton},r.a.createElement("span",{className:b.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:b.a.SearchFormInput,type:"text",value:e,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))}}]),a}(n.Component),_=t(9),S=t.n(_),v=function(e){var a=e.item,t=e.onClick;return r.a.createElement("li",{onClick:function(){return t(a.id)},className:S.a.ImageGalleryItem},r.a.createElement("img",{src:a.webformatURL,alt:a.tags,className:S.a.ImageGalleryItemImage}))},I=function(e){var a=e.items,t=e.openModal;return r.a.createElement(r.a.Fragment,null,a.length>0&&r.a.createElement("ul",{className:S.a.ImageGallery},a.map((function(e){return r.a.createElement(v,{item:e,onClick:t,key:e.id})}))),";")},E=t(23),O=t.n(E),j=function(e){var a=e.onLoadMore;return r.a.createElement("button",{type:"button",className:O.a.Button,onClick:a},"Load More")},M=t(10),C=t.n(M),L=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).handleESC=function(e){27===e.keyCode&&t.props.onCloseModal()},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleESC)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleESC)}},{key:"render",value:function(){var e=this.props,a=e.imageId,t=e.images,n=e.onCloseModal,o=t.find((function(e){if(e.id===a)return e.largeImageURL}));return r.a.createElement("div",{className:C.a.Overlay,onClick:n},r.a.createElement("div",{className:C.a.Modal},r.a.createElement("img",{src:o.largeImageURL,alt:o.tags})))}}]),a}(n.Component),k=(t(49),t(24)),w=t.n(k),F=t(25),x=t.n(F),B=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:x.a.Loader},r.a.createElement(w.a,{type:"ThreeDots",color:"#FFB1B1",height:100,width:100,timeout:2e3}))}}]),a}(n.Component),N=function(e){var a=e.text;return r.a.createElement("h1",null,"Whoops, something went wrong: ",a)},G=t(26),q=t.n(G),A=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!1,query:"",images:[],error:null,page:1,isModalOpen:!1,imageId:null},t.fetchImages=function(e,a){t.setState({isLoading:!0}),g(e,a).then((function(e){return t.setState((function(a){return{images:[].concat(Object(l.a)(a.images),Object(l.a)(e.data.hits))}}))})).catch((function(e){return t.setState({error:e})})).finally((function(){return t.setState({isLoading:!1})}))},t.handleSubmit=function(e){t.setState({query:e,images:[],page:1})},t.onLoadMore=function(){var e=t.state.page;t.setState({page:e+1,isLoading:!0})},t.handleOpenModal=function(e){t.setState({isModalOpen:!0,imageId:e})},t.handleCloseModal=function(e){t.setState({isModalOpen:!1,imageId:""})},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=this.state,n=t.page,r=t.query,o=t.images;a.query===r&&a.page===n||this.fetchImages(r,n),a.images!==o&&o.length>12&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLoading,n=e.error,o=e.isModalOpen,c=e.imageId;return r.a.createElement("div",{className:q.a.App},r.a.createElement(y,{onSubmit:this.handleSubmit}),o&&r.a.createElement(L,{imageId:c,images:a,onCloseModal:this.handleCloseModal}),r.a.createElement(I,{items:a,openModal:this.handleOpenModal}),n&&r.a.createElement(N,{text:n.message}),t&&r.a.createElement(B,null),a.length>0&&r.a.createElement(j,{onLoadMore:this.onLoadMore}))}}]),a}(n.Component);t(71);c.a.render(r.a.createElement(A,null),document.getElementById("root"))},8:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}},9:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ",ImageGalleryItem:"ImageGallery_ImageGalleryItem__30xkQ",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__17FjM"}}},[[27,1,2]]]);
//# sourceMappingURL=main.de9a419f.chunk.js.map