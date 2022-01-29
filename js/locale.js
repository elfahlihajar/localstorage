/*alert(1)
Window.localStorage
ajouter setItem(clé,value)
mdofier setItem(clé,value)
supprimer setItem(clé,value)
supprimer setItem(clé,value)
recuppérer getItem( clé)

window.localStorage.setItem(1,"hey")
var value=window.localStorage.getItem()
console.log(value)*/
  
 
afficher()
document.getElementsByClassName("butt")[0].children[0].addEventListener("click",ajouter)


function ajouter(){
    var voiture=document.getElementsByClassName("add-text")[0].textContent.trim();
    if(voiture!=""){ window.localStorage.setItem(indice_suivant(),voiture)
        document.getElementsByClassName("add-text")[0].textContent=""
        window.location.href=""
    }

}
function indice_suivant(){
    return window.localStorage.length+1;
}
function afficher(){
    var tbody=document.getElementsByClassName("table")[0].children[1]
    for (var i = 1; i <= localStorage.length; i++) {
       tbody.innerHTML+="<tr><td>"+i+"</td><td>"+localStorage.getItem(i)+"</td><td><i onclick='supprimer(this)' class='fas fa-trash'></i></td></tr>"
       console.log(localStorage.getItem(i))
    }
 
}
  

function supprimer(el){
   var x= el.parentElement.parentElement.children[0].textContent
   if(confirm("Are you sur you would like to delete??")){
       localStorage.removeItem(x);
       window.location.href=""

   }
}
 


   
   
   
   
   
   
   

   

   
   
   
  






























































































































































































































