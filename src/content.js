//DEFININDO INDEX.JS COMO UM MÓDULO PARA FAZER IMPORTAÇÕES
const script = document.createElement('script');
    script.setAttribute("type", "module");
    script.setAttribute("src", chrome.runtime.getURL('index.js'));
    const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
    head.insertBefore(script, head.lastChild);

const scriptFileSaver = document.createElement('script');
    scriptFileSaver.setAttribute("type", "module");
    scriptFileSaver.setAttribute("src", chrome.runtime.getURL('FileSaver.js'));
    head.insertBefore(scriptFileSaver, head.lastChild);    