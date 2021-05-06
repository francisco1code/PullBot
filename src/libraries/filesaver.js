var _global = typeof window === 'object' && window.window === window
? self : typeof global === 'object' && global.global === global
? global
: this 

function click (node) {
  try {
    node.dispatchEvent(new MouseEvent('click'))
  } catch (e) {}
}

function saveAs (blob, name) {
    var URL = _global.URL 
    var a = document.createElement('a')
    name = name || blob.name || 'download'
    a.download = name
    a.rel = 'noopener'
    a.href = URL.createObjectURL(blob)
    click(a)
}


export function File(relatorio, numberMilestone){
  // DOWNLOAD DO RELATÓRIO DE DESENVOLVIMENTO APÓS FECHAR MILESTONE
    var blob = new Blob([relatorio], {type: "text/plain;charset=utf-8"});
    saveAs(blob, `metricas_milestone${numberMilestone}.md`);  
  }