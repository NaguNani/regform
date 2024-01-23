function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;

    var resultMessage = "Registration Successful! Details:\n";
    resultMessage += "First Name: " + firstName + "\n";
    resultMessage += "Last Name: " + lastName + "\n";
    resultMessage += "Email: " + email + "\n";
    resultMessage += "Date of Birth: " + dob + "\n";
    resultMessage += "Gender: " + gender;

    document.getElementById("result").innerText = resultMessage;
}
