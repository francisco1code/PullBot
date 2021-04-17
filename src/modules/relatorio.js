// CONSTRUINDO RELATÓRIO DE DESENVOLVIMENTO

export function criarRelatorio(){
  
    var xhr = new XMLHttpRequest();
    
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        var recebeContribuintes = JSON.parse(this.responseText);
        montarRelatorio(recebeContribuintes);
  
    }});
    
    xhr.open("GET", "https://api.github.com/repos/fga-eps-mds/PullBot/contributors");
    xhr.send();
}

function montarRelatorio(contribuintes) {

    var relatorio = `# Relatorio de Desenvolvimento \n## 1. Commits \n| | Contribuinte | Quantidade de commits \n|:-:|:-:|:-:| \n`;

// COMMITS
    for(var i = 0; i < 7; i++) {
        relatorio += `| ${i+1} | ${contribuintes[i].login} |  | \n`;
    }

    relatorio += `| Total |  |  | \n`;

    relatorio += `## 2. Issues \nContribuinte | Issues abertas | Issues fechadas \n|:-:|:-:|:-:| \n`;

// ISSUES
    for(i = 0; i < 7; i++) {
        relatorio += `| ${contribuintes[i].login} |  |  | \n`;
    }

    relatorio += `| Total |  |  | \n`;
    relatorio += `## 3. Pull Requests \nContribuinte | Pull Requests abertos | Pull Requests fechados \n|:-:|:-:|:-:| \n`;

// PULL REQUESTS
for(i = 0; i < 7; i++) {
    relatorio += `| ${contribuintes[i].login} |  |  | \n`;
}

relatorio += `| Total |  |  | \n`;

console.log(relatorio);
}