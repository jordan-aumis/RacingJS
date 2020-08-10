function isSimilar(a, b){
    if (a === b){
        console.log("same type and value")
    }
    else if (typeof a === typeof b){
        console.log("same type")
    }
    else if (a == b){
        console.log("same value")
    }
    else 
        console.log("not the same at all")
}

isSimilar(20, "20")
isSimilar(20, 20)
isSimilar("piou", "20")

