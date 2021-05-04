var _global = typeof window === 'object' && window.window === window
? self : typeof global === 'object' && global.global === global
? global
: this 

function click (node) {
  try {
    node.dispatchEvent(new MouseEvent('click'))
  } catch (e) {
    var evt = document.createEvent('MouseEvents')
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null)
    node.dispatchEvent(evt)
  }
}

export var saveAs = _global.saveAs || (
  function saveAs (blob, name) {

    var URL = _global.URL 
    var a = document.createElement('a')
    name = name || blob.name || 'download'
    a.download = name
    a.rel = 'noopener' 
    //var URL = new URL();
    a.href = URL.createObjectURL(blob)
    click(a)
})
_global.saveAs = saveAs.saveAs = saveAs


export function File(relatorio, numberMilestone){
  // DOWNLOAD DO RELATÓRIO DE DESENVOLVIMENTO APÓS FECHAR MILESTONE
    var blob = new Blob([relatorio], {type: "text/plain;charset=utf-8"});
    saveAs(blob, `metricas_milestone${numberMilestone}.md`);  
  }