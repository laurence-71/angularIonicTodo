(self.webpackChunkangular_ionic_todo=self.webpackChunkangular_ionic_todo||[]).push([[5174],{5174:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ion_route:()=>a,ion_route_redirect:()=>h,ion_router:()=>N,ion_router_link:()=>O});var o=n(3150),r=n(2377),i=n(7585),s=n(1269);const a=class{constructor(t){(0,o.r)(this,t),this.ionRouteDataChanged=(0,o.e)(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],o=e?Object.keys(e):[];if(n.length===o.length){for(const r of n)if(t[r]!==e[r])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},h=class{constructor(t){(0,o.r)(this,t),this.ionRouteRedirectChanged=(0,o.e)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},c="root",l="forward",u=t=>"/"+t.filter(t=>t.length>0).join("/"),d=t=>{let e,n=[""];if(null!=t){const o=t.indexOf("?");o>-1&&(e=t.substr(o+1),t=t.substr(0,o)),n=t.split("/").map(t=>t.trim()).filter(t=>t.length>0),0===n.length&&(n=[""])}return{segments:n,queryString:e}},f=async(t,e,n,o,i=!1,s)=>{try{const a=p(t);if(o>=e.length||!a)return i;await new Promise(t=>(0,r.c)(a,t));const h=e[o],l=await a.setRouteId(h.id,h.params,n,s);return l.changed&&(n=c,i=!0),i=await f(l.element,e,n,o+1,i,s),l.markVisible&&await l.markVisible(),i}catch(a){return console.error(a),!1}},g=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",p=t=>{if(!t)return;if(t.matches(g))return t;const e=t.querySelector(g);return null!=e?e:void 0},m=(t,e)=>e.find(e=>((t,e)=>{const{from:n,to:o}=e;if(void 0===o)return!1;if(n.length>t.length)return!1;for(let r=0;r<n.length;r++){const e=n[r];if("*"===e)return!0;if(e!==t[r])return!1}return n.length===t.length})(t,e)),w=(t,e)=>{const n=Math.min(t.length,e.length);let o=0;for(;o<n&&t[o].toLowerCase()===e[o].id;o++);return o},b=(t,e)=>{const n=new C(t);let o,r=!1;for(let i=0;i<e.length;i++){const t=e[i].path;if(""===t[0])r=!0;else{for(const e of t){const t=n.next();if(":"===e[0]){if(""===t)return null;o=o||[],(o[i]||(o[i]={}))[e.slice(1)]=t}else if(t!==e)return null}r=!1}}return r&&r!==(""===n.next())?null:o?e.map((t,e)=>({id:t.id,path:t.path,params:v(t.params,o[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave})):e},v=(t,e)=>t||e?Object.assign(Object.assign({},t),e):void 0,y=(t,e)=>{let n=null,o=0;for(const r of e){const e=b(t,r);if(null!==e){const t=R(e);t>o&&(o=t,n=e)}}return n},R=t=>{let e=1,n=1;for(const o of t)for(const t of o.path)":"===t[0]?e+=Math.pow(1,n):""!==t&&(e+=Math.pow(2,n)),n++;return e};class C{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const P=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,k=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=P(t,"to");return{from:d(P(t,"from")).segments,to:null==e?void 0:d(e)}}),S=t=>D(E(t)),E=t=>Array.from(t.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(t=>{const e=P(t,"component");return{path:d(P(t,"url")).segments,id:e.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:E(t)}}),D=t=>{const e=[];for(const n of t)L([],e,n);return e},L=(t,e,n)=>{if((t=t.slice()).push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length)for(const o of n.children)L(t,e,o);else e.push(t)},N=class{constructor(t){(0,o.r)(this,t),this.ionRouteWillChange=(0,o.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,o.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){await(p(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})}));const t=await this.runGuards(this.getPath());if(!0!==t){if("object"==typeof t){const{redirect:e}=t,n=d(e);this.setPath(n.segments,c,n.queryString),await this.writeNavStateRoot(n.segments,c)}}else await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",(0,r.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,r.n)(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let e=this.getPath();const n=await this.runGuards(e);if(!0!==n){if("object"!=typeof n)return!1;e=d(n.redirect).segments}return this.writeNavStateRoot(e,t)}onBackButton(t){t.detail.register(0,t=>{this.back(),t()})}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,e="forward",n){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname);let o=d(t);const r=await this.runGuards(o.segments);if(!0!==r){if("object"!=typeof r)return!1;o=d(r.redirect)}return this.setPath(o.segments,e,o.queryString),this.writeNavStateRoot(o.segments,e,n)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const n=e.map(t=>t.id);console.debug(`%c ${u(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${n.join(", ")})`)}console.groupEnd()})(S(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ",`$c ${u(e.from)}`,"font-weight: bold"," TO: ",`$c ${u(e.to.segments)}`,"font-weight: bold");console.groupEnd()})(k(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:n}=await(async t=>{const e=[];let n,o=window.document.body;for(;n=p(o),n;){const t=await n.getRouteId();if(!t)break;o=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:n}})(),o=((t,e)=>{let n=null,o=0;const r=t.map(t=>t.id);for(const i of e){const t=w(r,i);t>o&&(n=i,o=t)}return n?n.map((e,n)=>({id:e.id,path:e.path,params:v(e.params,t[n]&&t[n].params)})):null})(e,S(this.el));if(!o)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const r=(t=>{const e=[];for(const n of t)for(const t of n.path)if(":"===t[0]){const o=n.params&&n.params[t.slice(1)];if(!o)return null;e.push(o)}else""!==t&&e.push(t);return e})(o);return r?(this.setPath(r,t),await this.safeWriteNavState(n,o,c,r,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&m(t,k(this.el))&&this.writeNavStateRoot(t,c)}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),c)}historyDirection(){var t;const e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,null===(t=e.document.location)||void 0===t?void 0:t.href));const n=e.history.state,o=this.lastState;return this.lastState=n,n>o||n>=o&&o>0?l:n<o?"back":c}async writeNavStateRoot(t,e,n){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const o=k(this.el),r=m(t,o);let i=null;if(r){const{segments:n,queryString:o}=r.to;this.setPath(n,e,o),i=r.from,t=n}const s=S(this.el),a=y(t,s);return a?this.safeWriteNavState(document.body,a,e,t,i,0,n):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,n,o,r,i=0,s){const a=await this.lock();let h=!1;try{h=await this.writeNavState(t,e,n,o,r,i,s)}catch(c){console.error(c)}return a(),h}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}async runGuards(t=this.getPath(),e){if(void 0===e&&(e=d(this.previousPath).segments),!t||!e)return!0;const n=S(this.el),o=y(e,n),r=o&&o[o.length-1].beforeLeave,i=!r||await r();if(!1===i||"object"==typeof i)return i;const s=y(t,n),a=s&&s[s.length-1].beforeEnter;return!a||a()}async writeNavState(t,e,n,o,r,i=0,s){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const a=this.routeChangeEvent(o,r);a&&this.ionRouteWillChange.emit(a);const h=await f(t,e,n,i,!1,s);return this.busy=!1,a&&this.ionRouteDidChange.emit(a),h}setPath(t,e,n){this.state++,((t,e,n,o,r,i,s)=>{const a=((t,e,n)=>{let o=u(t);return e&&(o="#"+o),void 0!==n&&(o+="?"+n),o})([...d(this.root).segments,...o],n,s);r===l?t.pushState(i,"",a):t.replaceState(i,"",a)})(window.history,0,this.useHash,t,e,this.state,n)}getPath(){return((t,e,n)=>{const o=d(this.root).segments,r=n?t.hash.slice(1):t.pathname;return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)})(o,d(r).segments)})(window.location,0,this.useHash)}routeChangeEvent(t,e){const n=this.previousPath,o=u(t);return this.previousPath=o,o===n?null:{from:n,redirectedFrom:e?u(e):null,to:o}}get el(){return(0,o.i)(this)}},O=class{constructor(t){(0,o.r)(this,t),this.routerDirection="forward",this.onClick=t=>{(0,s.o)(this.href,t,this.routerDirection,this.routerAnimation)}}render(){const t=(0,i.b)(this),e={href:this.href,rel:this.rel,target:this.target};return(0,o.h)(o.H,{onClick:this.onClick,class:(0,s.c)(this.color,{[t]:!0,"ion-activatable":!0})},(0,o.h)("a",Object.assign({},e),(0,o.h)("slot",null)))}};O.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]);