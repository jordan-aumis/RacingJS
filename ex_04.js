function ball(param){
    var i = param;

    while (i < 0){
        console.log(i)
        i++;
        }
     
        while (i > 0){
        console.log(i)
        i --;
    }

    if (param < 0){
        console.log("ball");
        return false;
    }
    else
        return true;
}

ball(-10)
console.log(ball(0))
ball(10)