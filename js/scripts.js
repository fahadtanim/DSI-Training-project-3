const summaries = [
  {
    description: "Skilled in Object Oriented Programming.",
  },
  {
    description:
      "Basic understanding of different Design Patterns such as Repository, Dependency Injection, Factory & Software Design Principles SOLID.",
  },
  {
    description:
      "Skilled in pixel perfect responsive front-end development development of Web Application.",
  },
  {
    description:
      "Attended ACM-ICPC 2018 , Inter University and Intra University Onsite Programming Contests.",
  },
];

const educations = [
  {
    type: "School",
    institute: "Motijheel Model High School & College",
    degree: "Secondary School Certificate (SSC)",
    grade: "GPA 5.00",
  },
  {
    type: "College",
    institute: "National Ideal College",
    degree: "Higher Secondary School Certificate (HSC)",
    grade: "GPA 5.00",
  },
  {
    type: "University",
    institute: "American International University - Bangladesh",
    degree: "BSc. CS",
    grade: "CGPA 2.99",
  },
];

const projects = [
  {
    title: "Generating different Kinds of pdf statements for banks",
    description: `Preprocessing & analyze the data given by banks then generate different kinds of
    statement such as Yearly Statements, Monthly Statements etc. Also write processing
    script program to run automatically & sync with press printer with cron job`,
  },
  {
    title: "Front End of Raktakarabi.com​ (Web version) Using ReactJs",
    description: `It’s a web application sponsored by Dhaka Bank Ltd in collaboration with Exhort &
    Sandhani. It’s a Blood group and element search & also a management system
    application for Blood banks. Worked under the supervision of Exhort. It’s still in
    development, not launched yet.`,
  },
  {
    title: "Front end of fonoksphotobox.surge.sh ​(Web version) Using ReactJs",
    description: `It’s a business portfolio web application for fonok’s photobox which is a photography agency.`,
  },
];
/* OnLoad dom loading */

window.addEventListener("load", function (event) {
  /* Summary Content  */
  let containerElem = document.getElementById("summary-content");

  let content = summaries.map(function (summary) {
    return `
      <li class = "w-10/12 md:w-11/12 ml-10 md:ml-10 list-disc"> ${summary.description}</li>
    `;
  });

  containerElem.innerHTML = content;

  /* Educational Info Content */
  containerElem = document.getElementById("academic-history-content");

  content = educations.map(function (education, index) {
    return `
          <li class = "w-10/12 md:w-11/12 ml-10 md:ml-10 list-disc">
            <b class = "cursor-pointer hover:text-blue-500 transition-all" id="education-title-${index}" onClick="toggleExpansion(this)">${education.type}</b>
            <div class = "pl-3 h-0 overflow-hidden" id = "education-title-content-${index}">
              <p>${education.institute}</p>
              <p>${education.degree}</p>
              <p>${education.grade}</p>
            </div>
          </li>
        `;
  });
  containerElem.innerHTML = content;

  containerElem = document.getElementById("projects-content");

  content = projects.map((project, index) => {
    return `<li>
      <b class = "cursor-pointer hover:text-blue-500 transition-all" id="project-title-${index}" onclick="toggleProjectExpansion(this)">${project.title}</b>
         <p class="pl-3 h-0 overflow-hidden" id = "project-title-content-${index}">${project.description}</p>

    </li>`;
  });
  containerElem.innerHTML = content;
  /* Project Content */
});

document
  .getElementById("summary-header")
  .addEventListener("click", function (event) {
    const containerElem = document.getElementById("summary-content");
    containerElem.classList.toggle("h-0");
  });

function toggleExpansion(elem) {
  const index = elem.id.split("-")[2];
  document
    .getElementById(`education-title-content-${index}`)
    .classList.toggle("h-0");
}

function toggleProjectExpansion(elem) {
  const index = elem.id.split("-")[2];
  document
    .getElementById(`project-title-content-${index}`)
    .classList.toggle("h-0");
}

var options = {
  method: "GET",
  url: "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Dhaka&appid=6e125e49eb897bb50801270a19eadfec",
};

axios
  .request(options)
  .then(function (response) {
    // console.log(response.data);
    document.getElementById("weather-content").innerHTML = `
    <b>Temp: </b>
    <p>${response.data.main.temp} deg</p>
    <b>Feels Like:</b>
    <p>${response.data.main.feels_like} deg</p>
    <b>humidity</b>
    <p>${response.data.main.humidity} deg</p>
    `;
  })
  .catch(function (error) {
    console.error(error);
  });

document.getElementById("weather-btn").addEventListener("click", function () {
  document.getElementById("weather-content").classList.toggle("hidden");
  setTimeout(function () {
    if (
      !document.getElementById("weather-content").classList.contains("hidden")
    )
      document.getElementById("weather-content").classList.toggle("hidden");
  }, 4000);
});
