(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(t,e,n){"use strict";n.r(e);var r=n(2),i=n(3);const o=r.b.new();let l=o.width(),s=o.height();const a=()=>{const t=o.cells();return new Uint8Array(i.b.buffer,t,l*s)};let c=a();const d=document.getElementById("game-of-life-canvas");d.height=11*s+1,d.width=11*l+1;const f=document.getElementById("play-pause"),h=document.getElementById("reset"),u=document.getElementById("kill"),m=document.getElementById("speed"),p=document.getElementById("fpsbtn"),g=document.getElementById("fps");let w=1;const b=d.getContext("2d"),y=(t,e)=>t*l+e,v=()=>{b.beginPath(),b.fillStyle="#000000";for(let t=0;t<s;t++)for(let e=0;e<l;e++){const n=y(t,e);c[n]===r.a.Alive&&b.fillRect(11*e+1,11*t+1,10,10)}b.fillStyle="#FFFFFF";for(let t=0;t<s;t++)for(let e=0;e<l;e++){const n=y(t,e);c[n]===r.a.Dead&&b.fillRect(11*e+1,11*t+1,10,10)}b.stroke()};let k=null;const E=()=>{f.textContent="Pause",F()},M=()=>{f.textContent="Play",cancelAnimationFrame(k),k=null,v()};f.addEventListener("click",t=>{null===k?E():M()});const x=new class{constructor(){this.fps=document.getElementById("fps"),this.frames=[],this.lastFrameTimeStamp=performance.now()}render(){const t=performance.now(),e=t-this.lastFrameTimeStamp;this.lastFrameTimeStamp=t;const n=1/e*1e3;this.frames.push(n),this.frames.length>100&&this.frames.shift();let r=1/0,i=-1/0,o=0;for(let t=0;t<this.frames.length;t++)o+=this.frames[t],r=Math.min(this.frames[t],r),i=Math.max(this.frames[t],i);let l=o/this.frames.length;this.fps.textContent=`\nFrames per Second:\n         latest = ${Math.round(n)}\navg of last 100 = ${Math.round(l)}\nmin of last 100 = ${Math.round(r)}\nmax of last 100 = ${Math.round(i)}\n`.trim()}},F=()=>{x.render(),v();for(let t=0;t<w;t++)o.tick();k=requestAnimationFrame(F)};d.addEventListener("click",t=>{M();const e=d.getBoundingClientRect(),n=d.width/e.width,r=d.height/e.height,i=(t.clientX-e.left)*n,a=(t.clientY-e.top)*r,c=Math.min(Math.floor(a/11),s-1),f=Math.min(Math.floor(i/11),l-1);o.toggle_cell(c,f),v()}),h.addEventListener("click",t=>{o.reset_state(),v(),c=a()}),u.addEventListener("click",t=>{o.kill_cells(),c=a(),v(),setTimeout(M,100)}),m.addEventListener("input",t=>{w=t.target.value}),p.addEventListener("click",t=>{g.classList.toggle("hidden")}),(()=>{b.beginPath(),b.strokeStyle="#CCCCCC";for(let t=0;t<=l;t++)b.moveTo(11*t+1,0),b.lineTo(11*t+1,11*s+1);for(let t=0;t<=s;t++)b.moveTo(0,11*t+1),b.lineTo(11*l+1,11*t+1);b.stroke()})(),E()},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return f}));var r=n(3);let i=new("undefined"==typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let o=null;function l(t,e){return i.decode((null!==o&&o.buffer===r.b.buffer||(o=new Uint8Array(r.b.buffer)),o).subarray(t,t+e))}const s=Object.freeze({Dead:0,0:"Dead",Alive:1,1:"Alive"});class a{static __wrap(t){const e=Object.create(a.prototype);return e.ptr=t,e}free(){const t=this.ptr;this.ptr=0,r.a(t)}tick(){r.j(this.ptr)}toggle_cell(t,e){r.k(this.ptr,t,e)}static new(){var t=r.f();return a.__wrap(t)}reset_state(){r.g(this.ptr)}width(){return r.l(this.ptr)>>>0}height(){return r.d(this.ptr)>>>0}cells(){return r.c(this.ptr)}set_width(t){r.i(this.ptr,t)}set_height(t){r.h(this.ptr,t)}kill_cells(){r.e(this.ptr)}}const c="function"==typeof Math.random?Math.random:(d="Math.random",()=>{throw new Error(d+" is not defined")});var d;const f=function(t,e){throw new Error(l(t,e))}}).call(this,n(4)(t))},function(t,e,n){"use strict";var r=n.w[t.i];t.exports=r;n(2);r.m()},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}}]]);
//# sourceMappingURL=1.bootstrap.js.map