/*Task 1*/
function getGrade(total) {

    /*A+ if total is greater than 90*/
    if (total > 90) {
        console.log("A+")
    }

    /*A if total is greater than 80 and less than or equal to 90*/
    if (total > 80 && total <= 90) {
        console.log("A")
    }

    /*B if total is greater than 70 and less than or equal to 80*/
    if (total > 70 && total <= 80) {
        console.log("B")
    }

    /*C if total is greater than 60 and less than or equal to 70*/
    if (total > 60 && total <= 90) {
        console.log("C")
    }

    /*D if total is greater than 50 and less than or equal to 60*/
    if (total > 50 && total <= 60) {
        console.log("D")
    }

    /*E if total is greater than 40 and less than or equal to 50*/
    if (total > 40 && total <= 50) {
        console.log("E")
    }

    /*F if total is greater than 30 and less than or equal to 40*/
    if (total > 30 && total <= 40) {
        console.log("F")
    }

    /*“Fail” is total is less than 30*/
    if (total < 30) {
        console.log("Fail")
    }
}


/*Task 2*/
function getGrade(total) {

    switch (true) {
        case (total > 90):
            console.log("A+");
            break;

        case (total > 80 && total <= 90):
            console.log("A");
            break;

        case (total > 70 && total <= 80):
            console.log("B");
            break;

        case (total > 60 && total <= 90):
            console.log("C");
            break;

        case (total > 50 && total <= 60):  
            console.log("D");
            break;

        case (total > 40 && total <= 50):
            console.log("E");
            break;

        case (total > 30 && total <= 40):
            console.log("F");
            break;

        case (total < 30):
            console.log("Fail")

    }

}









