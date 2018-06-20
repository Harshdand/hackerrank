function gradingStudents(grades) {
    for (let index = 0; index < grades.length; index++) {
        if (grades[index] >= 38) {
            let rem = grades[index] % 5;
            let rounded = grades[index] + (5 - rem);

            grades[index] = rounded - grades[index] < 3 ? rounded : grades[index];
        }
    }

    return grades;
}