// CONSTRUINDO RELATÓRIO DE DESENVOLVIMENTO

export function criarRelatorio(){
  
    var xhr = new XMLHttpRequest();
    const owner = localStorage.getItem('owner');
    const repo = localStorage.getItem('repo');

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        var contribuintes = JSON.parse(this.responseText);
        montarRelatorio(contribuintes);
  
    }});
    
    xhr.open("GET", `https://api.github.com/repos/${owner}/${repo}/contributors`);
    xhr.send();
}

function montarRelatorio(contribuintes) {

    const milestoneName = localStorage.getItem('milestoneName');
    var relatorio = `# Relatorio de desenvolvimento da milestone: ${milestoneName} \n## 1. Ranking de Contribuições \n| | Contribuinte | Quantidade de Contribuições \n|:-:|:-:|:-:| \n`;

// CONTRIBUIÇÕES
    var totalContribuicoes = 0;
    for(var i = 0; i < contribuintes.length; i++) {
        relatorio += `| ${i+1}º | ${contribuintes[i].login} | ${contribuintes[i].contributions} | \n`;
        totalContribuicoes += contribuintes[i].contributions;
    }

    relatorio += `|  | Total | ${totalContribuicoes} | \n`;
    relatorio += `## 2. Commits \n| Contribuinte | Quantidade de Commits | \n|:-:|:-:| \n`;
    
// COMMITS
    for(i = 0; i < contribuintes.length; i++) {
        relatorio += `| ${contribuintes[i].login} |  | \n`;
    }

relatorio += `| Total |  |  | \n`;


    relatorio += `## 3. Issues \n| Contribuinte | Issues abertas | Issues fechadas \n|:-:|:-:|:-:| \n`;

// ISSUES
    for(i = 0; i < contribuintes.length; i++) {
        relatorio += `| ${contribuintes[i].login} |  |  | \n`;
    }

    relatorio += `| Total |  |  | \n`;
    relatorio += `## 4. Pull Requests \n| Contribuinte | Pull Requests abertos | Pull Requests fechados \n|:-:|:-:|:-:| \n`;

// PULL REQUESTS
for(i = 0; i < contribuintes.length; i++) {
    relatorio += `| ${contribuintes[i].login} |  |  | \n`;
}

relatorio += `| Total |  |  | \n`;

console.log(relatorio);
}

