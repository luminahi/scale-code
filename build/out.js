(()=>{var E=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var y=E(()=>{var p=new Map,u=new Map,m=new Map,g=new Map,f=document.getElementById("acougue"),h=document.getElementById("frios"),w=document.getElementById("salgados"),I=document.getElementById("padaria");function r(e){let t=window.open("","","");t.document.writeln(`
    <html>
      <head>
        <title>Print</title>
        <link rel="stylesheet" href="./src/style.css">
      </head>
      <body>
      </body>
    </html>
  `);let o=t.document.body,n=document.createElement("div");n.className="page",e.forEach((s,c)=>{let i=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div");i.className="item",a.className="code",d.className="description",a.textContent=`${c}`,d.textContent=`${s}`,i.appendChild(a),i.appendChild(d),n.appendChild(i)}),o.appendChild(n),setTimeout(()=>t.print(),100)}window.addEventListener("DOMContentLoaded",()=>{document.getElementById("code-input").addEventListener("change",t=>{let o=t.target.files[0];if(!o)return;let n=new FileReader;n.addEventListener("load",s=>L(s.target.result)),n.readAsText(o)})});function l(e,t){e.forEach(o=>{let n=o.split(/\s{4,}/),s=Number.parseInt(n[0]),c=n[1];!isNaN(s)&&c&&s<=9999&&t.set(s,c)})}function L(e){if(typeof e=="string"){let t=e.search("ACOUGUE"),o=e.search("FRIOS E LATICINIOS"),n=e.search("SALGADOS"),s=e.search(/PADARIA\s{2,}/),c=e.substring(t,o).split(/\r?\n/),i=e.substring(o,n).split(/\r?\n/),a=e.substring(n,s).split(/\r?\n/),d=e.substring(s).split(/\r?\n/);l(c,p),l(i,u),l(a,m),l(d,g),f.addEventListener("click",()=>r(p)),h.addEventListener("click",()=>r(u)),w.addEventListener("click",()=>r(m)),I.addEventListener("click",()=>r(g))}}});y();})();
