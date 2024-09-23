var r=document.querySelector("ul"),e=Array.from(r.querySelectorAll("li")).sort(function(r,e){var a=+r.dataset.salary.replace(/[$,]/g,"");return+e.dataset.salary.replace(/[$,]/g,"")-a});r.innerHTML="",e.forEach(function(e){r.appendChild(e)});
//# sourceMappingURL=index.d3360663.js.map
