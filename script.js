const projects = [
    {
        title: "Hotel Feedback Form",
        image: "Images/hotel-form.png",
        description: "Built an interactive form using HTML with text fields, checkboxes, radio buttons, and dropdown menus."
    },
    {
        title: "Camper Cafe",
        image: "Images/camper-cafe.png",
        description: "Created and styled a cafe menu while practicing HTML and CSS."
    },
    {
        title: "MathBot",
        image: "Images/mathbot.png",
        description: "Used JavaScript and the Math object to work with numbers, calculations, and random values."
    }
];

let currentProject = 0;

const projectImage = document.getElementById("projectImage");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const projectNumber = document.getElementById("projectNumber");

const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");


function showProject() {
    projectImage.src = projects[currentProject].image;
    projectImage.alt = projects[currentProject].title;
    projectTitle.textContent = projects[currentProject].title;
    projectDescription.textContent = projects[currentProject].description;
    projectNumber.textContent = "PROJECT 0" + (currentProject + 1);
}


nextButton.addEventListener("click", function () {
    currentProject++;

    if (currentProject >= projects.length) {
        currentProject = 0;
    }

    showProject();
});


previousButton.addEventListener("click", function () {
    currentProject--;

    if (currentProject < 0) {
        currentProject = projects.length - 1;
    }

    showProject();
});
