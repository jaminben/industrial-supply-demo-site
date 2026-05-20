import { useEffect } from "react";

// Olark live-chat bootstrap. We inject Olark's exact official snippet as a real
// <script> element on mount so it executes natively in the browser — avoiding
// the React/Next inline-script serialization that breaks `olark.identify`.
const OLARK_SITE_ID = "3926-462-59-4735";

const olarkSnippet = `;(function(o,l,a,r,k,y){if(o.olark)return;
r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0];
y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r);
y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)};
y.extend=function(i,j){y("extend",i,j)};
y.identify=function(i){y("identify",k.i=i)};
y.configure=function(i,j){y("configure",i,j);k.c[i]=j};
k=y._={s:[],t:[+new Date],c:{},l:a};
})(window,document,"static.olark.com/jsclient/loader.js");
olark.identify('${OLARK_SITE_ID}');`;

declare global {
  interface Window {
    olark?: unknown;
  }
}

export function OlarkChat() {
  useEffect(() => {
    if (window.olark) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = olarkSnippet;
    document.body.appendChild(script);
  }, []);

  return null;
}
