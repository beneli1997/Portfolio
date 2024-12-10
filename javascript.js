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
                    <img src="${project.image}" alt="Email" class="img expandable-image">
                    <div class="content">
                        <div class="desc">
                            <p>${project.description}</p>
                        </div>
                    </div>
                `;

                projectsContainer.appendChild(projectCard);
            });

            const images = document.querySelectorAll(".expandable-image");
            images.forEach(image => {
                image.addEventListener("click", function () {
                    this.classList.toggle("expanded");
                });
            });
        })
        .catch(error => console.error('Error fetching the projects:', error));

     

});