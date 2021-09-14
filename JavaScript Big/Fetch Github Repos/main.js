// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://stackoverflow.com/questions/2946656/advantages-of-createelement-over-innerhtml
// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
    getRepos();
}

// Get Repos Function
function getRepos(){
   if(theInput.value == ''){
     reposData.innerHTML = "<span>Please Write Github Username.</span>";
   }else{

    fetch(`https://api.github.com/users/${theInput.value}/repos`)
    .then((response) => response.json())
    .then((repos) => {
      reposData.innerHTML = '';

      repos.forEach(repo => {
        let mainDiv = document.createElement("div");
        let repoName = document.createTextNode(repo.name);
        mainDiv.appendChild(repoName);
        
        let theUrl = document.createElement("a");
        let theUrlText = document.createTextNode("Visit");
        theUrl.appendChild(theUrlText);
        theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
        theUrl.setAttribute('target', '_blank');
        mainDiv.appendChild(theUrl);

        let starsSpan = document.createElement("span");
        let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);
        starsSpan.appendChild(starsText);
        mainDiv.appendChild(starsSpan);

        mainDiv.className = 'repo-box';

        reposData.appendChild(mainDiv);
      })

    });

   }
}