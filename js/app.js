(()=>{var t,e={641:(t,e,r)=>{"use strict";r(773),r(824),r(887)},773:()=>{var t=document.querySelector("[data-toggle]"),e=t.getAttribute("aria-controls"),r=document.querySelector("#".concat(e));t.addEventListener("click",(function(t){"true"===this.getAttribute("aria-expanded")?this.setAttribute("aria-expanded","false"):this.setAttribute("aria-expanded","true"),this.classList.toggle("active"),r.classList.toggle("show")}))},887:()=>{document.querySelector(".js-list").addEventListener("click",(function(t){"BUTTON"==t.target.tagName&&(!function(t){if(!navigator.clipboard)return void function(t){var e=document.createElement("textarea");e.value=t,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{var r=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+r)}catch(t){console.error("Fallback: Oops, unable to copy",t)}document.body.removeChild(e)}(t);navigator.clipboard.writeText(t).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(t){console.error("Async: Could not copy text: ",t)}))}(t.target.previousElementSibling.textContent),document.querySelectorAll(".js-copy-btn").forEach((function(t){t.textContent="Copy",t.classList.remove("btn-primary"),t.classList.remove("btn-secondary"),t.classList.add("btn-primary")})),t.target.textContent="Copied!",t.target.classList.remove("btn-primary"),t.target.classList.add("btn-secondary"))}))},824:()=>{var t=document.querySelector(".js-form"),e=document.querySelector(".form-msg"),r=JSON.parse(localStorage.getItem("links"));function n(t){var n,a,i;t.preventDefault(),a=t.target.shorten.value,(i=document.createElement("input")).type="url",i.required=!0,i.value=a,("function"==typeof i.checkValidity?i.checkValidity():/\S+@\S+\.\S+/.test(a))?(event.target.shorten.setAttribute("aria-invalid","false"),e.style.display="none",n=t.target.shorten.value,fetch("https://api.shrtco.de/v2/shorten?url=".concat(n)).then((function(t){return t.json()})).then((function(t){var e=t.result.original_link,n=t.result.full_short_link3;o(e,n),function(t,e){null===r&&(r=[]),r.push({originalLink:t,shortLink:e}),localStorage.setItem("links",JSON.stringify(r))}(e,n)})),t.target.shorten.value="",t.target.shorten.focus()):(event.target.shorten.setAttribute("aria-invalid","true"),e.style.display="block")}function o(t,e){var r='<div class="url-list__item">\n                        <div class="url-list__item-head">\n                          <a href="'.concat(t,'" target="_blank" rel="noreferrer nofollow">').concat(t,'</a>\n                        </div>\n                        <div class="url-list__item-body">\n                          <a href="').concat(e,'" target="_blank" rel="noreferrer nofollow">').concat(e,'</a>\n                          <button type="button" class="btn btn-primary url-list__botton js-copy-btn">Copy</button>\n                        </div>\n                      </div>');document.querySelector(".js-url-list").insertAdjacentHTML("beforeend",r)}document.addEventListener("DOMContentLoaded",(function(){t.addEventListener("submit",n),null!==r&&r.forEach((function(t){o(t.originalLink,t.shortLink)}))}))},646:()=>{}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,t=[],n.O=(e,r,o,a)=>{if(!r){var i=1/0;for(u=0;u<t.length;u++){for(var[r,o,a]=t[u],s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((t=>n.O[t](r[l])))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,o,a]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={773:0,170:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,a,[i,s,l]=r,c=0;if(i.some((e=>0!==t[e]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(e&&e(r);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[i[c]]=0;return n.O(u)},r=self.webpackChunkurl_shortening_api_master=self.webpackChunkurl_shortening_api_master||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),n.O(void 0,[170],(()=>n(641)));var o=n.O(void 0,[170],(()=>n(646)));o=n.O(o)})();