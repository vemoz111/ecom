(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{3469:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/profile",function(){return a(7778)}])},2010:function(e,s,a){"use strict";var l=a(5893),r=a(1436),c=a(7814),i=a(1664),n=a.n(i);let d="p-2 my-list-item";s.Z=function(e){let{current:s}=e;return(0,l.jsxs)("div",{className:"card border-0 shadow-sm",children:[(0,l.jsx)("div",{className:"card-header",children:(0,l.jsx)("h4",{className:"mb-0 fw-semibold py-2",children:"Account"})}),(0,l.jsx)("div",{className:"card-body",children:(0,l.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,l.jsx)(n(),{legacyBehavior:!0,href:"/account/profile",children:(0,l.jsxs)("a",{className:d+("profile"==s?" active":""),children:[(0,l.jsx)(c.G,{icon:r.U6l,className:"me-2",fixedWidth:!0}),"My profile"]})}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/account/current-orders",children:(0,l.jsxs)("a",{className:d+("current-orders"==s?" active":""),children:[(0,l.jsx)(c.G,{icon:["fas","shopping-bag"],className:"me-2",fixedWidth:!0}),"Current orders"]})}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/account/order-history",children:(0,l.jsxs)("a",{className:d+("order-history"==s?" active":""),children:[(0,l.jsx)(c.G,{icon:["fas","truck"],className:"me-2",fixedWidth:!0}),"Orders history"]})}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/account/favorite-list",children:(0,l.jsxs)("a",{className:d+("favorite-list"==s?" active":""),children:[(0,l.jsx)(c.G,{icon:["fas","heart"],className:"me-2",fixedWidth:!0}),"My favorites"]})})]})})]})}},7778:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return u}});var l=a(5893),r=a(7814),c=a(7294),i=a(2010),n=function(){return(0,l.jsxs)("div",{className:"bg-background rounded px-3 py-2 d-flex gap-2 align-items-center",children:[(0,l.jsx)(r.G,{icon:["fas","map-marker-alt"],className:"text-muted",size:"lg"}),(0,l.jsx)("div",{className:"text-truncate",style:{maxHeight:44},children:(0,l.jsx)("p",{className:" mb-0 small text-wrap",children:"No. 33, Mocha Street, Milk Township Yangon, Myanmar No."})}),(0,l.jsx)("button",{className:"btn btn-sm px-1 ms-auto",children:(0,l.jsx)(r.G,{icon:["fas","ellipsis-v"],className:"text-muted"})})]})},d=a(2503),t=a(1664),o=a.n(t),m=a(1163),x=a(9566);function h(){let e=(0,m.useRouter)(),[s,a]=(0,c.useState)({});return(0,c.useEffect)(()=>{localStorage.getItem("token")?x.Z.get("api/users/profile").then(e=>{a(e.data)}):e.push({pathname:"/auth/login"})},[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"bg-secondary",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row py-4 px-2",children:(0,l.jsx)("nav",{"aria-label":"breadcrumb col-12",children:(0,l.jsxs)("ol",{className:"breadcrumb mb-1",children:[(0,l.jsxs)("li",{className:"breadcrumb-item",children:[(0,l.jsx)(o(),{href:"/",children:"Home"})," "]}),(0,l.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"My Profile"})]})})})})}),(0,l.jsx)("div",{className:"container py-4",children:(0,l.jsxs)("div",{className:"row g-3",children:[(0,l.jsx)("div",{className:"col-lg-3",children:(0,l.jsx)(i.Z,{current:"profile"})}),(0,l.jsx)("div",{className:"col-lg-9",children:(0,l.jsxs)("div",{className:"row g-3",children:[(0,l.jsxs)("div",{className:"col-lg-9",children:[(0,l.jsx)("div",{className:"card border-0 shadow-sm mb-3",children:(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("h4",{className:"card-title fw-semibold mt-2 mb-3",children:"Profile"}),(0,l.jsxs)("form",{className:"row g-3",children:[(0,l.jsxs)("div",{className:"col-md-6",children:[(0,l.jsx)("label",{className:"form-label",children:"Your first name"}),(0,l.jsx)("input",{value:s.firstname,onChange:e=>a({...s,firstname:e.target.value}),type:"text",className:"form-control"})]}),(0,l.jsxs)("div",{className:"col-md-6",children:[(0,l.jsx)("label",{className:"form-label",children:"Your last name"}),(0,l.jsx)("input",{value:s.lastname,onChange:e=>a({...s,lastname:e.target.value}),type:"text",className:"form-control"})]}),(0,l.jsxs)("div",{className:"col-md-6",children:[(0,l.jsx)("label",{className:"form-label",children:"Password"}),(0,l.jsx)("input",{value:"xxxxxxxxxx",type:"password",className:"form-control bg-light",disabled:!0}),(0,l.jsx)(o(),{href:"/auth/change-password",children:(0,l.jsx)("span",{className:"btn btn-sm btn-link float-end p-0 text-decoration-none",children:"Change password"})})]}),(0,l.jsxs)("div",{className:"col-md-12 mt-0",children:[(0,l.jsx)("label",{className:"form-label",children:"Phone"}),(0,l.jsxs)("div",{className:"input-group",children:[(0,l.jsx)("div",{children:(0,l.jsx)("select",{className:"form-select rounded-0 rounded-start bg-light",children:(0,l.jsx)("option",{children:"+251"})})}),(0,l.jsx)("input",{value:s.phoneNumber,onChange:e=>a({...s,phoneNumber:e.target.value}),type:"tel",className:"form-control"})]})]}),(0,l.jsxs)("div",{className:"col-md-12",children:[(0,l.jsx)("label",{className:"form-label",children:"Email"}),(0,l.jsx)("input",{value:s.email,type:"email",className:"form-control",onChange:e=>a({...s,email:e.target.value})})]}),(0,l.jsx)("div",{className:"col-md-12 mt-4",children:(0,l.jsx)("button",{className:"btn btn-primary float-end",children:"Update"})})]})]})}),(0,l.jsxs)("div",{className:"card border-0 shadow-sm",children:[(0,l.jsxs)("div",{className:"p-3 d-flex border-bottom",children:[(0,l.jsx)("h5",{className:"my-auto fw-semibold",children:"Addresses"}),(0,l.jsxs)("button",{className:"btn btn-sm btn-secondary text-primary ms-auto",children:[(0,l.jsx)(r.G,{icon:["fas","plus"]}),"\xa0Add new"]})]}),(0,l.jsx)("div",{className:"card-body",children:(0,l.jsxs)("div",{className:"row row-cols-1 row-cols-lg-2 g-3",children:[(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(n,{})}),(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(n,{})})]})})]})]}),(0,l.jsx)("div",{className:"col-lg-3"})]})})]})}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{})]})}h.getLayout=e=>(0,l.jsx)(d.Z,{simpleHeader:!0,children:e});var u=h}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3469)}),_N_E=e.O()}]);