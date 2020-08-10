function paste(x, y){
    var j = 0;
    var i = 0;
    var arraySign = [];
    var arrayVide = [];

    while (i <= x-3){
        arraySign.push("-");
        arrayVide.push(" ");
        i++;
    }

    while (j <= y){
        if(j == 0 || j == y) {
            if(x == 1)
                console.log("O")
            else
                console.log("O"+arraySign.join("")+"O")
                j++;
        }
        else
            if(x == 1)
                console.log("|")
            else
                console.log("|"+arrayVide.join("")+"|")
                j++;
    }
}

paste(5, 1);
paste(1, 1);
paste(1, 5);
paste(4, 4);
paste(5, 3);
