---
# the default layout is 'page'
icon: fas fa-info-circle
order: 1
---

<link rel="stylesheet" href="/assets/css/base.css" />
<link rel="stylesheet" href="/assets/css/about.css" />
<script src="/assets/js/about.js" defer></script>

<div class="about-tabs">
  <div class="tab-navigation">
    <button class="tab-button active" data-tab="education">
      <i class="fas fa-graduation-cap"></i> Education
    </button>
    <button class="tab-button" data-tab="experience">
      <i class="fas fa-briefcase"></i> Experience
    </button>
    <button class="tab-button" data-tab="projects">
      <i class="fas fa-code-branch"></i> Projects
    </button>
    <button class="tab-button" data-tab="skills">
      <i class="fas fa-tools"></i> Skills
    </button>
    <button class="tab-button" data-tab="certifications">
      <i class="fas fa-certificate"></i> Certifications
    </button>
  </div>

  <div class="tab-content-container">
    <div id="education" class="tab-content active">
        <h2>Education</h2>
        <div class="content-card">
            <h3>University Name</h3>
            <p class="subtitle">Degree - Field of Study</p>
            <p class="date">2018 - 2022</p>
            <div class="details">
                <h4>Relevant Coursework</h4>
                <ul>
                    <li>Course 1</li>
                    <li>Course 2</li>
                    <li>Course 3</li>
                </ul>
                <h4>Notable Achievements</h4>
                <ul>
                    <li>Achievement 1</li>
                    <li>Achievement 2</li>
                </ul>
            </div>
        </div>
    </div>
    <div id="experience" class="tab-content">
        <h2>Experience</h2>
        <div class="content-card">
            <h3>Company Name</h3>
            <p class="subtitle">Job Title</p>
            <p class="date">Jan 2022 - Present</p>
            <div class="details">
                <h4>Responsibilities</h4>
                <ul>
                    <li>Responsibility 1</li>
                    <li>Responsibility 2</li>
                    <li>Responsibility 3</li>
                </ul>
                <h4>Key Achievements</h4>
                <ul>
                    <li>Achievement 1</li>
                    <li>Achievement 2</li>
                </ul>
            </div>
        </div>
        <!-- Add more experience entries as needed -->
    </div>
    <div id="projects" class="tab-content">
        <h2>Projects</h2>
        <div class="content-card">
            <h3>Project Name</h3>
            <p class="subtitle">Brief description of the project</p>
            <div class="details">
                <h4>Objectives</h4>
                <p>Description of project goals and objectives.</p>
                <h4>Technologies Used</h4>
                <ul>
                    <li>Technology 1</li>
                    <li>Technology 2</li>
                    <li>Technology 3</li>
                </ul>
                <h4>Links</h4>
                <p>
                    <a href="#" target="_blank">
                    <i class="fab fa-github"></i> Repository </a> | <a href="#" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Live Demo </a>
                </p>
            </div>
        </div>
        <!-- Add more project entries as needed -->
    </div>
    <div id="skills" class="tab-content">
        <h2>Skills</h2>
        <h3>Technical Skills</h3>
        <div class="skills-container">
            <div class="skill-card">
                <div class="skill-name">Skill 1</div>
                <div class="skill-level expert">Expert</div>
            </div>
            <div class="skill-card">
                <div class="skill-name">Skill 2</div>
                <div class="skill-level intermediate">Intermediate</div>
            </div>
            <div class="skill-card">
                <div class="skill-name">Skill 3</div>
                <div class="skill-level beginner">Beginner</div>
            </div>
            <!-- Add more skills as needed -->
        </div>
        <h3>Soft Skills</h3>
        <div class="skills-container">
            <div class="skill-card">
                <div class="skill-name">Communication</div>
                <div class="skill-level expert">Expert</div>
            </div>
            <div class="skill-card">
                <div class="skill-name">Leadership</div>
                <div class="skill-level intermediate">Intermediate</div>
            </div>
            <!-- Add more soft skills as needed -->
        </div>
    </div>
    <div id="certifications" class="tab-content">
        <h2>Certifications</h2>
        <div class="content-card">
            <h3>Certification Name</h3>
            <p class="subtitle">Issuing Organization</p>
            <p class="date">Issued: January 2022</p>
            <div class="details">
                <p>Brief description of the certification and its relevance.</p>
                <p>
                    <a href="#" target="_blank">View Certificate</a>
                </p>
            </div>
        </div>
        <!-- Add more certification entries as needed -->
    </div>
  </div>
</div>