let grade = 92;

if (grade >= 90) {
    console.log("Congrats! You passed with an A!");
} else if (grade < 90 && grade >= 80) {
    console.log("Congrats! You passed with a B!");
} else if (grade < 80 && grade >= 70) {
    console.log("You passed with a C");
} else if (grade < 70 && grade >= 60) {
    console.log("You failed with a D");
} else {
    console.log("You failed with an F");
}
