(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/script.js
  var require_script = __commonJS({
    "src/script.js"() {
      var acougueMap = /* @__PURE__ */ new Map();
      var friosMap = /* @__PURE__ */ new Map();
      var salgadosMap = /* @__PURE__ */ new Map();
      var padariaMap = /* @__PURE__ */ new Map();
      var acougueBtn = document.getElementById("acougue");
      var friosBtn = document.getElementById("frios");
      var salgadosBtn = document.getElementById("salgados");
      var padariaBtn = document.getElementById("padaria");
      function printInNewWindow(sectionMap, section) {
        const newWindow = window.open("", "", "");
        newWindow.document.writeln(`
    <html>
      <head>
        <title>Print</title>
        <link rel="stylesheet" href="./src/style.css">
      </head>
      <body>
        <h2>${section}</h2>
      </body>
    </html>
  `);
        const newBody = newWindow.document.body;
        const page = document.createElement("div");
        page.className = "page";
        sectionMap.forEach((value, key) => {
          const item = document.createElement("div");
          const codeCell = document.createElement("div");
          const descriptionCell = document.createElement("div");
          item.className = "item";
          codeCell.className = "code";
          descriptionCell.className = "description";
          codeCell.textContent = `${key}`;
          descriptionCell.textContent = `${value}`;
          item.appendChild(codeCell);
          item.appendChild(descriptionCell);
          page.appendChild(item);
        });
        newBody.appendChild(page);
        setTimeout(() => newWindow.print(), 100);
      }
      window.addEventListener("DOMContentLoaded", () => {
        const codeInput = document.getElementById("code-input");
        codeInput.addEventListener("change", (e) => {
          const file = e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.addEventListener("load", (e2) => parseData(e2.target.result));
          reader.readAsText(file);
        });
      });
      function setSection(rawLines, sectionMap) {
        rawLines.forEach((rawLine) => {
          const line = rawLine.split(/\s{4,}/);
          const productId = Number.parseInt(line[0]);
          const productDescription = line[1];
          if (!isNaN(productId) && productDescription && productId <= 9999) {
            sectionMap.set(productId, productDescription);
          }
        });
      }
      function parseData(data) {
        if (typeof data === "string") {
          const acougueStart = data.search("ACOUGUE");
          const friosStart = data.search("FRIOS E LATICINIOS");
          const salgadosStart = data.search("SALGADOS");
          const padariaStart = data.search(/PADARIA\s{2,}/);
          const acougueLines = data.substring(acougueStart, friosStart).split(/\r?\n/);
          const friosLines = data.substring(friosStart, salgadosStart).split(/\r?\n/);
          const salgadosLines = data.substring(salgadosStart, padariaStart).split(/\r?\n/);
          const padariaLines = data.substring(padariaStart).split(/\r?\n/);
          setSection(acougueLines, acougueMap);
          setSection(friosLines, friosMap);
          setSection(salgadosLines, salgadosMap);
          setSection(padariaLines, padariaMap);
          acougueBtn.addEventListener(
            "click",
            () => printInNewWindow(acougueMap, "A\xE7ougue")
          );
          friosBtn.addEventListener(
            "click",
            () => printInNewWindow(friosMap, "Latic\xEDnios")
          );
          salgadosBtn.addEventListener(
            "click",
            () => printInNewWindow(salgadosMap, "Salgados")
          );
          padariaBtn.addEventListener(
            "click",
            () => printInNewWindow(padariaMap, "Padaria")
          );
        }
      }
    }
  });
  require_script();
})();
