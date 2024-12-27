const projectData=[
  {
    id: 1,
    thumbnail: "Images/compileCode.png",
    title: "CompileCode - A Collaborative Code Editor",
    github_repo_link: "https://github.com/us/compilecode",
    deployed_link: "https://compilecode.vercel.app",
    description: "CompileCode is a collaborative, real-time code editor designed to enhance the way developers work together on coding projects. It provides a platform where multiple users can simultaneously edit, compile, and debug code in a seamless, shared environment. With real-time collaboration features, an integrated compiler, and a rich set of development tools, CompileCode enables teams to write, test, and review code efficiently, regardless of geographical location.",
    tech_stack: ["React.js", "&nbsp;Node.js", "&nbsp;Express.js", "&nbsp;Socket.io", "&nbsp;Tailwind CSS", "&nbsp;JudgeO", "&nbsp;CodeMirror"],
    key_features: [
      "Support for multiple programming languages",
      "Real-time code execution and output display",
      "Syntax highlighting and code editor with Code Mirror Editor",
      "Secure code execution",
      "Download code in one click"
    ],
    purpose: "To provide developers and learners a seamless online code execution platform for practice and testing."
  },
  {
    id: 2,
    thumbnail: "Images/epicentra.png",
    title: "Epicentra - An Epic Blog Website",
    github_repo_link: "https://github.com/username/epicentra",
    deployed_link: "https://epicentra.vercel.app",
    description: "Epicentra is a full-featured blog platform designed to foster a vibrant community of writers and readers. It allows users to explore diverse blogs, write and publish posts, like and comment on content, and interact with others in a collaborative environment. Epicentra aims to provide an intuitive and dynamic experience for content creators and consumers alike.",
    tech_stack: ["React.js", "&nbsp;Node.js", "&nbsp;Express.js", "&nbsp;MongoDB", "&nbsp;Editor.js", "&nbsp;Cloudinary"],
    key_features: [
      "Rich text article creation with Editor.js",
      "Image and video management using Cloudinary",
      "User-friendly user interface",
      "Like and comment functionality for posts",
      "Community building with user profiles and interactions",
      "Google based authentication"
    ],
    purpose: "To enable writers and readers to connect, share ideas, and foster a collaborative community."
  },
  {
    id: 3,
    thumbnail: "Images/learnnotion.png",
    title: "LearnNotion - A Learning Management System",
    github_repo_link: "https://github.com/username/learnnotion",
    deployed_link: "https://learnnotion.vercel.app",
    description: "LearnNotion is a comprehensive Learning Management System (LMS) built using the MERN stack (MongoDB, Express, React, Node.js). It is designed to facilitate seamless creation, consumption, and interaction with educational content, catering to diverse learning needs. With its user-centric approach and robust features, LearnNotion provides a dynamic platform for educators, learners, and administrators to connect and thrive in a digital learning environment.",
    tech_stack: ["React.js", "&nbsp;Tailwind CSS", "&nbsp;Node.js", "&nbsp;Express.js", "&nbsp;MongoDB", "&nbsp;Cloudinary", "&nbsp;NodeMailer", "&nbsp;Razorpay"],
    key_features: [
      "Content creation and consumption for educational materials",
      "Rating and feedback for courses and content",
      "Payment integration for buying courses",
      "Email notifications using NodeMailer",
      "Responsive and intuitive user interface"
    ],
    purpose: "To provide a modern platform for educators and learners to share and consume educational content efficiently."
  },
  {
    id: 4,
    thumbnail: "Images/ecomzy.png",
    title: "Ecomzy - A Shopping Cart",
    github_repo_link: "https://github.com/username/ecomzy",
    deployed_link: "https://ecomzy.example.com",
    description: "Ecomzy is a modern shopping cart application developed using React, Redux, and Tailwind CSS. It is designed to provide users with a seamless and intuitive shopping experience, emphasizing performance, responsiveness, and ease of use.",
    tech_stack: ["React.js", "&nbsp;Redux", "&nbsp;Tailwind CSS"],
    key_features: [
      "Dynamic product listings with filtering and sorting",
      "Shopping cart functionality with item updates and removal",
      "Responsive design for optimal user experience",
      "State management using Redux for seamless interactions"
    ],
    purpose: "To offer a user-friendly e-commerce experience for customers and a scalable solution for online retailers."
  }
];

const modal = document.getElementById('myModal');
const openModalBtn = document.getElementsByClassName('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const thumbnail=document.getElementById("modal-thumbnail");
const modalTitle=document.getElementById("modalTitle");
const modalDescription=document.getElementById("modalDescription");
const modalDes=document.getElementById("des");
const modalPurpose=document.getElementById("modalPurpose")
const githubBtn=document.getElementById("github-btn");
const linkBtn=document.getElementById("link-btn");


function modalData(index){

  let project=projectData[index-1];
  thumbnail.src=project.thumbnail;
  linkBtn.href = project.deployed_link;
  githubBtn.href = project.github_repo_link;
  modalTitle.innerText=project.title;

  modalDes.innerText=project.description;

  modalDescription.innerHTML=`<h3>Tech Stack : </h3> <p>${project.tech_stack}</p>`
  let orderList=document.createElement("ul");
  orderList.classList.add("list-order");
  let h3title=document.createElement("h3");
  h3title.innerText="Key Features : ";
  orderList.appendChild(h3title)
  project.key_features.forEach(ele=>{
    let list=document.createElement("li");
    list.innerText=ele;
    orderList.appendChild(list);
  })

  modalDescription.appendChild(orderList);
  modalPurpose.textContent=project.purpose
}

function openModal(e) {
  modal.style.display = 'flex';
  modal.querySelector('.modal-content').style.animation = 'slideIn 0.5s ease-out forwards'; 
  modal.style.animation = 'fadeIn 0.3s ease-out forwards'; 
  modal.querySelector('.modal-content').style.opacity = '1'; 
  modalData(e.target.dataset.index);
}

// Close modal when the cross button (close button) is clicked
closeModalBtn.onclick = function() {
  closeModal();
};

// Close modal if the user clicks outside of the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};

// Function to close modal with animation
function closeModal() {
  const modalContent = modal.querySelector('.modal-content');
  modalContent.style.animation = 'slideOut 0.5s ease-in forwards'; 
  modal.style.animation = 'fadeOut 0.3s ease-in forwards';

  setTimeout(function() {
    modal.style.display = 'none';
    modal.querySelector('.modal-content').style.opacity = '0';
  }, 500); 
}
