import {File} from '../libraries/filesaver.js';

export function criarRelatorio(owner, repo, milestoneName) {
  var xhr = new XMLHttpRequest();

  function dadosContribuintes() {
    if(xhr.readyState === 4) {

        var contribuintes = JSON.parse(xhr.responseText);
        milestone(contribuintes, owner, repo, milestoneName);
      }
  }

  xhr.addEventListener("readystatechange", dadosContribuintes);

  xhr.open("GET", `https://api.github.com/repos/${owner}/${repo}/contributors`);
  xhr.send();
}

// DATA DE ABERTURA DA MILESTONE
function milestone(contribuinte, owner, repo, milestoneName){

  var xhr = new XMLHttpRequest();

  function dadosMilestone() {
    if(xhr.readyState === 4) {

      var milestone = JSON.parse(xhr.responseText);
      const dataAberturaMilestone = milestone[0].created_at;
      let numeroMilestone =  milestone[0].number;
      getComments(contribuinte, dataAberturaMilestone,  owner, repo, milestoneName, numeroMilestone);
    }
  }

  xhr.addEventListener("readystatechange", dadosMilestone);

  xhr.open("GET", "https://api.github.com/repos/" + owner + "/" + repo + "/milestones?state=all&sort=completeness");
  xhr.send();
}


// COMENTÁRIOS EM ISSUES
function getComments(contribuinte, dataAbertura,  owner, repo, milestoneName, numeroMilestone) {
  var xhr = new XMLHttpRequest();

  function dadosComments() {
    if(xhr.readyState === 4) {

        var comments = JSON.parse(xhr.responseText);
        getIssues(contribuinte, dataAbertura, comments,  owner, repo, milestoneName, numeroMilestone);
    }
  }

  xhr.addEventListener("readystatechange", dadosComments);

  xhr.open("GET", `https://api.github.com/repos/${owner}/${repo}/issues/comments?since=${dataAbertura}`);
  xhr.send();
}

// ISSUES ASSOCIADAS A CADA CONTRIBUINTE
function getIssues(contribuinte, dataAbertura, comments,  owner, repo, milestoneName, numeroMilestone) {
  var xhr = new XMLHttpRequest();

  function dadosIssues() {
    if(xhr.readyState === 4) {

        var issues = JSON.parse(xhr.responseText);
        relatorio(contribuinte, dataAbertura, comments, issues,  owner, repo, milestoneName, numeroMilestone);
    }
  }

  xhr.addEventListener("readystatechange", dadosIssues);

  xhr.open("GET", `https://api.github.com/repos/${owner}/${repo}/issues?since=${dataAbertura}`);
  xhr.send();
}

// QUANTIDADE DE COMMITS POR CONTRIBUINTE DESDE A ABERTURA DA MILESTONE
function getCommits(contribuinte, dataAbertura , owner, repo){

  var xhr = new XMLHttpRequest();

  function dadosCommits() {
    if(xhr.readyState === 4) {

        var commits = JSON.parse(xhr.responseText).length;
        localStorage.setItem(`commits_${contribuinte}`, commits);
    }
  }

  xhr.addEventListener("readystatechange", dadosCommits);
  
  xhr.open("GET", `https://api.github.com/repos/${owner}/${repo}/commits?author=${contribuinte}&since=${dataAbertura}`);
  xhr.send();
}

// CONSTRUINDO RELATÓRIO DE DESENVOLVIMENTO
function relatorio(contribuintes, data, comments, issues, owner, repo, milestoneName, numeroMilestone){

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
      
      getCommits(contribuintes[i].login, data,  owner, repo);
      var commits = JSON.parse(localStorage.getItem(`commits_${contribuintes[i].login}`));
      relatorio += `| ${contribuintes[i].login} | ${commits} | \n`;
      totalCommits += commits;
  }

  relatorio += `| Total | ${totalCommits} | \n`;
  relatorio += `\n## 4. Issues associadas \n| Contribuinte | Issues associadas \n|:-:|:-:| \n`;

// ISSUES ASSOCIADAS
  for(i = 0; i < contribuintes.length; i++) {
      localStorage.setItem(`issues_${contribuintes[i].login}`, 0);
  }

  for(i = 0; i < issues.length; i++) {
      for(var j = 0; j < issues[i].assignees.length; j++) {
          var quantidade = new Number(localStorage.getItem(`issues_${issues[i].assignees[j].login}`));
          quantidade++;
          localStorage.setItem(`issues_${issues[i].assignees[j].login}`, quantidade)
      }
  }
  
  var totalIssues = 0;
  for(i = 0; i < contribuintes.length; i++) {
      var quantidade = new Number(localStorage.getItem(`issues_${contribuintes[i].login}`));
      relatorio += `| ${contribuintes[i].login} | ${quantidade} | \n`;
      totalIssues += quantidade;
  }

// COMENTÁRIOS EM ISSUES
  relatorio += `\n## 3. Comentários em Issues \n| Contribuinte | Quantidade de comentários | \n|:-:|:-:| \n`;

  
  for(i = 0; i < contribuintes.length; i++) {
      localStorage.setItem(`comments_${contribuintes[i].login}`, 0);
  }

  for(i = 0; i < comments.length; i++) {
      var quantidade = new Number(localStorage.getItem(`comments_${comments[i].user.login}`));
      quantidade++;
      localStorage.setItem(`comments_${comments[i].user.login}`, quantidade)
  }

  var totalComments = 0;
  for(i = 0; i < contribuintes.length; i++) {
      var quantidade = new Number(localStorage.getItem(`comments_${contribuintes[i].login}`));
      relatorio += `| ${contribuintes[i].login} | ${quantidade} | \n`;
      totalComments += quantidade;
  }
  relatorio += `| Total | ${totalComments} | \n`;
  File(relatorio, numeroMilestone)
  
}