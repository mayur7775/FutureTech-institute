document.getElementById("noticeForm").addEventListener("submit", function(e){
    e.preventDefault();

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let course = document.getElementById("course").value;
    let date = document.getElementById("date").value;

    let notice = {
        title,
        description,
        course,
        date
    };

    let notices = JSON.parse(localStorage.getItem("notices")) || [];

    notices.push(notice);

    localStorage.setItem("notices", JSON.stringify(notices));

    alert("Notice Published Successfully ✅");

    document.getElementById("noticeForm").reset();
});
