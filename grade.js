function Grade() {
    let name= document.getElementById('name').value;
    let rollNo=document.getElementById('rollNo').value;
    let Cloud = document.getElementById('CCT').value;
    let Data = document.getElementById('DS').value;
    let C = document.getElementById('C').value;
    let DeepLearn = document.getElementById('DL').value;
    let SoftwareTest = document.getElementById('ST').value;
    let grades = '';

    let totalGrades = parseFloat(Cloud) + parseFloat(Data) + parseFloat(C) + parseFloat(DeepLearn) + parseFloat(SoftwareTest);

    let percentage = (totalGrades / 500) * 100;
    if (percentage <= 100 && percentage >= 80) {
        grades = 'A';
    } else if (percentage <= 79 && percentage >= 60) {
        grades = 'B';
    } else if (percentage <= 59 && percentage >= 40) {
        grades = 'C';
    } else if (percentage <= 39 && percentage >= 0) {
        grades = 'F';
    }

    if (name === '' || rollNo ==='' || Cloud === '' || Data === '' || C === '' || DeepLearn === '' || SoftwareTest === '') {
        document.getElementById('result').innerHTML = 'Please fill out all the fields';
    } else if (totalGrades > 500) {
        document.getElementById('result').innerHTML = `${totalGrades} is greater than 500`;
    } else {
        if (percentage >= 40 && Cloud >=40 && Data >=40 && C >=40 && DeepLearn >=40 && SoftwareTest >=40) {
            document.getElementById('result').innerHTML = `Your total is <b>${totalGrades}</b>, out of 500 and percentage is <b>${percentage}%</b>. <br> Your grade is <b>${grades}</b>. You are <b>Pass.</b>`;
        } else {
            document.getElementById('result').innerHTML = `Your total is <b>${totalGrades}</b>, out of 500 and percentage is <b>${percentage}%</b>. <br> Your grade is <b>${grades}</b>. <b>You are Fail.</b>`;
        }

    }
}
