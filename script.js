const projects = [
	{
		title: "Game Project 1",
		description: "A short description of your first game.",
		image: "path/to/your-image1.jpg",
		link: "https://link-to-your-game1.com"
	},
	{
		title: "Game Project 2",
		description: "A short description of your second game.",
		image: "path/to/your-image2.jpg",
		link: "https://link-to-your-game2.com"
	},
	// Add more projects as needed
];

const projectsContainer = document.getElementById("projects");

projects.forEach(project => {
	const projectElement = document.createElement("div");
	projectElement.classList.add("project");

	projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-details">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Game</a>
        </div>
    `;

	projectsContainer.appendChild(projectElement);
});