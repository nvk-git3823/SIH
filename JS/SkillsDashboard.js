/* =========================================================
   DASHBOARD.JS
   Skills Dashboard
========================================================= */


/* =========================================================
   SKILLS DATABASE
========================================================= */

const DefaultSkills = [

    /* =========================
       TECHNICAL SKILLS
    ========================= */

    {
        name: "HTML",
        category: "technical",
        icon: "</>",
        level: 90,
        description: "Building structured and semantic web pages."
    },

    {
        name: "CSS",
        category: "technical",
        icon: "#",
        level: 85,
        description: "Creating responsive and modern user interfaces."
    },

    {
        name: "JavaScript",
        category: "technical",
        icon: "JS",
        level: 80,
        description: "Developing interactive web applications."
    },

    {
        name: "TypeScript",
        category: "technical",
        icon: "TS",
        level: 70,
        description: "Developing strongly typed JavaScript applications."
    },

    {
        name: "React",
        category: "technical",
        icon: "⚛",
        level: 75,
        description: "Building component-based web applications."
    },

    {
        name: "Angular",
        category: "technical",
        icon: "A",
        level: 65,
        description: "Developing structured frontend applications."
    },

    {
        name: "Vue.js",
        category: "technical",
        icon: "V",
        level: 65,
        description: "Building modern reactive web interfaces."
    },

    {
        name: "Node.js",
        category: "technical",
        icon: "N",
        level: 70,
        description: "Building server-side JavaScript applications."
    },

    {
        name: "Express.js",
        category: "technical",
        icon: "EX",
        level: 65,
        description: "Creating backend APIs using Node.js."
    },

    {
        name: "Python",
        category: "technical",
        icon: "Py",
        level: 80,
        description: "Programming, automation and application development."
    },

    {
        name: "Java",
        category: "technical",
        icon: "J",
        level: 70,
        description: "Object-oriented application development."
    },

    {
        name: "C",
        category: "technical",
        icon: "C",
        level: 75,
        description: "Programming fundamentals and problem-solving."
    },

    {
        name: "C++",
        category: "technical",
        icon: "C+",
        level: 70,
        description: "Object-oriented programming and algorithms."
    },

    {
        name: "C#",
        category: "technical",
        icon: "C#",
        level: 65,
        description: "Application development using the .NET ecosystem."
    },

    {
        name: "PHP",
        category: "technical",
        icon: "PHP",
        level: 65,
        description: "Server-side web application development."
    },

    {
        name: "SQL",
        category: "technical",
        icon: "DB",
        level: 80,
        description: "Working with relational databases and queries."
    },

    {
        name: "MySQL",
        category: "technical",
        icon: "MY",
        level: 80,
        description: "Managing relational databases and SQL queries."
    },

    {
        name: "PostgreSQL",
        category: "technical",
        icon: "PG",
        level: 65,
        description: "Working with advanced relational databases."
    },

    {
        name: "MongoDB",
        category: "technical",
        icon: "M",
        level: 70,
        description: "Working with document-based databases."
    },

    {
        name: "Firebase",
        category: "technical",
        icon: "F",
        level: 75,
        description: "Authentication, databases and cloud services."
    },

    {
        name: "REST APIs",
        category: "technical",
        icon: "API",
        level: 75,
        description: "Building and integrating web APIs."
    },

    {
        name: "Git",
        category: "technical",
        icon: "G",
        level: 85,
        description: "Version control and collaborative development."
    },

    {
        name: "GitHub",
        category: "technical",
        icon: "GH",
        level: 85,
        description: "Repository management and collaboration."
    },

    {
        name: "Docker",
        category: "technical",
        icon: "D",
        level: 60,
        description: "Containerizing and deploying applications."
    },

    {
        name: "Linux",
        category: "technical",
        icon: "L",
        level: 70,
        description: "Linux operating system and command-line usage."
    },

    {
        name: "AWS",
        category: "technical",
        icon: "AWS",
        level: 60,
        description: "Working with cloud infrastructure and services."
    },

    {
        name: "Microsoft Azure",
        category: "technical",
        icon: "AZ",
        level: 65,
        description: "Microsoft cloud services and infrastructure."
    },

    {
        name: "Data Structures",
        category: "technical",
        icon: "DS",
        level: 75,
        description: "Understanding fundamental data structures."
    },

    {
        name: "Algorithms",
        category: "technical",
        icon: "AL",
        level: 75,
        description: "Algorithm design and computational problem-solving."
    },

    {
        name: "Object-Oriented Programming",
        category: "technical",
        icon: "OOP",
        level: 80,
        description: "Developing software using object-oriented principles."
    },

    {
        name: "Debugging",
        category: "technical",
        icon: "⌁",
        level: 85,
        description: "Finding and resolving software issues."
    },

    {
        name: "Software Testing",
        category: "technical",
        icon: "✓",
        level: 70,
        description: "Testing applications and identifying defects."
    },

    {
        name: "Responsive Web Design",
        category: "technical",
        icon: "R",
        level: 90,
        description: "Creating interfaces for different screen sizes."
    },

    {
        name: "UI Development",
        category: "technical",
        icon: "UI",
        level: 85,
        description: "Developing clean and interactive user interfaces."
    },


    /* =====================================================
       DESIGN & CREATIVE
    ===================================================== */

    {
        name: "UI Design",
        category: "design",
        icon: "UI",
        level: 85,
        description: "Designing clean and intuitive interfaces."
    },

    {
        name: "UX Design",
        category: "design",
        icon: "UX",
        level: 80,
        description: "Creating user-centered digital experiences."
    },

    {
        name: "Figma",
        category: "design",
        icon: "F",
        level: 75,
        description: "Designing interfaces, wireframes and prototypes."
    },

    {
        name: "Adobe Photoshop",
        category: "design",
        icon: "PS",
        level: 70,
        description: "Creating and editing digital graphics."
    },

    {
        name: "Adobe Illustrator",
        category: "design",
        icon: "AI",
        level: 65,
        description: "Creating vector graphics and illustrations."
    },

    {
        name: "Canva",
        category: "design",
        icon: "C",
        level: 85,
        description: "Creating digital graphics and visual content."
    },

    {
        name: "Wireframing",
        category: "design",
        icon: "WF",
        level: 80,
        description: "Planning layouts and interface structures."
    },

    {
        name: "Prototyping",
        category: "design",
        icon: "◇",
        level: 75,
        description: "Creating interactive product prototypes."
    },

    {
        name: "Design Systems",
        category: "design",
        icon: "DS",
        level: 70,
        description: "Creating consistent reusable design patterns."
    },

    {
        name: "Typography",
        category: "design",
        icon: "T",
        level: 75,
        description: "Applying typography principles to interfaces."
    },

    {
        name: "Color Theory",
        category: "design",
        icon: "◉",
        level: 75,
        description: "Using color principles to improve visual design."
    },

    {
        name: "Visual Design",
        category: "design",
        icon: "◆",
        level: 80,
        description: "Creating visually engaging digital experiences."
    },


    /* =====================================================
       DATA & ANALYTICS
    ===================================================== */

    {
        name: "Data Analysis",
        category: "data",
        icon: "▥",
        level: 75,
        description: "Analyzing data to identify useful insights."
    },

    {
        name: "Microsoft Excel",
        category: "data",
        icon: "X",
        level: 85,
        description: "Data organization, formulas and analysis."
    },

    {
        name: "Power BI",
        category: "data",
        icon: "BI",
        level: 70,
        description: "Creating dashboards and data visualizations."
    },

    {
        name: "Tableau",
        category: "data",
        icon: "T",
        level: 65,
        description: "Creating interactive data visualizations."
    },

    {
        name: "Data Visualization",
        category: "data",
        icon: "▤",
        level: 75,
        description: "Presenting information through meaningful visuals."
    },

    {
        name: "Statistics",
        category: "data",
        icon: "Σ",
        level: 70,
        description: "Applying statistical concepts to data."
    },

    {
        name: "Pandas",
        category: "data",
        icon: "PD",
        level: 70,
        description: "Data manipulation and analysis with Python."
    },

    {
        name: "NumPy",
        category: "data",
        icon: "NP",
        level: 65,
        description: "Numerical computing with Python."
    },

    {
        name: "Data Cleaning",
        category: "data",
        icon: "DC",
        level: 75,
        description: "Preparing and cleaning datasets for analysis."
    },

    {
        name: "SQL Analytics",
        category: "data",
        icon: "SQL",
        level: 80,
        description: "Using SQL to analyze and extract data."
    },


    /* =====================================================
       AI & EMERGING TECHNOLOGY
    ===================================================== */

    {
        name: "Artificial Intelligence",
        category: "ai",
        icon: "AI",
        level: 70,
        description: "Understanding AI concepts and applications."
    },

    {
        name: "Machine Learning",
        category: "ai",
        icon: "ML",
        level: 65,
        description: "Building and understanding machine learning models."
    },

    {
        name: "Deep Learning",
        category: "ai",
        icon: "DL",
        level: 60,
        description: "Understanding neural networks and deep learning."
    },

    {
        name: "Generative AI",
        category: "ai",
        icon: "✦",
        level: 80,
        description: "Working with modern generative AI systems."
    },

    {
        name: "Prompt Engineering",
        category: "ai",
        icon: "⌘",
        level: 85,
        description: "Designing effective prompts for AI systems."
    },

    {
        name: "Natural Language Processing",
        category: "ai",
        icon: "NLP",
        level: 60,
        description: "Working with human language and AI systems."
    },

    {
        name: "Computer Vision",
        category: "ai",
        icon: "CV",
        level: 60,
        description: "Processing and understanding visual information."
    },

    {
        name: "TensorFlow",
        category: "ai",
        icon: "TF",
        level: 55,
        description: "Machine learning development with TensorFlow."
    },

    {
        name: "PyTorch",
        category: "ai",
        icon: "PT",
        level: 55,
        description: "Machine learning development with PyTorch."
    },

    {
        name: "OpenAI APIs",
        category: "ai",
        icon: "AI",
        level: 70,
        description: "Integrating generative AI capabilities into applications."
    },

    {
        name: "Google Gemini APIs",
        category: "ai",
        icon: "G",
        level: 70,
        description: "Building applications using Gemini AI capabilities."
    },


    /* =====================================================
       IT & SUPPORT
    ===================================================== */

    {
        name: "Technical Support",
        category: "support",
        icon: "⚙",
        level: 85,
        description: "Diagnosing and resolving technical issues."
    },

    {
        name: "Troubleshooting",
        category: "support",
        icon: "⌁",
        level: 90,
        description: "Identifying problems and finding practical solutions."
    },

    {
        name: "Hardware Troubleshooting",
        category: "support",
        icon: "▣",
        level: 80,
        description: "Diagnosing computer hardware problems."
    },

    {
        name: "Software Troubleshooting",
        category: "support",
        icon: "⚙",
        level: 85,
        description: "Diagnosing and resolving software issues."
    },

    {
        name: "Network Troubleshooting",
        category: "support",
        icon: "⌁",
        level: 75,
        description: "Diagnosing connectivity and networking problems."
    },

    {
        name: "Operating Systems",
        category: "support",
        icon: "OS",
        level: 85,
        description: "Understanding and working with operating systems."
    },

    {
        name: "Windows",
        category: "support",
        icon: "⊞",
        level: 90,
        description: "Windows operating system administration and support."
    },

    {
        name: "Linux",
        category: "support",
        icon: "L",
        level: 70,
        description: "Linux system usage and administration."
    },

    {
        name: "Microsoft 365",
        category: "support",
        icon: "M",
        level: 80,
        description: "Working with Microsoft productivity services."
    },

    {
        name: "Active Directory",
        category: "support",
        icon: "AD",
        level: 60,
        description: "Managing users, groups and directory services."
    },

    {
        name: "IT Service Management",
        category: "support",
        icon: "IT",
        level: 65,
        description: "Managing and supporting IT service processes."
    },

    {
        name: "System Administration",
        category: "support",
        icon: "SA",
        level: 65,
        description: "Managing computer systems and infrastructure."
    },

    {
        name: "Network Administration",
        category: "support",
        icon: "NA",
        level: 65,
        description: "Managing networks and network infrastructure."
    },

    {
        name: "Cybersecurity Basics",
        category: "support",
        icon: "🔒",
        level: 70,
        description: "Understanding fundamental cybersecurity practices."
    },


    /* =====================================================
       BUSINESS & PROFESSIONAL
    ===================================================== */

    {
        name: "Project Management",
        category: "professional",
        icon: "◈",
        level: 75,
        description: "Planning and organizing project activities."
    },

    {
        name: "Agile",
        category: "professional",
        icon: "↻",
        level: 75,
        description: "Working with iterative development methodologies."
    },

    {
        name: "Scrum",
        category: "professional",
        icon: "S",
        level: 70,
        description: "Working within Agile Scrum environments."
    },

    {
        name: "Requirements Analysis",
        category: "professional",
        icon: "RA",
        level: 75,
        description: "Understanding and documenting project requirements."
    },

    {
        name: "Documentation",
        category: "professional",
        icon: "▤",
        level: 85,
        description: "Creating clear technical and project documentation."
    },

    {
        name: "Research",
        category: "professional",
        icon: "⌕",
        level: 85,
        description: "Collecting and analyzing relevant information."
    },

    {
        name: "Business Analysis",
        category: "professional",
        icon: "BA",
        level: 65,
        description: "Analyzing business needs and requirements."
    },

    {
        name: "Critical Thinking",
        category: "professional",
        icon: "◇",
        level: 85,
        description: "Analyzing situations and evaluating solutions."
    },

    {
        name: "Decision Making",
        category: "professional",
        icon: "DM",
        level: 80,
        description: "Evaluating options and making informed decisions."
    },

    {
        name: "Time Management",
        category: "professional",
        icon: "◷",
        level: 85,
        description: "Planning and prioritizing tasks effectively."
    },

    {
        name: "Organization",
        category: "professional",
        icon: "▦",
        level: 85,
        description: "Organizing tasks, information and priorities."
    },

    {
        name: "Leadership",
        category: "professional",
        icon: "★",
        level: 75,
        description: "Guiding teams and taking responsibility."
    },


    /* =====================================================
       SOFT SKILLS
    ===================================================== */

    {
        name: "Communication",
        category: "soft",
        icon: "◈",
        level: 90,
        description: "Communicating ideas clearly and effectively."
    },

    {
        name: "Teamwork",
        category: "soft",
        icon: "∞",
        level: 90,
        description: "Collaborating effectively with team members."
    },

    {
        name: "Collaboration",
        category: "soft",
        icon: "◎",
        level: 90,
        description: "Working productively with different people."
    },

    {
        name: "Problem Solving",
        category: "soft",
        icon: "✦",
        level: 90,
        description: "Finding practical solutions to complex problems."
    },

    {
        name: "Adaptability",
        category: "soft",
        icon: "↗",
        level: 90,
        description: "Adapting effectively to changing environments."
    },

    {
        name: "Creativity",
        category: "soft",
        icon: "✦",
        level: 85,
        description: "Generating new ideas and creative solutions."
    },

    {
        name: "Presentation",
        category: "soft",
        icon: "▣",
        level: 80,
        description: "Presenting ideas clearly to an audience."
    },

    {
        name: "Public Speaking",
        category: "soft",
        icon: "PS",
        level: 75,
        description: "Communicating ideas confidently to audiences."
    },

    {
        name: "Active Listening",
        category: "soft",
        icon: "◉",
        level: 85,
        description: "Understanding information and responding thoughtfully."
    },

    {
        name: "Conflict Resolution",
        category: "soft",
        icon: "CR",
        level: 70,
        description: "Handling disagreements constructively."
    },

    {
        name: "Emotional Intelligence",
        category: "soft",
        icon: "EI",
        level: 75,
        description: "Understanding emotions and interpersonal situations."
    },

    {
        name: "Attention to Detail",
        category: "soft",
        icon: "⌖",
        level: 90,
        description: "Maintaining accuracy and quality in work."
    },

    {
        name: "Accountability",
        category: "soft",
        icon: "✓",
        level: 90,
        description: "Taking responsibility for tasks and outcomes."
    },

    {
        name: "Self-Motivation",
        category: "soft",
        icon: "⚡",
        level: 90,
        description: "Maintaining motivation and productivity independently."
    },

    {
        name: "Work Ethic",
        category: "soft",
        icon: "◆",
        level: 90,
        description: "Demonstrating commitment and professional discipline."
    },

    {
        name: "Continuous Learning",
        category: "soft",
        icon: "↗",
        level: 95,
        description: "Continuously developing new knowledge and skills."
    }

];



/* =========================================================
   USER DATA
========================================================= */

function GetUserData() {

    const StoredData =
        localStorage.getItem("Data");

    if (!StoredData) {
        return null;
    }

    try {

        const ResponseData =
            JSON.parse(StoredData);

        if (Array.isArray(ResponseData)) {
            return ResponseData[0];
        }

        return ResponseData;

    } catch (error) {

        console.error(
            "Unable to read user data:",
            error
        );

        return null;
    }
}



/* =========================================================
   LOAD USERNAME
========================================================= */

function LoadUsername() {

    const UserData =
        GetUserData();

    const UsernameElement =
        document.getElementById("Username");

    if (!UsernameElement) {
        return;
    }

    if (
        UserData &&
        UserData["Username"]
    ) {

        UsernameElement.textContent =
            UserData["Username"];

    } else {

        UsernameElement.textContent =
            "Profile";
    }
}



/* =========================================================
   GET SKILLS
========================================================= */

function GetSkills() {

    const UserData =
        GetUserData();


    /*
        If the backend/localStorage already
        contains Skills, use them.
    */

    if (
        UserData &&
        UserData["Skills"]
    ) {

        const StoredSkills =
            UserData["Skills"];


        /*
            Skills stored as an array
        */

        if (Array.isArray(StoredSkills)) {

            return StoredSkills;
        }


        /*
            Skills stored as comma-separated text

            Example:
            HTML,CSS,JavaScript
        */

        if (
            typeof StoredSkills === "string"
        ) {

            const SkillNames =
                StoredSkills
                    .split(",")
                    .map(skill => skill.trim())
                    .filter(
                        skill =>
                            skill.length > 0
                    );


            if (SkillNames.length > 0) {

                return SkillNames.map(
                    skill => ({

                        name: skill,

                        category: "technical",

                        icon: "✦",

                        level: 75,

                        description:
                            "Skill added to your profile."

                    })
                );
            }
        }
    }


    /*
        If there are no user skills,
        use the professional skill catalog.
    */

    return DefaultSkills;
}



/* =========================================================
   GET CATEGORY NAME
========================================================= */

function GetCategoryName(category) {

    const Categories = {

        technical: "Technical",

        design: "Design",

        data: "Data & Analytics",

        ai: "AI & Emerging",

        support: "IT & Support",

        professional: "Professional",

        soft: "Soft Skill"
    };


    return Categories[category] ||
        "Skill";
}



/* =========================================================
   DISPLAY SKILLS
========================================================= */

function DisplaySkills(
    skills = GetSkills(),
    filter = "all",
    search = ""
) {

    const SkillsGrid =
        document.getElementById(
            "SkillsGrid"
        );

    const NoSkills =
        document.getElementById(
            "NoSkills"
        );

    const SkillCount =
        document.getElementById(
            "SkillCount"
        );


    if (!SkillsGrid) {
        return;
    }


    /*
        Filter by category
    */

    let FilteredSkills =
        skills.filter(skill => {

            if (filter === "all") {
                return true;
            }

            return skill.category === filter;
        });


    /*
        Search by name,
        category or description
    */

    if (
        search &&
        search.trim() !== ""
    ) {

        const SearchText =
            search
                .toLowerCase()
                .trim();


        FilteredSkills =
            FilteredSkills.filter(
                skill => {

                    return (

                        skill.name
                            .toLowerCase()
                            .includes(SearchText)

                        ||

                        skill.category
                            .toLowerCase()
                            .includes(SearchText)

                        ||

                        skill.description
                            .toLowerCase()
                            .includes(SearchText)

                    );
                }
            );
    }


    /*
        Update skill count
    */

    if (SkillCount) {

        SkillCount.textContent =
            FilteredSkills.length;
    }


    /*
        Show empty state
    */

    if (
        FilteredSkills.length === 0
    ) {

        SkillsGrid.innerHTML = "";

        if (NoSkills) {
            NoSkills.style.display =
                "block";
        }

        return;
    }


    /*
        Hide empty state
    */

    if (NoSkills) {

        NoSkills.style.display =
            "none";
    }


    /*
        Generate skill cards
    */

    SkillsGrid.innerHTML =
        FilteredSkills.map(
            skill => {

                const Level =
                    Math.max(
                        0,
                        Math.min(
                            100,
                            Number(skill.level) || 0
                        )
                    );


                return `

                    <article class="SkillCard">

                        <div class="SkillTop">

                            <div class="SkillIcon">
                                ${skill.icon || "✦"}
                            </div>

                            <div class="SkillCategory">
                                ${GetCategoryName(
                                    skill.category
                                )}
                            </div>

                        </div>


                        <h2 class="SkillName">
                            ${skill.name}
                        </h2>


                        <p class="SkillDescription">
                            ${skill.description}
                        </p>


                        <div class="ProgressArea">

                            <div class="ProgressInfo">

                                <span>
                                    Proficiency
                                </span>

                                <span class="ProgressValue">
                                    ${Level}%
                                </span>

                            </div>


                            <div class="ProgressBar">

                                <div
                                    class="ProgressFill"
                                    style="width: ${Level}%"
                                ></div>

                            </div>

                        </div>

                    </article>

                `;
            }
        ).join("");
}



/* =========================================================
   SEARCH
========================================================= */

function SetupSearch() {

    const SearchInput =
        document.getElementById(
            "SkillSearch"
        );

    if (!SearchInput) {
        return;
    }


    SearchInput.addEventListener(
        "input",
        function () {

            const ActiveButton =
                document.querySelector(
                    ".FilterButton.active"
                );


            const Filter =
                ActiveButton
                    ? ActiveButton.dataset.filter
                    : "all";


            DisplaySkills(
                GetSkills(),
                Filter,
                SearchInput.value
            );
        }
    );
}



/* =========================================================
   FILTER BUTTONS
========================================================= */

function SetupFilters() {

    const FilterButtons =
        document.querySelectorAll(
            ".FilterButton"
        );


    FilterButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    /*
                        Remove active state
                    */

                    FilterButtons.forEach(
                        item => {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    /*
                        Activate clicked button
                    */

                    button.classList.add(
                        "active"
                    );


                    /*
                        Get search text
                    */

                    const SearchInput =
                        document.getElementById(
                            "SkillSearch"
                        );


                    const SearchText =
                        SearchInput
                            ? SearchInput.value
                            : "";


                    /*
                        Display filtered skills
                    */

                    DisplaySkills(
                        GetSkills(),
                        button.dataset.filter,
                        SearchText
                    );

                }
            );

        }
    );
}



/* =========================================================
   KEYBOARD SHORTCUT
========================================================= */

function SetupKeyboardShortcuts() {

    document.addEventListener(
        "keydown",
        function (event) {

            /*
                Press "/" to focus search
            */

            if (
                event.key === "/" &&
                document.activeElement.tagName !== "INPUT"
            ) {

                event.preventDefault();

                const SearchInput =
                    document.getElementById(
                        "SkillSearch"
                    );

                if (SearchInput) {

                    SearchInput.focus();
                }
            }


            /*
                Press Escape to clear search
            */

            if (
                event.key === "Escape"
            ) {

                const SearchInput =
                    document.getElementById(
                        "SkillSearch"
                    );

                if (SearchInput) {

                    SearchInput.value = "";

                    const ActiveButton =
                        document.querySelector(
                            ".FilterButton.active"
                        );


                    const Filter =
                        ActiveButton
                            ? ActiveButton.dataset.filter
                            : "all";


                    DisplaySkills(
                        GetSkills(),
                        Filter,
                        ""
                    );
                }
            }

        }
    );
}



/* =========================================================
   INITIALIZE DASHBOARD
========================================================= */

function LoadDashboard() {

    LoadUsername();

    DisplaySkills();

    SetupSearch();

    SetupFilters();

    SetupKeyboardShortcuts();
}



/* =========================================================
   START DASHBOARD
========================================================= */

window.addEventListener(
    "DOMContentLoaded",
    LoadDashboard
);