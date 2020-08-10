function printFilm(nbr){
    switch (nbr) {
        case 3:
            console.log("The three brothers");
            break;

        case 6:
            console.log("sixth sense");
            break;

        case 0:
            console.log("invisible man");
            break;

        case 23:
            console.log("The number 23");
            break;

        case 28:
            console.log("28 days later");
            break;

        default:
            console.log("i dont know");
            break;
    }
}

printFilm(5)
printFilm(28)
printFilm(23)
printFilm(0)
printFilm(6)
printFilm(3)