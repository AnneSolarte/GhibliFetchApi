(()=>{"use strict";var t={623:(t,e,n)=>{n.d(e,{A:()=>c});var o=n(601),r=n.n(o),i=n(314),a=n.n(i)()(r());a.push([t.id,"body{\n\tfont-family: 'Satoshi', sans-serif;\n\tbackground-color: rgb(136, 136, 136);\n\twidth: 100%;\n\theight: max-content;\n\tmargin-left: 5%\n}\n\n.favorite-button{\n\tdisplay:flex;\n\tmargin:0;\n\tmargin-top: 2rem;\n}",""]);const c=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=r(h,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=o(t,r),l=0;l<i.length;l++){var d=n(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t;!function(t){t.uid="uid",t.tittle="tittle",t.originaltitle="originaltitle",t.releasedate="releasedate",t.description="description",t.director="director",t.img="img",t.people="people"}(t||(t={}));class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.mount()}mount(){this.render()}static get observedAttributes(){return Object.keys({uid:null,tittle:null,img:null,originaltitle:null,releasedate:null,description:null,director:null,people:null})}attributeChangedCallback(t,e,n){this[t]=n,this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="",this.shadowRoot&&(this.shadowRoot.innerHTML="\n                    <style>\n                    \n                    \n                    section{\n                        display: flex;\n                        flex-direction: column;\n                        width: 20rem;\n                        margin-top: 2rem;\n                        background-color: rgb(255, 255, 255);\n                        padding: 2rem;\n                        justify-content: center;\n                        align-items: center;\n                        border-radius: 0.5rem;\n                    }\n                    \n                    img{\n                        width: 10rem;\n                    }\n                    h1, h2{\n                        margin: 0;\n                    }\n                    </style>");const t=this.ownerDocument.createElement("section");t.className="film-section";const e=this.ownerDocument.createElement("h1");e.textContent=this.tittle||"No hay Title",t.appendChild(e);const n=this.ownerDocument.createElement("img");n.src=this.img||"",n.alt="Film Image",t.appendChild(n);const o=this.ownerDocument.createElement("h2");o.textContent=this.originaltitle||"No Original Title",t.appendChild(o);const r=this.ownerDocument.createElement("h2");r.textContent=this.releasedate||"No Release Date",t.appendChild(r);const i=this.ownerDocument.createElement("p");i.textContent=this.description||"No Description",t.appendChild(i);const a=this.ownerDocument.createElement("p");a.textContent=this.director||"No Director",t.appendChild(a);const c=this.ownerDocument.createElement("button");c.textContent="Show People",c.addEventListener("click",(()=>{return t=this,e=void 0,o=function*(){var t,e,n,o,r,i;if(this.people){const a=yield(e=this.people,n=void 0,o=void 0,r=void 0,i=function*(){try{const t=yield fetch(`https://ghibliapi.vercel.app/people/${e}`).then((t=>t.json()));return console.log(t),t}catch(t){return console.log("error",t),t}},new(r||(r=Promise))((function(t,e){function a(t){try{s(i.next(t))}catch(t){e(t)}}function c(t){try{s(i.throw(t))}catch(t){e(t)}}function s(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(a,c)}s((i=i.apply(n,o||[])).next())}))),c=this.ownerDocument.createElement("p");c.textContent=a.name,null===(t=this.shadowRoot)||void 0===t||t.appendChild(c)}},new((n=void 0)||(n=Promise))((function(r,i){function a(t){try{s(o.next(t))}catch(t){i(t)}}function c(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((o=o.apply(t,e||[])).next())}));var t,e,n,o})),t.appendChild(c),this.shadowRoot.appendChild(t)}}}customElements.define("film-card",e);var o=n(72),r=n.n(o),i=n(825),a=n.n(i),c=n(659),s=n.n(c),l=n(56),d=n.n(l),u=n(540),p=n.n(u),h=n(113),f=n.n(h),m=n(623),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),r()(m.A,v);const y=m.A&&m.A.locals?m.A.locals:void 0;class g extends HTMLElement{constructor(){super(),this.FavoriteFilms=[],this.attachShadow({mode:"open"})}connectedCallback(){return t=this,e=void 0,o=function*(){const t=yield(e=void 0,n=void 0,o=void 0,r=function*(){try{const t=yield fetch("https://ghibliapi.vercel.app/films").then((t=>t.json()));return console.log(t),t}catch(t){return console.log("error",t),t}},new(o||(o=Promise))((function(t,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function c(t){try{s(r.throw(t))}catch(t){i(t)}}function s(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())})));var e,n,o,r;this.render(t)},new((n=void 0)||(n=Promise))((function(r,i){function a(t){try{s(o.next(t))}catch(t){i(t)}}function c(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((o=o.apply(t,e||[])).next())}));var t,e,n,o}render(e){var n,o,r;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <style>\n                ${y}\n\n\t\t\t\t\n                </style>`);const i=this.ownerDocument.createElement("section"),a=this.ownerDocument.createElement("section");e.forEach((e=>{const n=this.ownerDocument.createElement("film-card");n.setAttribute(t.tittle,e.title),n.setAttribute(t.img,e.image),n.setAttribute(t.originaltitle,e.original_title),n.setAttribute(t.releasedate,e.release_date),n.setAttribute(t.description,e.description),n.setAttribute(t.director,e.director),n.setAttribute(t.people,e.people[0]),console.log(e.people);const o=this.ownerDocument.createElement("button");o.className="favorite-button",o.textContent="AddFavorite",o.addEventListener("click",(()=>{const n=this.ownerDocument.createElement("film-card");n.setAttribute(t.tittle,e.title),n.setAttribute(t.img,e.image),a.appendChild(n)})),i.appendChild(n),i.appendChild(o)})),null===(n=this.shadowRoot)||void 0===n||n.appendChild(i);const c=this.ownerDocument.createElement("h2");c.textContent="FAVORITES",null===(o=this.shadowRoot)||void 0===o||o.appendChild(c),null===(r=this.shadowRoot)||void 0===r||r.appendChild(a)}}customElements.define("app-container",g)})()})();