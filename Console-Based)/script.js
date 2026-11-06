// 1. Create Student Class

class Student {

    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // 2. Calculate Average using reduce

    calculateAverage() {

        let total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);

        return total / this.grades.length;
    }

    // 3. Calculate Grade

    getGrade(average) {

        if (average >= 90) {
            return "A";
        } 
        else if (average >= 80) {
            return "B";
        } 
        else if (average >= 70) {
            return "C";
        } 
        else if (average >= 60) {
            return "D";
        } 
        else if (average >= 50) {
            return "E";
        } 
        else {
            return "F";
        }
    }

    // 4. Final Result

    getFinalResult(average) {

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } 
        else {
            return "يحتاج مراجعة";
        }
    }
}


// 5. Create Students Objects

let studentsList = [

    new Student(1, "Nada", [45, 40, 50], 80),

    new Student(2, "Ahmed", [48, 45, 50], 90),

    new Student(3, "Menna", [90, 85, 95], 95),

    new Student(4, "Mohamed", [30, 35, 40], 60)

];


// 6. Print All Students Reports

console.log("===== Students Reports =====");

studentsList.forEach(student => {

    let average = student.calculateAverage();

    let grade = student.getGrade(average);

    let result = student.getFinalResult(average);

    console.log("Student Name:", student.name);

    console.log("Average:", average);

    console.log("Grade:", grade);

    console.log("Final Result:", result);

    console.log("----------------------");

});


// 7. Filter Students Between 40 and 49

let strugglingStudents = studentsList.filter(student => {

    let average = student.calculateAverage();

    return average >= 40 && average <= 49;

});


// 8. Add 5 Bonus Marks using map

let studentsAfterBonus = strugglingStudents.map(student => {

    let oldAverage = student.calculateAverage();

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: oldAverage + 5
    };

});


// 9. Calculate Total New Averages using reduce

let totalNewAverages = studentsAfterBonus.reduce((sum, student) => {

    return sum + student.newAverage;

}, 0);


// 10. Calculate Average After Bonus

let averageAfterBonus = studentsAfterBonus.length > 0
    ? totalNewAverages / studentsAfterBonus.length
    : 0;


// 11. Print Results

console.log("===== Students After Bonus =====");

console.log(studentsAfterBonus);

console.log("Average After Bonus:", averageAfterBonus);
