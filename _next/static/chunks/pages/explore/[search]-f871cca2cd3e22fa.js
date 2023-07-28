(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[912],{2807:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explore/[search]",function(){return t(9121)}])},9121:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return b}});var r=t(5893),n=t(7814),s=t(9566),i=t(1163),o=t(7294),l=t(1664),c=t.n(l),p=t(1649),u=t(1042),d=function(e){let a,{price:t,name:s,image:i,brand:o,rating:l,description:d,category:g,id:f}=e,b=(0,p.I0)();return console.log(s),(0,r.jsxs)("div",{className:"card h-100 border-0 shadow-sm",children:[(0,r.jsx)(c(),{legacyBehavior:!0,href:"/product/".concat(f),children:(0,r.jsxs)("a",{children:[(0,r.jsx)("div",{className:"ratio ratio-1x1",children:(0,r.jsx)("img",{className:"card-img-top ",src:i,alt:"Product image.",style:{objectFit:"cover"}})}),a]})}),(0,r.jsx)("div",{className:"card-body",children:(0,r.jsxs)("div",{className:"vstack gap-2",children:[(0,r.jsx)(c(),{legacyBehavior:!0,href:"/product/1",children:(0,r.jsx)("a",{className:"text-dark text-decoration-none",children:s})}),(0,r.jsx)("h6",{className:"fw-semibold",children:"".concat(t," ETB")}),(0,r.jsxs)("div",{className:"hstack gap-2",children:[(0,r.jsxs)("button",{className:"btn btn-secondary text-primary flex-grow-1 d-md-block d-lg-none",children:[(0,r.jsx)(n.G,{icon:["fas","cart-plus"]}),"\xa0Add to card"]}),(0,r.jsx)("button",{className:"btn btn-outline-secondary text-primary border d-md-block d-lg-none",children:(0,r.jsx)(n.G,{icon:["far","heart"]})}),(0,r.jsxs)("button",{onClick:()=>{b((0,u.H)({name:s,id:f,image:i,category:g,price:t,description:d,rating:l}))},className:"btn btn-sm btn-secondary text-primary flex-grow-1 d-none d-lg-block",children:[(0,r.jsx)(n.G,{icon:["fas","cart-plus"]}),"\xa0Add to card"]}),(0,r.jsx)("button",{className:"btn btn-sm btn-outline-secondary text-primary border d-none d-lg-block",children:(0,r.jsx)(n.G,{icon:["far","heart"]})})]})]})})]})},g=t(1358),f=t.n(g),b=function(){let[e,a]=(0,o.useState)([]),t=(0,o.useRef)(0),l=(0,i.useRouter)(),{search:c}=l.query;console.log(c),(0,o.useEffect)(()=>{t.current<2&&(s.Z.get("api/search?q=".concat(c)).then(e=>{a(e.data.products)}).catch(e=>{console.log(e.response.data)}),console.log("Effect executed"),t.current+=1)},[e,t]);let[p,u]=(0,o.useState)(0),g=12*p,b=e.slice(g,g+12).map(e=>(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(d,{id:e.productID,name:e.name,image:e.image,brand:e.brand,price:e.price,rating:e.rating,description:e.description,category:e.category},e.productID)},e.productID)),h=Math.ceil(e.length/12),m=e=>{let{selected:a}=e;u(a)};return(0,r.jsxs)("div",{className:"vstack",children:[(0,r.jsx)("div",{className:"bg-secondary",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row py-4 px-2",children:(0,r.jsx)("nav",{"aria-label":"breadcrumb col-12",children:(0,r.jsxs)("ol",{className:"breadcrumb mb-1",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)("a",{href:"#",children:"All Categories"})}),(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)("a",{href:"#",children:"Electronics"})}),(0,r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Phones & Tablets"})]})})})})}),(0,r.jsx)("div",{className:"container py-4",children:(0,r.jsx)("div",{className:"row g-3",children:(0,r.jsxs)("div",{className:"col-lg-9",children:[(0,r.jsxs)("div",{className:"hstack justify-content-between mb-3",children:[(0,r.jsxs)("span",{className:"text-dark",children:[e.length," Items found"]}),(0,r.jsxs)("div",{className:"btn-group",role:"group",children:[(0,r.jsx)("button",{className:"btn btn-outline-dark",children:(0,r.jsx)(n.G,{icon:["fas","sort-amount-up"]})}),(0,r.jsx)("button",{className:"btn btn-outline-dark",children:(0,r.jsx)(n.G,{icon:["fas","th-list"]})})]})]}),(0,r.jsx)("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3",children:b}),(0,r.jsx)(f(),{previousLabel:"Previous",nextLabel:"Next",pageCount:h,onPageChange:m,containerClassName:"pagination",previousClassName:"pagination__prev",nextClassName:"pagination__next",breakClassName:"pagination__break",pageClassName:"pagination__page",activeClassName:"pagination__page--active"})]})})})]})}},1358:function(e,a,t){var r;e.exports=(r=t(7294),(()=>{var e={703:(e,a,t)=>{"use strict";var r=t(414);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,s,i){if(i!==r){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:n};return t.PropTypes=t,t}},697:(e,a,t)=>{e.exports=t(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:e=>{"use strict";e.exports=r}},a={};function t(r){var n=a[r];if(void 0!==n)return n.exports;var s=a[r]={exports:{}};return e[r](s,s.exports,t),s.exports}t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";t.r(n),t.d(n,{default:()=>v});var e=t(98),a=t.n(e),r=t(697),s=t.n(r);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o=function(e){var t=e.pageClassName,r=e.pageLinkClassName,n=e.page,s=e.selected,o=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,f=e.rel,b=e.ariaLabel||"Page "+n+(d?" "+d:""),h=null;return s&&(h="page",b=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+o:o,void 0!==r?void 0!==l&&(r=r+" "+l):r=l),a().createElement("li",{className:t},a().createElement("a",i({rel:f,role:u?void 0:"button",className:r,href:u,tabIndex:s?"-1":"0","aria-label":b,"aria-current":h,onKeyPress:p},c(p)),g(n)))};function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}o.propTypes={pageSelectedHandler:s().func.isRequired,selected:s().bool.isRequired,pageClassName:s().string,pageLinkClassName:s().string,activeClassName:s().string,activeLinkClassName:s().string,extraAriaContext:s().string,href:s().string,ariaLabel:s().string,page:s().number.isRequired,getEventListener:s().func.isRequired,pageLabelBuilder:s().func.isRequired,rel:s().string};var c=function(e){var t=e.breakLabel,r=e.breakClassName,n=e.breakLinkClassName,s=e.breakHandler,i=e.getEventListener;return a().createElement("li",{className:r||"break"},a().createElement("a",l({className:n,role:"button",tabIndex:"0",onKeyPress:s},i(s)),t))};function p(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:a}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function g(e,a){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e})(e,a)}function f(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}c.propTypes={breakLabel:s().oneOfType([s().string,s().node]),breakClassName:s().string,breakLinkClassName:s().string,breakHandler:s().func.isRequired,getEventListener:s().func.isRequired};var m=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&g(e,a)}(s,e);var t,r,n=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=b(s);if(r){var t=b(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return function(e,a){if(a&&("object"===u(a)||"function"==typeof a))return a;if(void 0!==a)throw TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function s(e){var t,r;return function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,s),h(f(t=n.call(this,e)),"handlePreviousPage",function(e){var a=t.state.selected;t.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})}),h(f(t),"handleNextPage",function(e){var a=t.state.selected,r=t.props.pageCount;t.handleClick(e,null,a<r-1?a+1:void 0,{isNext:!0})}),h(f(t),"handlePageSelected",function(e,a){if(t.state.selected===e)return t.callActiveCallback(e),void t.handleClick(a,null,void 0,{isActive:!0});t.handleClick(a,null,e)}),h(f(t),"handlePageChange",function(e){t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))}),h(f(t),"getEventListener",function(e){return h({},t.props.eventListener,e)}),h(f(t),"handleClick",function(e,a,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=n.isPrevious,i=n.isNext,o=n.isBreak,l=n.isActive;e.preventDefault?e.preventDefault():e.returnValue=!1;var c=t.state.selected,p=t.props.onClick,u=r;if(p){var d=p({index:a,selected:c,nextSelectedPage:r,event:e,isPrevious:void 0!==s&&s,isNext:void 0!==i&&i,isBreak:void 0!==o&&o,isActive:void 0!==l&&l});if(!1===d)return;Number.isInteger(d)&&(u=d)}void 0!==u&&t.handlePageChange(u)}),h(f(t),"handleBreakClick",function(e,a){var r=t.state.selected;t.handleClick(a,e,r<e?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})}),h(f(t),"callCallback",function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})}),h(f(t),"callActiveCallback",function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})}),h(f(t),"getElementPageRel",function(e){var a=t.state.selected,r=t.props,n=r.nextPageRel,s=r.prevPageRel,i=r.selectedPageRel;return a-1===e?s:a===e?i:a+1===e?n:void 0}),h(f(t),"pagination",function(){var e=[],r=t.props,n=r.pageRangeDisplayed,s=r.pageCount,i=r.marginPagesDisplayed,o=r.breakLabel,l=r.breakClassName,p=r.breakLinkClassName,u=t.state.selected;if(s<=n)for(var d=0;d<s;d++)e.push(t.getPageElement(d));else{var g=n/2,f=n-g;u>s-n/2?g=n-(f=s-u):u<n/2&&(f=n-(g=u));var b,h,m=function(e){return t.getPageElement(e)},v=[];for(b=0;b<s;b++){var x=b+1;x<=i||x>s-i||b>=u-g&&b<=u+(0===u&&n>1?f-1:f)?v.push({type:"page",index:b,display:m(b)}):o&&v.length>0&&v[v.length-1].display!==h&&(n>0||i>0)&&(h=a().createElement(c,{key:b,breakLabel:o,breakClassName:l,breakLinkClassName:p,breakHandler:t.handleBreakClick.bind(null,b),getEventListener:t.getEventListener}),v.push({type:"break",index:b,display:h}))}v.forEach(function(a,t){var r=a;"break"===a.type&&v[t-1]&&"page"===v[t-1].type&&v[t+1]&&"page"===v[t+1].type&&v[t+1].index-v[t-1].index<=2&&(r={type:"page",index:a.index,display:m(a.index)}),e.push(r.display)})}return e}),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:r},t}return t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,s=e.forcePage;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==a&&a>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(n-1,").")),void 0!==s&&s>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(s," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount,n=a.hrefAllControls;if(t)return n||e>=0&&e<r?t(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var t=this.state.selected,r=this.props,n=r.pageClassName,s=r.pageLinkClassName,i=r.activeClassName,l=r.activeLinkClassName,c=r.extraAriaContext,p=r.pageLabelBuilder;return a().createElement(o,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:s,activeClassName:i,activeLinkClassName:l,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,r=t.disabledClassName,n=t.disabledLinkClassName,s=t.pageCount,i=t.className,o=t.containerClassName,l=t.previousLabel,c=t.previousClassName,u=t.previousLinkClassName,g=t.previousAriaLabel,f=t.prevRel,b=t.nextLabel,h=t.nextClassName,m=t.nextLinkClassName,v=t.nextAriaLabel,x=t.nextRel,y=this.state.selected,C=0===y,N=y===s-1,P="".concat(p(c)).concat(C?" ".concat(p(r)):""),k="".concat(p(h)).concat(N?" ".concat(p(r)):""),j="".concat(p(u)).concat(C?" ".concat(p(n)):""),L="".concat(p(m)).concat(N?" ".concat(p(n)):"");return a().createElement("ul",{className:i||o,role:"navigation","aria-label":"Pagination"},a().createElement("li",{className:P},a().createElement("a",d({className:j,href:this.getElementHref(y-1),tabIndex:C?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":C?"true":"false","aria-label":g,rel:f},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),a().createElement("li",{className:k},a().createElement("a",d({className:L,href:this.getElementHref(y+1),tabIndex:N?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":N?"true":"false","aria-label":v,rel:x},this.getEventListener(this.handleNextPage)),b)))}}],function(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(s.prototype,t),Object.defineProperty(s,"prototype",{writable:!1}),s}(e.Component);h(m,"propTypes",{pageCount:s().number.isRequired,pageRangeDisplayed:s().number,marginPagesDisplayed:s().number,previousLabel:s().node,previousAriaLabel:s().string,prevPageRel:s().string,prevRel:s().string,nextLabel:s().node,nextAriaLabel:s().string,nextPageRel:s().string,nextRel:s().string,breakLabel:s().oneOfType([s().string,s().node]),hrefBuilder:s().func,hrefAllControls:s().bool,onPageChange:s().func,onPageActive:s().func,onClick:s().func,initialPage:s().number,forcePage:s().number,disableInitialCallback:s().bool,containerClassName:s().string,className:s().string,pageClassName:s().string,pageLinkClassName:s().string,pageLabelBuilder:s().func,activeClassName:s().string,activeLinkClassName:s().string,previousClassName:s().string,nextClassName:s().string,previousLinkClassName:s().string,nextLinkClassName:s().string,disabledClassName:s().string,disabledLinkClassName:s().string,breakClassName:s().string,breakLinkClassName:s().string,extraAriaContext:s().string,ariaLabelBuilder:s().func,eventListener:s().string,renderOnZeroPageCount:s().func,selectedPageRel:s().string}),h(m,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});let v=m})(),n})())}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2807)}),_N_E=e.O()}]);