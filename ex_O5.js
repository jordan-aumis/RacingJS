function  getAngryBird(nbr){
    var i = 0;
    var madeUp = [];

    for (i; i < nbr; i++) {
        madeUp.push("piou");
    }
    console.log(madeUp.join(""))
    return madeUp.join("")
}

getAngryBird(4);