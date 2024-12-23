const skills = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", name: "C" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", name: "C++" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },  // Updated to MySQL
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", name: "Express" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "Postgres" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", name: "Kubernetes" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS3" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js" }
  ];
  
  const skillsContainer = document.getElementById("skills-container");
  
  skills.forEach(skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
  
    const skillIcon = document.createElement("img");
    skillIcon.src = skill.icon;
    skillIcon.alt = `${skill.name} icon`;
    skillIcon.classList.add("skill-icon");
  
    const skillName = document.createElement("p");
    skillName.textContent = skill.name;
    skillName.classList.add("skill-name");
  
    skillCard.appendChild(skillIcon);
    skillCard.appendChild(skillName);
    skillsContainer.appendChild(skillCard);
  });

