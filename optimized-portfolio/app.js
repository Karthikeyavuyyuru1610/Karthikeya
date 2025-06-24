// Simple SPA navigation and content rendering
const sections = [
  { id: 'hero', label: 'Home', content: `<section class="section" id="hero">
    <h1 style="font-size:2.5rem;font-weight:bold;">Karthikeya <span style="color:#2563eb;">Vuyyuru</span></h1>
    <h2 style="font-size:1.5rem;font-weight:500;">Software Developer | GenAI & Machine Learning Engineer</h2>
    <p style="margin:1rem 0;max-width:600px;">A highly motivated software developer with hands-on experience building impactful GenAI chatbots, intelligent web applications, and scalable, production-ready systems.</p>
    <button onclick="scrollToSection('projects')" style="background:#2563eb;color:#fff;padding:0.75rem 2rem;border:none;border-radius:8px;font-size:1rem;cursor:pointer;">Explore My Work</button>
  </section>` },
  { id: 'about', label: 'About', content: `<section class="section" id="about">
    <h2>About Me</h2>
    <p>I'm passionate about crafting scalable production systems using Python and AI/ML technologies. My journey began with mastering core computer science concepts during my B.Tech in Computer Science and Engineering, where I developed a strong foundation in data structures, algorithms, and software development.</p>
    <p>What drives me is the practical application of these concepts to solve real-world problems. From developing an AI chatbot that reduced 70% of manual advisory effort to achieving 89% accuracy in brain disease detection using machine learning models, I focus on creating solutions that make a tangible impact.</p>
    <p>I'm always eager to tackle complex challenges and contribute to innovative tech teams that are pushing the boundaries of what's possible with AI and software engineering.</p>
  </section>` },
  { id: 'projects', label: 'Projects', content: `<section class="section" id="projects">
    <h2>Projects</h2>
    <ul>
      <li><strong>Student Advisory Bot:</strong> AI chatbot using Gemini API & Flask, deployed on GCP. <a href="#" target="_blank">Demo</a></li>
      <li><strong>Brain Disease Detection via ML:</strong> Random Forest & CNN models, 89% accuracy. <a href="https://github.com/Karthikeyavuyyuru1610/BRAIN_DESEASE_DETECTION" target="_blank">GitHub</a></li>
      <li><strong>MobiKart E-commerce Frontend:</strong> Responsive e-commerce UI with Firebase Auth & Firestore.</li>
    </ul>
  </section>` },
  { id: 'skills', label: 'Skills', content: `<section class="section" id="skills">
    <h2>Skills</h2>
    <ul>
      <li>Programming: Python, C++, Java, JavaScript</li>
      <li>AI/ML: LLMs, Prompt Engineering, Random Forest, CNN, Linear Regression</li>
      <li>Web & Frontend: HTML5, CSS3, JavaScript, Bootstrap</li>
      <li>Cloud/DevOps: Google Cloud Platform, AWS Basics, GitHub Actions</li>
      <li>Databases: SQL, Firebase, Firestore</li>
      <li>Core Competencies: Data Structures & Algorithms, Competitive Programming</li>
    </ul>
  </section>` },
  { id: 'experience', label: 'Experience', content: `<section class="section" id="experience">
    <h2>Experience</h2>
    <ul>
      <li><strong>Google Cloud Generative AI Virtual Internship:</strong> Developed prompt workflows with Vertex AI LLMs, hands-on with Google Cloud's AI technologies (2023).</li>
      <li><strong>Data Science and ML Intern at YBI Foundation:</strong> ML projects, data preprocessing, model development, optimization (2023).</li>
    </ul>
  </section>` },
  { id: 'achievements', label: 'Achievements', content: `<section class="section" id="achievements">
    <h2>Achievements & Recognition</h2>
    <ul>
      <li>IEEE Publication: 2nd IEEE International Conference on Innovations in Control, Intelligence and Computing (ICOICI) 2024.</li>
      <li>Research on ML applications published, contributing to academic community's understanding of AI innovations.</li>
    </ul>
  </section>` },
  { id: 'contact', label: 'Contact', content: `<section class="section" id="contact">
    <h2>Contact</h2>
    <ul>
      <li>Email: <a href="mailto:karthikeya16102003@gmail.com">karthikeya16102003@gmail.com</a></li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/karthikeya-vuyyuru/" target="_blank">karthikeya-vuyyuru</a></li>
      <li>GitHub: <a href="https://github.com/Karthikeyavuyyuru1610" target="_blank">Karthikeyavuyyuru1610</a></li>
    </ul>
  </section>` }
];

function renderNav() {
  const nav = document.getElementById('navbar');
  nav.innerHTML = `<ul>${sections.map(s => `<li><a href="#${s.id}" id="nav-${s.id}">${s.label}</a></li>`).join('')}</ul>`;
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(a.getAttribute('href').substring(1));
    });
  });
}

function renderContent() {
  const main = document.getElementById('main-content');
  main.innerHTML = sections.map(s => s.content).join('');
}

function renderFooter() {
  document.getElementById('footer').innerHTML = `&copy; ${new Date().getFullYear()} Karthikeya Vuyyuru. All rights reserved.`;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function highlightNav() {
  const scrollPos = window.scrollY || window.pageYOffset;
  let current = sections[0].id;
  for (const s of sections) {
    const el = document.getElementById(s.id);
    if (el && el.offsetTop - 80 <= scrollPos) current = s.id;
  }
  sections.forEach(s => {
    const navA = document.getElementById('nav-' + s.id);
    if (navA) navA.classList.toggle('active', s.id === current);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderContent();
  renderFooter();
  highlightNav();
  window.addEventListener('scroll', highlightNav);
});
