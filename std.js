const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");
const form = document.getElementById("studentForm");
const saveProfileBtn = document.getElementById("saveProfile");

/* Photo Preview */
photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        photoPreview.innerHTML = `<img src="${reader.result}" alt="Student Photo">`;
    };
    reader.readAsDataURL(file);
});

/* Save Button */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    saveStudent("Saved Successfully!");
});

/* Save & Open Profile */
saveProfileBtn.addEventListener("click", () => {
    saveStudent("Saved & Opening Profile...");
});

/* Common Save Function */
function saveStudent(message) {
    const studentData = {
        name: fullName.value,
        mobile: mobile.value,
        altMobile: altMobile.value,
        address: address.value,
        dob: dob.value,
        education: education.value,
        admissiondate: admissiondate.value,
        course: course.value,
        batch: batch.value,
        totalfee: totalfee.value
    };

    console.log("Student Data:", studentData);
    alert(message);
}
