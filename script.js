// Data for the portfolio sections
const portfolioData = {
name: 'JAYA SAI SRI VARDHAN RYALI',
title: 'AI/ML & Cloud Developer',
tagline: 'Passionate Competitive Coder with a flair for building intelligent and scalable applications.',
contact: {
    linkedin: 'https://www.linkedin.com/in/jaya-sai-sri-vardhan-ryali/',
    github: 'https://github.com/Jay-Ryali-11',
    email: 'jayasaisrivardhanryali@gmail.com',
    mobile: '+91 9014662648',
    social: {
    twitter: '#',
    instagram: '#',
    facebook: '#'
    },
    resume: 'https://drive.usercontent.google.com/uc?id=1qCs2Kgq8nQroRzMmfnDObnz0stLp69cj&export=download'
},
education: [
    {
    type: 'Education',
    icon: 'graduation-cap',
    degree: 'Bachelor of Technology - AI and Machine Learning',
    school: 'Aditya University',
    location: 'Surampalem, India',
    duration: 'Nov 2021 - May 2025',
    gpa: '8.75',
    },
    {
    type: 'Education',
    icon: 'graduation-cap',
    degree: 'Board of Intermediate Education',
    school: 'Aditya Junior College',
    location: 'Danavaipeta, India',
    duration: 'June 2019 - Apr 2021',
    percentage: '94.4%',
    },
],
skills: {
    'Languages & Tools': ['Python', 'C++', 'Java', 'C', 'SQL', 'HTML'],
    'Technologies': ['AWS Cloud', 'Azure Cloud', 'Google Cloud Platform (GCP)', 'Machine Learning', 'MySQL', 'Flask'],
    'Developer Tools': ['VS Code', 'Lens', 'Eclipse', 'Spyder'],
    'DevOps Tools': ['Docker', 'Kubernetes', 'Helm', 'Terraform', 'Git'],
},
experience: [
    {
        type: 'Experience',
        icon: 'briefcase',
        title: 'AWS DevOps Trainee',
        company: 'Technical Hub',
        duration: 'July 2023 – July 2024',
        description: 'Trained in a comprehensive program focused on AWS and DevOps tools, gaining practical skills in cloud infrastructure management, automation, and continuous integration/continuous deployment (CI/CD) pipelines.',
        location: 'Technical Hub'
    },
    {
    type: 'Experience',
    icon: 'briefcase',
    title: 'Software Developer Intern',
    company: 'Zopsmart',
    duration: 'July 2024 – May 2025',
    description: 'Worked as a Software Developer Intern at Zopsmart, gaining hands-on experience with industry-standard DevOps tools suchs as Docker, Kubernetes, Helm, and Terraform.',
    location: 'Bengaluru'
    },
    {
    type: 'Experience',
    icon: 'briefcase',
    title: 'Owl Coder Program Trainee',
    company: 'Owl Coder Program',
    duration: 'Feb 2023 - Mar 2023, Jan 2024 - Feb 2024',
    description: 'Participated in a 2-month training program during my 2nd and 3rd year, enhancing my coding skills and capabilities. Learned data structures and algorithms (DSA) topics and delivered teach-back sessions.',
    location: 'Technical Hub'
    },
],
projects: [
    {
    title: 'Botnet Attacks Detection',
    description: 'Designed and implemented a hybrid AI model combining ANN, RNN, and LSTM for high-accuracy threat detection. Developed a Flask-based web application, integrated MySQL for secure data management, and implemented email-based authentication for enhanced security. Optimized system performance for real-time analysis, strengthening cybersecurity measures.Gained expertise in machine learning, web development, and database management.',
    link: 'https://github.com/Jay-Ryali-11/Botnet-Attacks-Detection/',
    image: 'assests/photos/Botnet Attacks Detection thumbnail.png',
    video: 'https://drive.google.com/file/d/1ymAA1ZWr3A1w8_m8bYsKQ6VN-t0oNaPs/preview',
    category: ['AIML', 'Cloud & DevOps', 'Web & App'],
    technologies: ['Python', 'Flask', 'MySQL', 'ANN', 'RNN', 'LSTM']
    },
    {
    title: 'Video Q&A',
    description: 'This is a simple web application designed to enhance video interaction and comprehension. Users can input a video and pose any query related to its content. Leveraging Google Vertex AI, the application efficiently analyzes the video and provides concise summaries and relevant results to the user’s query. This project aims to streamline information retrieval from videos, enabling users to extract valuable insights and enhance their understanding of video content effortlessly.',
    link: 'https://github.com/Jay-Ryali-11/Video-Q-A',
    image: 'assests/photos/Video Q&A thumbnail.png',
    video: 'https://drive.google.com/file/d/1f-QdIERGkFQpNneWXO2SNpUzPydetWR4/preview',
    category: ['AIML', 'Cloud & DevOps', 'Web & App'],
    technologies: ['Python', 'Google Vertex AI']
    },
    {
    title: 'Airline Market Demand Analyzer Web App',
    description: 'Engineered a Python Flask web application for airline booking market demand analysis, specifically for Australian hostels. Integrated Aviationstack API for data sourcing, utilizing data simulation to bypass free-tier limitations and generate comprehensive market trends. Implemented interactive charts and leveraged Google Gemini AI for key insights on popular routes, pricing, and high-demand periods.',
    link: 'https://github.com/Jay-Ryali-11/Airline-Market-Demand-Analyzer',
    image: 'assests/photos/Airline Market Demand Analyzer Web App thumbnail.png',
    video: 'https://drive.google.com/file/d/1zSRsO_Mph-NJA4Ya-AOF1o7tRTWnAY29/preview',
    category: ['AIML', 'Web & App'],
    technologies: ['Python', 'Flask', 'Google Gemini AI', 'Aviationstack API']
    },
    {
    title: 'Emotion Validator using Amazon Rekognition',
    description: 'Developed an innovative application leveraging Amazon Rekognition’s powerful image analysis capabilities to validate and analyze emotional responses. Implemented camera capture and image upload functionalities to enhance user convenience. Strengthened expertise in backend development, AWS services, and frontend design to optimize system performance and user experience.',
    link: 'https://github.com/Jay-Ryali-11/Emotion-Detection-using-AWS-Rekognition',
    image: 'assests/photos/Emotion Validator using Amazon Rekognition thumbnail.png',
    video: 'https://drive.google.com/file/d/1qJg7eTd0rYmKqM4P0bMkX7sx9szt2MR8/preview',
    category: ['AIML', 'Cloud & DevOps'],
    technologies: ['Python', 'AWS Rekognition']
    },
    {
    title: 'AI Notes Summarizer',
    description: 'An AI-powered notes summarizer that uses machine learning to quickly and accurately condense notes and extract key information. This project showcases proficiency in natural language processing (NLP) and building practical, user-focused AI applications.',
    link: 'https://github.com/Jay-Ryali-11/AI-Notes-Summarizer',
    image: 'assests/photos/AI Notes Summarizer thumbnail.png',
    video: 'https://drive.google.com/file/d/1tMox97JhGbLdB5gueDZr-EIKYG4KEfOy/preview',
    category: ['AIML'],
    technologies: ['Python', 'NLP', 'Machine Learning']
    },
    {
    title: 'Stock Price Forecasting with LSTM',
    description: 'Utilized Long Short-Term Memory (LSTM) models to forecast stock prices. This project demonstrates skills in time-series analysis, deep learning, and data visualization for financial applications.',
    link: 'https://github.com/21A91A6128/Stock-Price-Forecasting-with-LSTM',
    image: 'assests/photos/Stock Price Prediction Using LSTM thumbnail.png',
    video: 'https://drive.google.com/file/d/1FHLt6nifrVwrKgpV-0q8nA5JD6GtuSV5/preview',
    category: ['AIML', 'Coding'],
    technologies: ['Python', 'LSTM', 'Time Series Analysis']
    },
    {
    title: 'Snake Game Using A* Algorithm',
    description: 'Developed a classic Snake game with an AI-powered player that uses the A* search algorithm to find the optimal path to food. This project highlights a strong understanding of algorithms, AI pathfinding, and game development.',
    link: 'https://github.com/Jay-Ryali-11/Projects/tree/main/Snake%20game%20using%20A*%20algorithm',
    image: 'https://raw.githubusercontent.com/21A91A6128/Snake-Game-Using-A-algorithm/refs/heads/main/outputs/pic.png',
    video: 'https://drive.google.com/file/d/1p0GrMCCcWPnaBdlqRtgKKnh9q9gWqktm/preview',
    category: ['Coding'],
    technologies: ['Java', 'A* Algorithm']
    },
    {
    title: 'Soil Quality Prediction using ML',
    description: 'Engineered a machine learning model to predict soil quality based on various environmental factors. The project showcases expertise in data preprocessing, model training, and delivering solutions for environmental and agricultural applications.',
    link: 'https://github.com/21A91A6128/Soil-Quality-Prediction-using-ML',
    category: ['AIML'],
    technologies: ['Python', 'Scikit-learn', 'Machine Learning']
    },
],
achievements: [
    {
        title: 'Surpassed 250+ problem-solving challenges',
        issuer: 'GeeksforGeeks',
        link: 'https://www.geeksforgeeks.org/user/21a91a6128/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user',
        image: 'assests/photos/gfg logo.png'
    },
    {
        title: 'Conquered 200+ problem sets',
        issuer: 'Leetcode',
        link: 'https://leetcode.com/u/21A91A6128/',
        image: 'assests/photos/lc logo.png'
    },
    {
        title: 'Attained 2-star coder status',
        issuer: 'Codechef',
        link: 'https://www.codechef.com/users/sri_vardhan11',
        image: 'assests/photos/cc2 logo.png'
    },
    {
        title: 'Earned 5-star accolades',
        issuer: 'Hackerrank (C & Python)',
        link: 'https://www.hackerrank.com/profile/21A91A6128',
        image: 'assests/photos/hr logo.png'
    },
    {
        title: 'Awarded runner-up positions (x2)',
        issuer: 'Code Carnival events',
        link: 'https://www.linkedin.com/posts/jaya-sai-sri-vardhan-ryali_codecarnivalwinners-codingchampions-codecarnival-activity-7111715260423708672-TZM0?utm_source=share&utm_medium=member_android&rcm=ACoAADsVVOcBR5IKLBiDUAoA_xjbhy8-270muUc',
        image: 'assests/photos/ccr logo.png'
    },
    {
        title: 'Secured 3rd position',
        issuer: 'Code Quill coding event',
        link: 'https://unstop.com/hackathons/code-quill-cysentia-university-college-of-engineering-narasaraopet-andhra-pradesh-939215/coding-challenge/165236',
        image: 'assests/photos/cq logo.png'
    },
],
certifications: [
    {
        name: 'AWS Academy Certified Cloud practitioner',
        issuer: 'Amazon Web Services, November 2023',
        link: 'https://www.credly.com/badges/c5eb9bf0-bd9d-47a8-ba6c-e80fb68bf7d9/public_url',
        image: 'assests/photos/aws badge.png',
        modalImage: 'assests/photos/aws cert.png'
    },
    {
        name: 'Red Hat Certified System Administrator (RHCSA)',
        issuer: 'Red Hat, July 2023',
        link: 'https://www.credly.com/badges/27ed5632-8c67-4af1-9400-2bb56480296d/public_url',
        image: 'assests/photos/rh2 badge.png',
        modalImage: 'assests/photos/rh cert.png'
    },
    {
        name: 'Hackerrank SQL (Basic)',
        issuer: 'Hackerrank, April 2023',
        link: 'https://www.hackerrank.com/certificates/c00f4bb43338',
        image: 'assests/photos/hr badge.png',
        modalImage: 'assests/photos/hr sql cert.png'
    },
    {
        name: 'Hackerrank Java (Basic)',
        issuer: 'Hackerrank, December 2022',
        link: 'https://www.hackerrank.com/certificates/6816a9aca26f',
        image: 'assests/photos/hr badge.png',
        modalImage: 'assests/photos/hr java cert.png'
    },
    {
        name: 'IT Specialist- Python',
        issuer: 'Certiport, August 2022',
        link: 'https://www.credly.com/badges/af5cb3d1-f776-4169-a1b8-c7a023dd4a6f/public_url',
        image: 'assests/photos/pr badge.png',
        modalImage: 'assests/photos/pr cert.png'
    }
],
};

let currentPage = 1;
const projectsPerPage = 4;
let filteredProjects = [];

document.addEventListener('DOMContentLoaded', () => {
    // Scroll to the top of the page on load
    window.scrollTo(0, 0);

    // Initialize Lucide icons
    lucide.createIcons();

    // Helper function to get the latest date from a duration string
    const getLatestDate = (durationString) => {
        let lastDatePart;
        // Handle multiple date ranges, e.g., "Feb 2023 - Mar 2023, Jan 2024 - Feb 2024"
        const dateRanges = durationString.split(',').map(s => s.trim());
        const latestRange = dateRanges[dateRanges.length - 1];

        // First, try splitting by '–' (long dash)
        const longDashParts = latestRange.split('–');
        if (longDashParts.length > 1) {
            lastDatePart = longDashParts[longDashParts.length - 1];
        } else {
            // If not found, try splitting by '-' (short dash)
            const shortDashParts = latestRange.split('-');
            if (shortDashParts.length > 1) {
                lastDatePart = shortDashParts[shortDashParts.length - 1];
            } else {
                lastDatePart = latestRange;
            }
        }
        
        // Clean up the last part
        const dateString = lastDatePart.trim().split(' ').slice(0, 2).join(' '); // Get month and year
        
        // Try to parse as a Date object. If it fails, return a default date
        const parsedDate = new Date(dateString);
        return isNaN(parsedDate) ? new Date(0) : parsedDate;
    };

    // Dynamically inject timeline content
    const populateTimeline = (id, data) => {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = data.map((item, index) => {
            const isRight = index % 2 !== 0; // Check if the item should be on the right side
            const timelineClass = isRight ? 'timeline-item timeline-right' : 'timeline-item';
            const content = item.type === 'Education' ? `
                <p class="text-lg text-gray-700">${item.school}</p>
                <p class="text-gray-500 text-sm">${item.location} | ${item.duration}</p>
                <p class="text-gray-600 mt-4 leading-relaxed">
                ${item.gpa ? `GPA: <span class="text-blue-500 font-semibold">${item.gpa}</span>` : ''}
                ${item.percentage ? `${item.gpa ? ' | ' : ''}Percentage: <span class="text-blue-500 font-semibold">${item.percentage}</span>` : ''}
                </p>
            ` : `
                <p class="text-lg text-gray-700">${item.company}</p>
                <p class="text-gray-500 text-sm">${item.location} | ${item.duration}</p>
                <p class="text-gray-600 mt-4 leading-relaxed">${item.description}</p>
            `;

            return `
                <div class="${timelineClass}">
                    <div class="bg-white p-6 rounded-xl shadow-lg border border-blue-200 hover:border-blue-500 transition-colors duration-300">
                        <div class="flex items-center mb-2">
                            <span class="lucide-icon mr-4 text-blue-500" data-lucide="${item.icon}"></span>
                            <h3 class="text-xl font-semibold text-gray-900">${item.degree || item.title}</h3>
                        </div>
                        ${content}
                    </div>
                </div>
            `;
        }).join('');
        lucide.createIcons();
    };
    
    // Sort experience chronologically (reverse)
    const sortedExperience = portfolioData.experience.sort((a, b) => getLatestDate(b.duration) - getLatestDate(a.duration));
    populateTimeline('education-timeline', portfolioData.education);
    populateTimeline('experience-timeline', sortedExperience);

    // Intersection Observer for the timeline items
    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        timelineObserver.observe(item);
    });

    // Function to filter and populate projects
    const projects = portfolioData.projects;
    const projectsContainer = document.getElementById('projects-content');
    const paginationContainer = document.getElementById('pagination-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectModal = document.getElementById('project-modal');
    const closeProjectModalBtn = document.getElementById('close-project-modal');

    const populateModal = (project) => {
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-description').textContent = project.description;
        document.getElementById('modal-github-link').href = project.link;
        
        const techListContainer = document.getElementById('modal-tech-list');
        techListContainer.innerHTML = project.technologies.map(tech => `
            <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">${tech}</span>
        `).join('');

        // Placeholder for video demo
        const videoContainer = document.getElementById('modal-video-container');
        if (project.video) {
            videoContainer.innerHTML = `
                <iframe 
                    src="${project.video}" 
                    title="Video demo for ${project.title}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen 
                    class="w-full h-full rounded-lg"
                ></iframe>
            `;
        } else {
            videoContainer.innerHTML = `
                <img 
                    src="https://placehold.co/800x450/e0f2fe/3b82f6?text=Video+Demo+for+${encodeURIComponent(project.title)}" 
                    alt="Video demo placeholder" 
                    class="w-full rounded-lg" 
                />
            `;
        }
        
        projectModal.classList.add('show');
        lucide.createIcons();
    };

    const closeProjectModal = () => {
        projectModal.classList.remove('show');
    };

    projectsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-project-btn')) {
            const projectTitle = e.target.dataset.projectTitle;
            const project = projects.find(proj => proj.title === projectTitle);
            if (project) {
                populateModal(project);
            }
        }
    });

    closeProjectModalBtn.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeProjectModal();
        }
    });

    const populateProjects = (projectsToDisplay) => {
    if (projectsContainer) {
        projectsContainer.innerHTML = projectsToDisplay.map(proj => `
        <div class="bg-white p-6 rounded-xl shadow-lg border border-blue-200 hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2">
            <img 
            src="${proj.image || `https://placehold.co/400x200/e0f2fe/3b82f6?text=${encodeURIComponent(proj.title)}`}" 
            alt="${proj.title}" 
            class="w-full rounded-md mb-4 object-cover" 
            />
            <div class="flex items-center mb-4">
            <span class="lucide-icon mr-4 text-blue-500" data-lucide="code"></span>
            <h3 class="text-xl font-semibold text-gray-900">${proj.title}</h3>
            </div>
            <p class="text-gray-600 leading-relaxed">${proj.description}</p>
            <div class="flex flex-wrap gap-2 mt-4">
            ${proj.technologies.map(tech => `
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">${tech}</span>
            `).join('')}
            </div>
            ${proj.link ? `<button class="view-project-btn mt-4 inline-block text-blue-500 hover:text-blue-400 font-medium transition-colors duration-300" data-project-title="${proj.title}">View Project &rarr;</button>` : ''}
        </div>
        `).join('');
    }
    lucide.createIcons();
    };

    const createPagination = (totalProjects, activePage) => {
        if (!paginationContainer) return;
        const totalPages = Math.ceil(totalProjects / projectsPerPage);
        
        let paginationHtml = '';
        for (let i = 1; i <= totalPages; i++) {
            const isActive = i === activePage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500';
            paginationHtml += `<button class="page-btn py-2 px-4 rounded-full shadow-md transition-colors duration-300 hover:bg-blue-100 ${isActive}" data-page="${i}">${i}</button>`;
        }
        paginationContainer.innerHTML = paginationHtml;

        // Add event listeners to new pagination buttons
        document.querySelectorAll('.page-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                currentPage = parseInt(e.target.dataset.page);
                const start = (currentPage - 1) * projectsPerPage;
                const end = start + projectsPerPage;
                populateProjects(filteredProjects.slice(start, end));
                
                // Update active button state for pagination
                document.querySelectorAll('.page-btn').forEach(btn => {
                    btn.classList.remove('bg-blue-500', 'text-white');
                    btn.classList.add('bg-white', 'text-blue-500');
                });
                e.target.classList.add('bg-blue-500', 'text-white');
                e.target.classList.remove('bg-white', 'text-blue-500');
                
                // Scroll to the projects section
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            });
        });
    };

    const filterProjects = (category) => {
    currentPage = 1; // Reset page on filter change
    if (category === 'All') {
        filteredProjects = projects;
    } else {
        filteredProjects = projects.filter(proj => proj.category.includes(category));
    }
    const start = (currentPage - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    populateProjects(filteredProjects.slice(start, end));
    createPagination(filteredProjects.length, currentPage);

    // Update active button state
    filterButtons.forEach(btn => {
        if (btn.dataset.filter === category) {
        btn.classList.add('bg-blue-500', 'text-white');
        btn.classList.remove('bg-white', 'text-blue-500');
        } else {
        btn.classList.remove('bg-blue-500', 'text-white');
        btn.classList.add('bg-white', 'text-blue-500');
        }
    });
    // Scroll to the projects section
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        filterProjects(e.target.dataset.filter);
    });
    });

    // Initial population of projects and pagination
    filterProjects('All');
    
    // Populate Skills section with a better dashboard layout
    const skillsContainer = document.getElementById('skills-content');
    if (skillsContainer) {
    skillsContainer.innerHTML = Object.keys(portfolioData.skills).map(category => `
        <div class="skill-card-item bg-white p-6 rounded-xl shadow-lg border border-blue-200 transition-transform duration-300 hover:translate-y-[-8px]">
        <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <span class="lucide-icon mr-3 text-blue-500" data-lucide="${category.includes('Cloud') ? 'cloud' : category.includes('Soft') ? 'users' : 'book-open'}"></span>
            ${category}
        </h3>
        <div class="flex flex-wrap gap-2">
            ${portfolioData.skills[category].map(skill => `
            <span class="skill-badge bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium transition-colors duration-300">${skill}</span>
            `).join('')}
        </div>
        </div>
    `).join('');
    }
    
    // Populate Certifications section
    const certificationsContainer = document.getElementById('certifications-content');
    const certModal = document.getElementById('cert-modal');
    const closeCertModalBtn = document.getElementById('close-cert-modal');
    
    const populateCertModal = (cert) => {
    document.getElementById('cert-modal-title').textContent = cert.name;
    document.getElementById('cert-modal-image').src = cert.image;
    document.getElementById('cert-modal-image').src = cert.modalImage;
    document.getElementById('cert-modal-verify-link').href = cert.link;
    
    certModal.classList.add('show');
    lucide.createIcons();
    };

    const closeCertModal = () => {
    certModal.classList.remove('show');
    };

    if (certificationsContainer) {
        certificationsContainer.innerHTML = portfolioData.certifications.map(cert => `
            <div class="cert-card bg-white p-6 rounded-xl shadow-lg border border-blue-200 transition-transform duration-300 hover:translate-y-[-8px]">
                <div class="flex items-center mb-4">
                    <div class="image-circle-container">
                        <img src="${cert.image}" alt="${cert.name} logo" class="cert-image w-full h-full object-cover transition-transform duration-300" />
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">${cert.name}</h3>
                        <p class="text-gray-500 text-sm">${cert.issuer}</p>
                    </div>
                </div>
                <button class="view-cert-btn mt-2 inline-block text-blue-500 hover:text-blue-400 font-medium transition-colors duration-300" data-cert-name="${cert.name}">View Certificate &rarr;</button>
            </div>
        `).join('');

        certificationsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-cert-btn')) {
                const certName = e.target.dataset.certName;
                const cert = portfolioData.certifications.find(c => c.name === certName);
                if (cert) {
                    populateCertModal(cert);
                }
            }
        });

        closeCertModalBtn.addEventListener('click', closeCertModal);
        certModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                closeCertModal();
            }
        });
    }
    
    // Populate Achievements section
    const achievementsContainer = document.getElementById('achievements-content');
    if (achievementsContainer) {
        achievementsContainer.innerHTML = portfolioData.achievements.map(achiev => `
            <div class="achiev-card bg-white p-6 rounded-xl shadow-lg border border-blue-200 transition-transform duration-300 hover:translate-y-[-8px]">
                <a href="${achiev.link}" target="_blank" rel="noopener noreferrer" class="block">
                    <div class="flex items-center space-x-4 mb-4">
                        <div class="achiev-image-container">
                            <img src="${achiev.image}" alt="${achiev.issuer} logo" class="achiev-logo w-full h-full object-cover transition-transform duration-300" />
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">${achiev.title}</h3>
                            <p class="text-gray-500 text-sm">${achiev.issuer}</p>
                        </div>
                    </div>
                </a>
                <a href="${achiev.link}" target="_blank" rel="noopener noreferrer" class="mt-2 inline-block text-blue-500 hover:text-blue-400 font-medium transition-colors duration-300">View Achievement &rarr;</a>
            </div>
        `).join('');
    }

    // Populate Contact Details section with more social media icons
    const contactDetails = document.getElementById('contact-details');
    if (contactDetails) {
        contactDetails.innerHTML = `
            <div class="flex items-center space-x-4">
                <span class="lucide-icon text-blue-500" data-lucide="mail" style="width: 32px; height: 32px;"></span>
                <a href="mailto:${portfolioData.contact.email}" class="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">jayasaisrivardhanryali@gmail.com</a>
            </div>
            <div class="flex items-center space-x-4">
                <span class="lucide-icon text-blue-500" data-lucide="linkedin" style="width: 32px; height: 32px;"></span>
                <a href="${portfolioData.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">LinkedIn</a>
            </div>
            <div class="flex items-center space-x-4">
                <span class="lucide-icon text-blue-500" data-lucide="github" style="width: 32px; height: 32px;"></span>
                <a href="${portfolioData.contact.github}" target="_blank" rel="noopener noreferrer" class="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">GitHub</a>
            </div>
        `;
        lucide.createIcons();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Check if the link is an internal anchor and prevent the default action
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu .nav-link');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
    });

    closeMobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
        });
    });

    // Highlight active navigation link on scroll and handle theme change
    const sections = document.querySelectorAll('main section');
    const desktopNavLinks = document.querySelectorAll('.main-nav-link');
    const body = document.body;
    const header = document.getElementById('navbar');

    // This function will toggle the theme
    const toggleTheme = (isLight) => {
        if (isLight) {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            header.classList.remove('header-dark');
            header.classList.add('header-light');
            desktopNavLinks.forEach(link => {
                link.classList.remove('text-white', 'hover:text-blue-400');
                link.classList.add('text-gray-600', 'hover:text-blue-500');
            });
            document.querySelector('.header-fixed .text-xl').classList.remove('text-white');
            document.querySelector('.header-fixed .text-xl').classList.add('text-gray-900');
        } else {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            header.classList.remove('header-light');
            header.classList.add('header-dark');
            desktopNavLinks.forEach(link => {
                link.classList.remove('text-gray-600', 'hover:text-blue-500');
                link.classList.add('text-white', 'hover:text-blue-400');
            });
            document.querySelector('.header-fixed .text-xl').classList.remove('text-gray-900');
            document.querySelector('.header-fixed .text-xl').classList.add('text-white');
        }
    };

    const onScroll = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        // Toggle theme based on scroll position
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
        if (window.scrollY >= aboutSection.offsetTop - 100) {
            toggleTheme(true);
        } else {
            toggleTheme(false);
        }
        } else {
        // Default to dark theme if no about section is found
        toggleTheme(false);
        }

        // Highlight active navigation link
        desktopNavLinks.forEach(link => {
            link.classList.remove('border-b-2', 'border-blue-500', 'text-blue-500');
            const linkHref = link.getAttribute('href');
            if (linkHref && linkHref.includes(current)) {
                link.classList.add('border-b-2', 'border-blue-500', 'text-blue-500');
            }
        });
    };

    window.addEventListener('scroll', onScroll);

    // Scroll to top button functionality
    const scrollToTopButton = document.getElementById('scroll-to-top');

    const checkScrollTop = () => {
        if (window.pageYOffset > 400) {
            scrollToTopButton.classList.remove('hidden');
            scrollToTopButton.classList.add('fade-in');
        } else {
            scrollToTopButton.classList.add('hidden');
            scrollToTopButton.classList.remove('fade-in');
        }
    };

    window.addEventListener('scroll', checkScrollTop);
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        onScroll(); // Run onScroll once to set initial theme
    }, 100);
});
});


// Contact form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;  // If you want to include subject
    const message = document.getElementById('message').value;

    try {
      // Send the data to the backend API (Vercel serverless function)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (data.success) {
        // Display success message
        alert(`Thank you for your message, ${name}! Your email was sent successfully.`);
        contactForm.reset();  // Reset form after submission
      } else {
        alert('Error sending email. Please try again later.');
      }
    } catch (error) {
      alert('Error sending email. Please try again later.');
      console.error('Error:', error);
    }
  });
}
