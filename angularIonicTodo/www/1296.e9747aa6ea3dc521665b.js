(self.webpackChunkangular_ionic_todo=self.webpackChunkangular_ionic_todo||[]).push([[1296],{1296:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>D,keyboardDidClose:()=>w,keyboardDidOpen:()=>b,keyboardDidResize:()=>l,resetKeyboardAssist:()=>r,setKeyboardClose:()=>c,setKeyboardOpen:()=>g,startKeyboardAssist:()=>h,trackViewportChanges:()=>y});const o="ionKeyboardDidShow",s="ionKeyboardDidHide";let a={},d={},n=!1;const r=()=>{a={},d={},n=!1},h=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{y(e),b()||l(e)?g(e):w(e)&&c(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>g(e,t)),e.addEventListener("keyboardDidHide",()=>c(e))},g=(e,t)=>{u(e,t),n=!0},c=e=>{f(e),n=!1},b=()=>!n&&a.width===d.width&&(a.height-d.height)*d.scale>150,l=e=>n&&!w(e),w=e=>n&&d.height===e.innerHeight,u=(e,t)=>{const i=new CustomEvent(o,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},f=e=>{const t=new CustomEvent(s);e.dispatchEvent(t)},y=e=>{a=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);