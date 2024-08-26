

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const navLinks = document.querySelectorAll('nav a[data-section]');
    const contentContainer = document.querySelector('main');

    // Check if the user has a preferred theme saved
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Update the theme toggle button based on the current theme
    updateToggleButton();

    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
        updateToggleButton();
    });

    function updateToggleButton() {
        if (body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '<span class="sun">🌞</span>';
        } else {
            themeToggle.innerHTML = '<span class="moon">🌙</span>';
        }
    }

    // Load content based on the section
    function loadContent(section) {
        const content = {
            blog: `
                <section class="recent-posts">
                    <h2>Recent Blog Posts</h2>
                    <div class="grid">
                        <article>
                    <img src="Image-1.svg" alt="UX review presentations" onclick="toggleDescription('desc-1')">
                    <div class="content">
                        <h3><a href="#" onclick="toggleDescription('desc-1')">UX review presentations</a></h3>
                        <p>How do you create compelling presentations that win you new clients?</p>
                        <small>December 10, 2023</small>
                        <div id="desc-1" class="description">
                            <p>In this post, we delve deep into the art of creating UX review presentations that not
                                only impress but also lead to successful client engagements. From understanding the
                                audience to crafting a narrative, learn how to make your presentations stand out.</p>
                        </div>
                    </div>
                </article>
                <article>
                    <img src="Image-2.svg" alt="Grid system for better Design UI" onclick="toggleDescription('desc-2')">
                    <div class="content">
                        <h3><a href="#" onclick="toggleDescription('desc-2')">Grid system for better Design UI</a></h3>
                        <p>Understanding the principles of grid systems for better UI/UX.</p>
                        <small>December 9, 2023</small>
                        <div id="desc-2" class="description">
                            <p>Explore how grid systems can dramatically improve the structure and flow of your design
                                projects. We cover the fundamentals of grid design, its benefits, and practical
                                applications to elevate your UI/UX game.Explore how grid systems can dramatically
                                improve the structure and flow of your design projects. We cover the fundamentals of
                                grid design, its benefits, and practical applications to elevate your UI/UX game.</p>
                        </div>
                    </div>
                </article>
                <article>
                    <img src="Image-7.svg" alt="Bill Walsh leadership lessons" onclick="toggleDescription('desc-3')">
                    <div class="content">
                        <h3><a href="#" onclick="toggleDescription('desc-3')">Bill Walsh leadership lessons</a></h3>
                        <p>How leaders can learn from the best to guide their teams to success.</p>
                        <small>December 8, 2023</small>
                        <div id="desc-3" class="description">
                            <p>Bill Walsh, a legendary NFL coach, left behind a legacy of leadership that transcends
                                sports. This post examines key lessons from his career that can be applied to any
                                leadership scenario, helping you drive your team to success.</p>
                        </div>
                    </div>
                </article>
                    </div>
                </section>

                <section class="all-posts">
                    <h2>All Blog Posts</h2>
                    <div class="grid">
                        <article>
                    <img src="Image-4.svg" alt="PM mental models" onclick="toggleDescription('desc-4')">
                    <div class="content">
                        <h3><a href="#" onclick="toggleDescription('desc-4')">PM mental models</a></h3>
                        <p>Improving decision-making through mental models used by top PMs.</p>
                        <small>December 7, 2023</small>
                        <div id="desc-4" class="description">
                            <p>Learn about the mental models that top project managers use to navigate complex decisions
                                and deliver successful projects. These models will give you a strategic edge in your own
                                project management journey.</p>
                        </div>
                    </div>
                </article>
                <article>
                    <img src="Image-5.svg" alt="New Design Trends" onclick="toggleDescription('desc-5')">
                    <div class="content">
                        <h3><a href="#" onclick="toggleDescription('desc-5')">New Design Trends</a></h3>
                        <p>Stay ahead of the curve with these emerging design trends.</p>
                        <small>December 6, 2023</small>
                        <div id="desc-5" class="description">
                            <p>Design is constantly evolving. In this article, we identify and explore the latest trends
                                that are set to shape the future of the industry. Stay ahead by incorporating these
                                trends into your work.</p>
                        </div>
                    </div>
                </article>
                <article>
                    <img src="Image-6.svg" alt="Effective Team Collaboration" onclick="toggleDescription('desc-6')">
                    <div class="content">
                        <h3><a href="#" onclick="toggleDescription('desc-6')">Effective Team Collaboration</a></h3>
                        <p>Strategies to enhance teamwork and achieve project goals.</p>
                        <small>December 5, 2023</small>
                        <div id="desc-6" class="description">
                            <p>Collaboration is key to any successful project. This post outlines strategies to improve
                                teamwork, foster better communication, and ensure that your team achieves its objectives
                                efficiently.</p>
                        </div>
                    </div>
                </article>
                    </div>
                </section>
             `,
            projects: `
                <section class="projects">
                    <h2>Featured Projects</h2>
                    <div class="grid">
                        <article>
                            <img src="Image-11.svg" alt="Project One">
                            <div class="content">
                                <h3><a href="#">Project One</a></h3>
                                <p>A brief description of Project One. This project involved creating an innovative solution
                                    to a complex problem, with a focus on user-centered design.</p>
                                <small>Completed: January 2024</small>
                            </div>
                        </article>
                        <article>
                            <img src="Image-9.svg" alt="Project Two">
                            <div class="content">
                                <h3><a href="#">Project Two</a></h3>
                                <p>Project Two highlights the development of a cutting-edge application that addresses specific
                                    industry needs through sophisticated technology.</p>
                                <small>Completed: March 2024</small>
                            </div>
                        </article>
                        <article>
                            <img src="Image-10.svg" alt="Project Two">
                            <div class="content">
                                <h3><a href="#">Project Three</a></h3>
                                <p>Project Three highlights the development of a cutting-edge application that addresses specific
                                    industry needs through sophisticated technology.</p>
                                <small>Completed: March 2024</small>
                            </div>
                        </article>
                        <!-- Add more projects here -->
                    </div>
                </section>
                <section class="all-projects">
                    <h2>All Projects</h2>
                    <div class="grid">
                        <!-- All projects go here -->
                    </div>
                </section>
            `,
            about: `
                <section class="about">
                    <h2>About Me</h2>
                    <p>Hello! I'm Vandana Pandey, a passionate UX/UI designer with a knack for creating engaging and
                        user-friendly digital experiences. With over five years of experience in the design industry, I
                        specialize in crafting intuitive interfaces and seamless user journeys.</p>
                    <p>Throughout my career, I've worked on various projects ranging from mobile apps to complex web
                        applications. My approach combines creative design with user-centered thinking to deliver
                        solutions that not only meet but exceed client expectations.</p>
                    <p>In addition to my design work, I'm an avid speaker at industry conferences and contribute to
                        design communities to stay updated with the latest trends and best practices.</p>
                    <p>When I'm not designing, you can find me exploring new technologies, reading design books, or
                        traveling to get inspired by different cultures.</p>
                </section>
            `
        };

        contentContainer.innerHTML = content[section] || content['blog'];
        updatePageTitle(section);
    }

    function updatePageTitle(section) {
        const titles = {
            blog: 'THE BLOG',
            projects: 'PROJECTS',
            about: 'ABOUT ME'
        };
        document.querySelector('.header-title h1').textContent = titles[section] || 'Vandana Pandey';
    }

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const section = this.getAttribute('data-section');
            loadContent(section);
        });
    });

    // Load the default content
    loadContent('blog');
});

function toggleDescription(id) {
    const description = document.getElementById(id);
    const isActive = description.classList.contains('active');
    
    document.querySelectorAll('.description').forEach(desc => {
        desc.classList.remove('active');
    });
    
    if (!isActive) {
        description.classList.add('active');
    }
}
