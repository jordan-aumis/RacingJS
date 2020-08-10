 function strToWordtab(str = "default", delim = "default"){
     var array = str.split(delim)
     if (str == "default" && delim == "default")
        return null;
    
     return array;
 }

 console.log(strToWordtab("je joue au, jeu ,video, a la maison", ","));
console.log(strToWordtab());