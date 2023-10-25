const projectsDiv = document.getElementById('projects')

fetch('./projects.json')
  .then(response => response.json())
  .then(data => {
    var creation = []

    for (const x in data) {
      creation.push(data[x])
    }

    console.log(creation)

    for (const x in creation) {
      const div = document.createElement('div');
      div.classList = "projects";

      const thumbnail = document.createElement('img');
      thumbnail.classList = "projectsThumbnail";
      thumbnail.src = creation[x].img;

      const name = document.createElement('h1');
      name.innerText = creation[x].name;

      const description = document.createElement('span');
      description.innerText = creation[x].description;

      const buttonA = document.createElement('a');
      buttonA.href = creation[x].link;

      const button = document.createElement('div');
      button.classList = "projectButton";

      const buttonText = document.createElement('span');
      buttonText.innerText = "Link";

      div.appendChild(thumbnail);
      div.appendChild(name);
      div.appendChild(description);

      div.appendChild(buttonA);
      buttonA.appendChild(button);
      button.appendChild(buttonText)

      projectsDiv.appendChild(div)
    }

  })
  .catch(error => {
    console.error('Error:', error);
});