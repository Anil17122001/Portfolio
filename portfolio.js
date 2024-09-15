document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

const texts = [
    "Anil Pawar |",
    "And 📲",
    "Developer "
];
const speed = 100;
const textelement = document.querySelector(".textmy");
let textindex = 0;
let charindex = 0;

function typewriter() {
    if (charindex < texts[textindex].length) {
        textelement.innerHTML += texts[textindex].charAt(charindex);
        charindex++;
        setTimeout(typewriter, speed);
    } else {
        setTimeout(erasetext, 1000);
    }
}

function erasetext() {
    if (textelement.innerHTML.length > 0) {
        textelement.innerHTML = textelement.innerHTML.slice(0, -1);
        setTimeout(erasetext, speed);
    } else {
        textindex = (textindex + 1) % texts.length;
        charindex = 0;
        setTimeout(typewriter, 500);
    }
}

// Start the typewriter effect when the page loads
window.onload = typewriter;

// portfolio.js

document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Project Title 1",
            description: "A brief description of Project 1. It includes the technologies used and the purpose of the project.",
            image: "project1.jpg",
            link: "https://link-to-project1.com"
        },
       
        // Add more projects as needed
    ];

    const projectList = document.querySelector('.project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');

        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="button">View Project</a>
        `;

        projectList.appendChild(projectItem);
    });
});
