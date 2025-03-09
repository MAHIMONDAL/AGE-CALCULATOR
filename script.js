function calculateAge() {
    let dobInput = document.getElementById("dob").value;
    
    if (dobInput === "") {
        alert("Please enter your date of birth.");
        return;
    }

    let dob = new Date(dobInput);
    let today = new Date();

    // Calculate Age
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Calculate Next Birthday
    let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    
    let diffTime = nextBirthday - today;
    let daysUntilBirthday = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Show Result
    document.getElementById("result").innerHTML = `
        <p>Your Age: <strong>${ageYears} years, ${ageMonths} months, ${ageDays} days</strong></p>
        <p>Next Birthday in: <strong>${daysUntilBirthday} days</strong></p>
    `;
}
