// CONSTRUINDO RELATÓRIO DE DESENVOLVIMENTO

export function criarRelatorio() {
    var xhr = new XMLHttpRequest();
    const owner = localStorage.getItem('owner');
    const repo = localStorage.getItem('repo');
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        var contribuintes = JSON.parse(this.responseText);
        milestone(contribuintes);
    }});
    
    xhr.open("GET", `https://api.github.com/repos/${owner}/${repo}/contributors`);
    xhr.send();
  
  }

function milestone(contribuinte){
    var xhr = new XMLHttpRequest();
    const owner = localStorage.getItem('owner');
    const repo = localStorage.getItem('repo');

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
       var milestone = JSON.parse(this.responseText);
       const dataAberturaMilestone = milestone[0].created_at
       getComments(contribuinte, '2021-04-14T06:17:40Z');
    
      }
    });
    
    xhr.open("GET", "https://api.github.com/repos/" + owner + "/" + repo + "/milestones?state=all&sort=completeness");
    xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
    xhr.send();
  }


  
function getComments(contribuinte, dataAbertura) {
    var xhr = new XMLHttpRequest();
    const owner = localStorage.getItem('owner');
    const repo = localStorage.getItem('repo');
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            var comments = JSON.parse(this.responseText);
            relatorio(contribuinte, dataAbertura, comments)
        }
    });

    xhr.open("GET", `https://api.github.com/repos/${owner}/${repo}/issues/comments?since=${dataAbertura}`);
    xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
    xhr.send();
}

function getCommits(contribuinte, dataAbertura){

    var xhr = new XMLHttpRequest();
    const owner = localStorage.getItem('owner');
    const repo = localStorage.getItem('repo');
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            var commits = JSON.parse(this.responseText).length;
            localStorage.setItem(`commits_${contribuinte}`, commits);
        }
    });

    xhr.open("GET", `https://api.github.com/repos/${owner}/${repo}/commits?author=${contribuinte}&since=${dataAbertura}`);
    xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
    xhr.send();
}


function relatorio(contribuintes, data, comments){
    
    const milestoneName = localStorage.getItem('milestoneName');
    var relatorio = `# Relatorio de desenvolvimento da milestone: ${milestoneName} \n\n## 1. Ranking de contribuições total  \n| | Contribuinte | Quantidade de Contribuições | \n|:-:|:-:|:-:| \n`;

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
        
        getCommits(contribuintes[i].login, data);
        var commits = JSON.parse(localStorage.getItem(`commits_${contribuintes[i].login}`));
        
        relatorio += `| ${contribuintes[i].login} | ${commits} | \n`;
        totalCommits += commits;
    }

    relatorio += `| Total | ${totalCommits} | \n`;
    relatorio += `\n## 3. Comentários em Issues \n| Contribuinte | Quantidade de comentários | \n|:-:|:-:| \n`;


// COMENTÁRIOS EM ISSUES
    var comentarios = [];

    for(i = 0; i < contribuintes.length; i++) {
        comentarios.contribuintes[i].login = 0;
    }

    for(i = 0; i < comments.length; i++) {
        comentarios.contribuintes[i].login += comentarios.contribuintes[i].login;
    }

    var totalComments = 0;
    for(i = 0; i < contribuintes.length; i++) {
        relatorio += `| ${contribuintes[i].login} | ${comentarios.contribuintes[i].login} | \n`;
        totalComments += comentarios.i;
    }

    relatorio += `| Total | ${totalComments} | \n`;
    relatorio += `\n## 4. Pull Requests \n| Contribuinte | Pull Requests abertos | Pull Requests fechados \n|:-:|:-:|:-:| \n`;

    // PULL REQUESTS
    for(i = 0; i < contribuintes.length; i++) {
        relatorio += `| ${contribuintes[i].login} |  |  | \n`;
    }

    relatorio += `| Total |  |  | \n`;

    console.log(relatorio);
}
