const resultBox = document.querySelector(".results");
document.querySelector("#submit").addEventListener("click", function () {
    const StudentName = document.querySelector("#StudentName").value;
    const StudentID = document.querySelector("#StudentID").value;
    let x = 0;
    var totalOfOneSubject = 0;
    const ids = [
        "Linearquiz1", "Linearquiz2", "Linearquiz3", "Linearminor1", "Linearminor2", "Linearmajor",
        "oopsquiz1", "oopsquiz2", "oopsquiz3", "oopsminor1", "oopsminor2", "oopsmajor",
        "NTquiz1", "NTquiz2", "NTquiz3", "NTminor1", "NTminor2", "NTmajor",
        "DSquiz1", "DSquiz2", "DSquiz3", "DSminor1", "DSminor2", "DSmajor",
        "COAquiz1", "COAquiz2", "COAquiz3", "COAminor1", "COAminor2", "COAmajor"
    ];
    let subjects = ["Linear Algebra", "Signals & Systems", "Data Communication", "Computer Programming", "Digital Circuits & Systems"];
    let pass = [];
    let i = 0;
    let count = 0;
    ids.forEach(id => {
        const val = parseInt(document.getElementById(id).value) || 0;
        if (count % 6 == 0) {
            if (totalOfOneSubject <= 30) {
                console.log(id);
                pass[i++] = "fail";
            } else {
                pass[i++] = "pass";
            }
            totalOfOneSubject = 0;
        }
        totalOfOneSubject += val;
        x += val;
        count++;
    });
    if ((totalOfOneSubject <= 30)) {
        pass[i++] = "fail";
    } else {
        pass[i++] = "pass";
    }
    count = 5;
    for (i = 0; i < 5; i++) {
        const val = parseInt(document.getElementById(ids[count]).value) || 0;
        if (val <= 10) {
            pass[i] = "fail";
        } else {
            pass[i] = "pass"
        }
        count = count + 6;
    }
    let y;
    if (x > 450) {
        y = "AAA";
    } else if (x <= 450 && x > 400) {
        y = "AA";
    } else if (x <= 400 && x > 350) {
        y = "A";
    } else if (x <= 350 && x > 300) {
        y = "B+";
    } else if (x <= 300 && x > 250) {
        y = "B";
    } else if (x <= 250 && x > 200) {
        y = "C";
    } else if (x == 200) {
        y = "D";
    } else {
        y = "F"
    }
    resultBox.innerHTML = `
<p><strong>${StudentName.toUpperCase()} (ID: ${StudentID})</strong></p>
<p>Total Marks: <strong>${x}</strong></p>
<p>Grade: <strong>${y}</strong></p>
`;
    for (let m = 0; m < 5; m++) {
        resultBox.innerHTML = resultBox.innerHTML + `
<p>${subjects[m]}: <strong>${pass[m]}</strong></p>`
    }
    resultBox.style.display = "block";
});

document.querySelector("#reset").addEventListener("click", () => {
    resultBox.innerHTML = "";
    resultBox.style.display = "none";
})