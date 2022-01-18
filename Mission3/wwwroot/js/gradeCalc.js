$("#gradeSend").click(function () {

    /* Get all of the necessary grades and apply the weight */
    var Assignments =$("#Assignments").val() * .55;
    var Group = $("#Group").val() * .05;
    var Quizzes = $("#Quizzes").val() * .10;
    var Exams = $("#Exams").val() * .20;
    var INTEX = $("#INTEX").val() * .10;

    /* Calculate the person's number grade and then assign an ID to the variable so it can be called by the index.html
     * file to be displayed*/
    Grade = Math.round(Assignments + Group + Quizzes + Exams + INTEX);
    // document.getElementById("Grade").innerHTML = Grade;

    /* Create a letter grade variable and use conditional statements to assign the correct letter grade */
    var letterGrade =''

    if (Grade >= 94) {
        letterGrade = 'A'
    }
    else if (Grade >= 90) {
        letterGrade = 'A-'
    }
    else if (Grade >= 87) {
        letterGrade = 'B+'
    }
    else if (Grade >= 84) {
        letterGrade = 'B'
    }
    else if (Grade >= 80) {
        letterGrade = 'B-'
    }
    else if (Grade >= 77) {
        letterGrade = 'C+'
    }
    else if (Grade >= 74) {
        letterGrade = 'C'
    }
    else if (Grade >= 70) {
        letterGrade = 'C-'
    }
    else if (Grade >= 67) {
        letterGrade = 'D+'
    }
    else if (Grade >= 64) {
        letterGrade = 'D'
    }
    else if (Grade >= 60) {
        letterGrade = 'D-'
    }
    else {
        letterGrade = 'E'
    }
    /*Assign ID to letter grade variable so that it will be printed*/


    /*document.getElementById("letterGrade").innerHTML = letterGrade;*/

    alert('Your Grade is: ' + Grade + ' ' + letterGrade);

    
    //alert('Assignments: ' + Assignments + '\n' +
    //    'Group: ' + Group + '\n' +
    //    'Quizzes: ' + Quizzes + '\n' +
    //    'Exams: ' + Exams + '\n' +
    //    'Intex: ' + INTEX + '\n' +
    //    'Final Grade:' + Grade);
        
})