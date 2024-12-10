document.addEventListener("DOMContentLoaded", function () {
    fetch('json.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.querySelector('.projects-and-skills');

            data.projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project');

                projectCard.innerHTML = `
                    <h4>${project.title}</h4>
                    <div class="content">
                        <div class="desc">
                            <p>${project.description}</p>
                        </div>
                    </div>
                `;

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching the projects:', error));
});