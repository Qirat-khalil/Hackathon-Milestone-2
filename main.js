var form = document.getElementById("resume-form");
var resumedisplay = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skill = document.getElementById("skill").value;
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(number, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    <h3>Skill</h3>\n    <p>").concat(skill, "</p>\n    ");
    if (resumedisplay) {
        resumedisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("The resume display element is missing");
    }
});
