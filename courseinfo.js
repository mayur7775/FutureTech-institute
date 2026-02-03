const courses = [
{
title:"AI-Powered Data Analytics",
img:"https://images.unsplash.com/photo-1581090700227-1e37b190418e",
overview:"Industry-focused analytics course using AI & real-world datasets.",
duration:"6 Months",
mode:"Online + Offline",
price:"₹2599",
certificate:"Yes",
skills:["Data Analysis","Machine Learning","Statistics"],
tools:["Python","SQL","Power BI"],
career:"Data Analyst, AI Analyst"
},
{
title:"Data Science Bootcamp",
img:"https://images.unsplash.com/photo-1555066931-4365d14bab8c",
overview:"Complete data science training with projects.",
duration:"5 Months",
mode:"Online",
price:"₹2899",
certificate:"Yes",
skills:["Python","Data Visualization","ML"],
tools:["Pandas","NumPy","Scikit-learn"],
career:"Data Scientist, ML Engineer"
},
{
title:"C Programming for Beginners",
img:"https://wallpaperaccess.com/full/2820602.jpg",
overview:"Build strong programming logic using C.",
duration:"3 Months",
mode:"Offline",
price:"₹389",
certificate:"Yes",
skills:["Logic Building","Memory Management"],
tools:["C Compiler","VS Code"],
career:"Software Developer"
},
{
title:"Ultimate Web Development 2026",
img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
overview:"Full stack web development course.",
duration:"6 Months",
mode:"Online + Offline",
price:"₹788",
certificate:"Yes",
skills:["Frontend","Backend","APIs"],
tools:["HTML","CSS","JS","React","Node"],
career:"Full Stack Developer"
},
{
title:"Python Full Stack Developer",
img:"https://www.educative.io/v2api/editorpage/5984239968321536/image/5203686436372480",
overview:"Python based full stack development.",
duration:"6 Months",
mode:"Online",
price:"₹2499",
certificate:"Yes",
skills:["Python","Django","REST API"],
tools:["Python","Django","Postman"],
career:"Backend Developer"
},
{
title:"Java Full Stack Developer",
img:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
overview:"Enterprise Java development program.",
duration:"6 Months",
mode:"Offline",
price:"₹2699",
certificate:"Yes",
skills:["Java","Spring Boot","APIs"],
tools:["Java","Spring","MySQL"],
career:"Java Developer"
},
{
title:"Cloud Computing & AWS",
img:"https://images.unsplash.com/photo-1509395176047-4a66953fd231",
overview:"AWS cloud architecture & deployment.",
duration:"4 Months",
mode:"Online",
price:"₹2999",
certificate:"Yes",
skills:["Cloud","DevOps Basics"],
tools:["AWS","EC2","S3"],
career:"Cloud Engineer"
},
{
title:"Cyber Security & Ethical Hacking",
img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
overview:"Learn cyber security & penetration testing.",
duration:"5 Months",
mode:"Offline",
price:"₹2799",
certificate:"Yes",
skills:["Networking","Security"],
tools:["Kali Linux","Wireshark"],
career:"Security Analyst"
},
{
title:"Machine Learning & AI",
img:"https://images.unsplash.com/photo-1555949963-aa79dcee981c",
overview:"Advanced ML & AI algorithms.",
duration:"6 Months",
mode:"Online",
price:"₹3199",
certificate:"Yes",
skills:["ML Models","AI"],
tools:["TensorFlow","Python"],
career:"ML Engineer"
},
{
title:"DevOps Engineer Program",
img:"https://thumbs.dreamstime.com/z/devops-dev-ops-as-software-development-practice-tiny-person-concept-application-coding-programming-work-framework-261127878.jpg?w=992",
overview:"CI/CD & automation tools training.",
duration:"5 Months",
mode:"Online",
price:"₹2899",
certificate:"Yes",
skills:["Automation","CI/CD"],
tools:["Docker","Kubernetes","Jenkins"],
career:"DevOps Engineer"
}
];

// Render course cards
const container = document.getElementById("courseCards");
courses.forEach((c,i)=>{
container.innerHTML += `
<div class="col-md-6 col-lg-3">
<div class="course-card">
<div class="course-img">
<span class="badge-offer">Professional</span>
<img src="${c.img}">
</div>
<div class="course-content">
<div class="course-title">${c.title}</div>
<div class="course-desc">${c.overview}</div>
<div class="meta"><span>👨‍🏫 Futuretech</span></div>
<div class="price"><strong>${c.price}</strong></div>
<button class="btn-view" onclick="viewCourse(${i})">View Course</button>
</div>
</div>
</div>`;
});

function viewCourse(i){
const c = courses[i];
courseGrid.classList.add("hidden");
detailsBox.classList.remove("hidden");
pageTitle.innerText = "Course Details";

detailImg.src = c.img;
detailTitle.innerText = c.title;
detailOverview.innerText = c.overview;
detailDuration.innerText = c.duration;
detailMode.innerText = c.mode;
detailPrice.innerText = c.price;
detailCareer.innerText = c.career;
detailCertificate.innerText = c.certificate;

detailSkills.innerHTML = c.skills.map(s=>`<li>${s}</li>`).join("");
detailTools.innerHTML = c.tools.map(t=>`<li>${t}</li>`).join("");
}

function goBack(){
detailsBox.classList.add("hidden");
courseGrid.classList.remove("hidden");
pageTitle.innerText = "Futuretech Premium Courses";
}
