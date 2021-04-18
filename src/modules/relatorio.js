// CONSTRUINDO RELATÓRIO DE DESENVOLVIMENTO

export function criarRelatorio() {
    var xhr = new XMLHttpRequest();
    const owner = localStorage.getItem('owner');
    const repo = localStorage.getItem('repo');
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        var contribuintes = JSON.parse(this.responseText);
        getCommits(contribuintes);
    }});
    
    xhr.open("GET", `https://api.github.com/repos/${owner}/${repo}/contributors`);
    xhr.send();
  
  }

function getCommits(contribuintes) {
    var xhr = new XMLHttpRequest();
    const owner = localStorage.getItem('owner');
    const repo = localStorage.getItem('repo');
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        var commits = JSON.parse(this.responseText)
        relatorio(contribuintes,commits);
  
    }});
    
    xhr.open("GET", `https://api.github.com/repos/${owner}/${repo}/stats/contributors`);
    xhr.send();
}


function relatorio(contribuintes, commits){
    
    const milestoneName = localStorage.getItem('milestoneName');
    var relatorio = `# Relatorio de desenvolvimento da milestone: ${milestoneName} \n\n## 1. Ranking de contribuições total  \n| | Contribuinte | Quantidade de Contribuições \n|:-:|:-:|:-:| \n`;

// CONTRIBUIÇÕES
    var totalContribuicoes = 0;
    for(var i = 0; i < contribuintes.length; i++) {
        relatorio += `| ${i+1}º | ${contribuintes[i].login} | ${contribuintes[i].contributions} | \n`;
        totalContribuicoes += contribuintes[i].contributions;
    }

    relatorio += `|  | Total | ${totalContribuicoes} | \n`;
    relatorio += `\n## 2. Commits \n| Contribuinte | Quantidade de Commits | \n|:-:|:-:| \n`;


// COMMITS
    var totalCommits = 0;
    for(i = 0; i < contribuintes.length; i++) {
        var semanas = commits[i].weeks.length;
        relatorio += `| ${commits[i].author.login} | ${commits[i].weeks[semanas-1].c} | \n`;
        totalCommits += commits[i].weeks[semanas-1].c;
    }

relatorio += `| Total | ${totalCommits} | \n`;


    relatorio += `\n## 3. Issues \n| Contribuinte | Issues abertas | Issues fechadas \n|:-:|:-:|:-:| \n`;

// ISSUES
    for(i = 0; i < contribuintes.length; i++) {
        relatorio += `| ${contribuintes[i].login} |  |  | \n`;
    }

    relatorio += `| Total |  |  | \n`;
    relatorio += `\n## 4. Pull Requests \n| Contribuinte | Pull Requests abertos | Pull Requests fechados \n|:-:|:-:|:-:| \n`;

// PULL REQUESTS
for(i = 0; i < contribuintes.length; i++) {
    relatorio += `| ${contribuintes[i].login} |  |  | \n`;
}

relatorio += `| Total |  |  | \n`;

console.log(relatorio);
}
