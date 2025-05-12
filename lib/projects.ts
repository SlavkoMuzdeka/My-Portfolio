const projects = [
  {
    title: "Podcaster Chatbot",
    description:
      "This application creates AI chatbots that can access and utilize domain-specific knowledge from different podcasts.",
    longDescription: `
      <p>The Podcaster Chatbot is an innovative application that transforms podcast content into interactive AI chatbots. This project addresses the challenge of making podcast knowledge more accessible and interactive.</p>
      
      <p>Key features include:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li>Vector database storage for efficient knowledge retrieval</li>
        <li>Natural language understanding for conversational interactions</li>
        <li>Citation of sources to maintain information integrity</li>
        <li>User-friendly interface for seamless interaction</li>
      </ul>
    `,
    image: "/projects/chatbot_app.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "OpenAI",
      "Pinecone",
      "LangChain",
      "Vercel",
      "AI SDK",
      "RAG",
    ],
    deploy_link: "https://podcaster-chatbot.vercel.app/",
    github_link: "https://github.com/SlavkoMuzdeka/Podcaster-Chatbot",
  },
  {
    title: "QuantMetric Dashboard",
    description:
      "This project, part of research, visualizes quant trading metrics, Alpha and Beta, to help traders optimize strategies with historical and real-time data.",
    longDescription: `
      <p>The QuantMetric Dashboard is a sophisticated financial analysis tool designed to help traders and investors make data-driven decisions. This project was developed as part of a research initiative to make quantitative trading metrics more accessible.</p>
      
      <p>The dashboard provides comprehensive visualization and analysis of key financial metrics:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li>Alpha and Beta calculations for performance measurement</li>
        <li>Historical trend analysis with interactive charts</li>
        <li>Comparative analysis against market benchmarks</li>
        <li>Real-time data integration for up-to-date insights</li>
      </ul>
      
      <p>This tool has practical applications for individual investors, financial advisors, and quantitative analysts looking to optimize their trading strategies based on historical performance and risk metrics.</p>
    `,
    image: "/projects/quant_metric.png",
    tags: [
      "Python",
      "Pandas",
      "Plotly",
      "Finance",
      "Quantitative Analysis",
      "Streamlit",
      "ML",
    ],
    deploy_link: "https://very-early-ventures-beta-analysis.streamlit.app/",
    github_link: "https://github.com/SlavkoMuzdeka/Very-Early-Ventures-Beta",
  },
  {
    title: "Podcast Summarizer",
    description:
      "AI tool that extracts key insights from podcasts, helping users quickly find relevant content.",
    longDescription: `
      <p>The Podcast Summarizer is an AI-powered tool that transforms lengthy podcast episodes into concise, actionable summaries. This project was created to help busy professionals and knowledge seekers extract valuable insights from podcasts without investing hours of listening time.</p>
      
      <p>The application offers several powerful features:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li>Automatic podcast discovery through RSS feed integration</li>
        <li>AI-powered content analysis and summarization</li>
        <li>Key points extraction and highlight generation</li>
        <li>User-friendly interface with search and filtering capabilities</li>
      </ul>
      
      <p>This tool has been particularly valuable for researchers, students, and professionals who need to stay informed but have limited time to consume full-length podcast content.</p>
    `,
    image: "/projects/podcast_summarizer.png",
    tags: ["Python", "Streamlit", "OpenAI", "RSS Feeds"],
    deploy_link: "https://podcast-summarizer-ai.streamlit.app/",
    github_link: "https://github.com/SlavkoMuzdeka/Podcast_Summarizer_AI",
  },
  {
    title: "Crypto Investment Dashboard",
    description:
      "Interactive investments dashboard to track and analyze cryptocurrency holdings",
    longDescription: `
      <p>The Portfolio Dashboard is a comprehensive investment tracking and analysis tool specifically designed for cryptocurrency investors. This project addresses the challenge of monitoring diverse crypto assets across multiple platforms and wallets.</p>
      
      <p>Key features of the dashboard include:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
      <li>Real-time portfolio valuation and performance tracking</li>
      <li>Multi-exchange and wallet integration for consolidated viewing</li>
      <li>Historical performance analysis with customizable date ranges</li>
      <li>Profit and loss calculations</li>
      <li>Asset allocation visualization</li>
      <li>Alternative investment simulation (e.g., compare value if ETH or BTC was purchased instead)</li>
    </ul>
      
      <p>This tool has become essential for crypto investors looking to make informed decisions based on comprehensive portfolio analysis and market insights.</p>
    `,
    image: "/projects/portfolio_dashboard.png",
    tags: [
      "Python",
      "Streamlit",
      "web3.py",
      "CoinGecko",
      "Coinbase",
      "Kraken",
      "PnL",
      "Block explorers",
    ],
    deploy_link: "https://investment-dashboard.streamlit.app/",
    github_link: "https://github.com/SlavkoMuzdeka/Portfolio-Dashboard",
  },
  {
    title: "Intelligence Machine: Conference & Company Scraper",
    description:
      "A connected suite of tools that identifies conference speakers and tracks their career paths, providing notifications when they leave their companies, especially when they venture out to start their own.",
    longDescription: `
      <p>The Intelligence Machine project is a comprehensive system designed to collect and analyze data related to conference speakers and their employment histories. Its primary goal is to identify speakers from selected conferences, monitor where they have worked, and notify users when these individuals leave their companies, especially when they embark on starting their own ventures.</p>
      
      <p>This project is composed of two interconnected modules:</p>
      
      <h3>Conference Speakers Module</h3>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li>Automatically identifies new conferences by cross-referencing data sources.</li>
        <li>Extracts speaker details from conference websites and online media playlists.</li>
        <li>Merges speaker information with related talk and event details.</li>
        <li>Integrates employee data to enrich speaker profiles for enhanced tracking.</li>
        <li>Stores the aggregated data in a PostgreSQL database and uploads results to Google Sheets.</li>
      </ul>
      
      <h3>Company Employees Module</h3>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li>Scrapes employee profiles and company data from online sources such as LinkedIn.</li>
        <li>Updates current employee records and identifies former employees based on data changes.</li>
        <li>Maintains and updates employee-company associations, ensuring real-time accuracy.</li>
        <li>Uploads structured data to Google Sheets using distinct sheets for current and former employees.</li>
      </ul>
      
      <p>This interconnected approach enables continuous monitoring of conference speakers and their career transitions, providing early insights into potential founders and emerging startups.</p>
    `,
    image: "/projects/scraper.png",
    tags: [
      "Python",
      "PostgreSQL",
      "Google Sheets",
      "OpenAI",
      "Phantom Buster",
      "LinkedIn",
      "Web Scraping",
    ],
    deploy_link: "",
    github_link: "https://github.com/SlavkoMuzdeka/Intelligence-Machine",
  },
  {
    title: "Emotion Classifier App",
    description:
      "A web-based application that classifies text into emotional categories using a fine-tuned BERT model, with built-in summarization for long inputs.",
    longDescription: `
      <p>The Emotion Classifier App is an interactive NLP-based application designed to identify emotions in written text. Built as part of a Bachelor Thesis, the goal was to explore the use of pre-trained transformer models in emotion classification and text summarization tasks.</p>
      
      <p>Using a fine-tuned BERT model, the app categorizes user-submitted text into one of six emotional categories: <strong>Sadness</strong>, <strong>Joy</strong>, <strong>Love</strong>, <strong>Anger</strong>, <strong>Fear</strong>, and <strong>Surprise</strong>.</p>
      
      <p>Key features include:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li><strong>Emotion Detection:</strong> Classifies text into one of the six predefined emotional categories using a fine-tuned transformer model.</li>
        <li><strong>Text Summarization:</strong> Automatically summarizes inputs that exceed the model’s 512-token limit, ensuring compatibility and accurate classification.</li>
        <li><strong>Flexible Input:</strong> Users can either type or paste text directly into the app or upload a text file for analysis.</li>
        <li><strong>Interactive Interface:</strong> Classification results are displayed in a clear and user-friendly format, with graphical representations for better interpretability.</li>
      </ul>
      
      <p>This project combines deep learning techniques with a practical user interface to showcase the real-world utility of NLP in understanding human emotions.</p>
    `,
    image: "/projects/emotion_classifier.png",
    tags: [
      "BERT",
      "Transformers",
      "Text Classification",
      "Summarization",
      "NLP",
      "Streamlit",
    ],
    deploy_link: "",
    github_link:
      "https://github.com/SlavkoMuzdeka/Text-Classification---Bachelor-Thesis",
  },
  {
    title: "Anonymous Communication System",
    description:
      "A friendly web app that lets you message privately and stay anonymous by scattering your message pieces across multiple servers.",
    longDescription: `
      <p>Have you ever wanted to chat without leaving any digital footprints? The Anonymous Communication System makes it possible. It breaks each message into smaller parts and sends them through different channels, so only the intended recipient can piece everything back together.</p>
      
      <p>Here’s how it works in everyday terms:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li>You log in and see who else is online, just like a regular chat app.</li>
        <li>When you pick someone to chat with, the app quietly swaps keys and certificates to set up a secure conversation.</li>
        <li>Before sending, your message is chopped into several segments, each one wrapped in encryption and even optionally hidden inside an image.</li>
        <li>Those segments travel independently through different servers, so no one service ever sees the full message.</li>
        <li>On arrival, the pieces are decrypted and stitched back together on your friend’s side, clean, safe, and completely private.</li>
      </ul>
      
      <p>Under the hood, we lean on modern tools:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li><strong>React</strong> for a smooth, responsive chat interface.</li>
        <li><strong>Spring Boot</strong> powering our secure backend APIs.</li>
        <li><strong>Apache ActiveMQ</strong> to ferry message segments reliably.</li>
        <li><strong>MySQL</strong> for keeping user data safe and sound.</li>
        <li><strong>Ant Design</strong> for clean, consistent UI components.</li>
        <li><strong>Node.js</strong> to handle extra server-side logic.</li>
        <li><strong>Maven</strong> to tie it all together with a neat build process.</li>
      </ul>
      
      <p>Whether you’re sharing a secret or just value your privacy, this system has your back quietly and securely.</p>
    `,
    image: "/projects/anonymous_communication.png",
    tags: [
      "React",
      "Spring Boot",
      "Apache ActiveMQ",
      "MySQL",
      "Ant Design",
      "Node.js",
      "Maven",
      "Privacy",
    ],
    deploy_link: "",
    github_link:
      "https://github.com/SlavkoMuzdeka/Anonymous-Communication-System",
  },
  {
    title: "Day Planner Android App",
    description:
      "An intuitive mobile application for planning and organizing day-to-day activities, with multimedia support, travel visualization, and smart reminders.",
    longDescription: `
      <p>The Day Planner Android App offers users a seamless way to organize their daily routines, from professional tasks to travel and leisure activities. Developed with a focus on simplicity and flexibility, the app combines an interactive user experience with powerful backend support for storing and managing activity data.</p>
      
      <p>The app provides a highly customizable platform where users can input detailed information for each task, set up personalized notifications, and visualize travel plans on an integrated map.</p>
      
      <p>Key features include:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li><strong>Activity Management:</strong> Store detailed activity data including title, time, description, and location.</li>
        <li><strong>Multimedia Support:</strong> Attach images to free-form activities for richer context and visual memory.</li>
        <li><strong>Travel Activity Visualization:</strong> Uses Google Maps API to display precise locations for planned trips and travel-based activities.</li>
        <li><strong>Calendar View:</strong> Easily track scheduled items using a calendar layout or a chronological list view.</li>
        <li><strong>Custom Reminders:</strong> User-defined notifications to ensure timely reminders for upcoming events.</li>
        <li><strong>Settings Customization:</strong> Includes language preferences, notification settings, and localization support.</li>
      </ul>
    `,
    image: "/projects/day_planner_app.png",
    tags: [
      "Android Studio",
      "Java",
      "SQLite",
      "Google Maps API",
      "Material Design",
      "Mobile Development",
    ],
    deploy_link: "",
    github_link: "https://github.com/SlavkoMuzdeka/Day-Planner-Android-App",
  },
  {
    title: "Data Structures & Algorithms Playground",
    description:
      "A hands‑on C language collection exploring core data structures and algorithms, from queues and stacks to trees and sorting techniques.",
    longDescription: `
      <p>Dive into the fundamentals of computer science with this C-based toolkit. Whether you’re visualizing student queue operations, decoding Morse code via a binary tree, or benchmarking classic sorting methods, this project makes abstract concepts tangible through interactive console programs.</p>
      
      <p>What you’ll find inside:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li><strong>Queue & Stack Explorer:</strong> Load student records from CSV, manage them in a queue, peek and pop via stack operations, pick random entries, and even measure how long each operation takes.</li>
        <li><strong>Morse Code Coder:</strong> Traverse a binary tree to translate characters to Morse code and back again, all through a straightforward menu-driven interface.</li>
        <li><strong>Sorting Showcase:</strong> Run Shell, Heap, Insertion, and Bubble Sort on sample datasets and see execution times side by side. This is perfect for comparing algorithmic efficiency in real time.</li>
      </ul>
      
      <p>Each module compiles with any standard C compiler and walks you through on-screen prompts, so you can experiment, learn, and see these foundational techniques in action.</p>
    `,
    image: "/projects/data_structures_algorithms.png",
    tags: [
      "C",
      "Data Structures",
      "Algorithms",
      "Linked List",
      "Binary Tree",
      "Sorting",
      "Console App",
    ],
    deploy_link: "",
    github_link:
      "https://github.com/SlavkoMuzdeka/Data-Structures-And-Algorithms",
  },
  {
    title: "e-Kindergarten",
    description:
      "A desktop application built in C# (WinForms) for managing kindergartens, including personnel, children, activities, and finances.",
    longDescription: `
      <p>The <strong>e-Kindergarten</strong> system is a Windows Forms desktop app designed to simplify the everyday operations of a kindergarten. It helps manage everything from child registration to staff records and daily scheduling. Built with a user-friendly interface and backed by a robust MySQL database, the app ensures secure data handling and efficient workflows.</p>
  
      <p>Administrators and clerks can log in with personalized accounts to manage tasks relevant to their role. Internationalization support and customizable themes make the system adaptable to different user preferences and language settings.</p>
  
      <p>Key features include:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li><strong>Database Integration:</strong> Uses MySQL with config-based connection details, supporting 7–15 well-structured tables.</li>
        <li><strong>User Accounts:</strong> Includes role-based access for administrators and clerks with secure login and authentication.</li>
        <li><strong>Internationalization:</strong> UI supports English and an official regional language.</li>
        <li><strong>User Preferences:</strong> Multiple themes/styles with saved preferences that load on login.</li>
      </ul>
    `,
    image: "/projects/e_kindergarten.png",
    tags: [
      "C#",
      ".NET",
      "Windows Forms",
      "MySQL",
      "Desktop App",
      "Internationalization",
      "Role-Based Access",
      "UI Theming",
    ],
    deploy_link: "",
    github_link: "https://github.com/SlavkoMuzdeka/e-Kindergarten",
  },
  {
    title: "Twitter-Trackr",
    description:
      "A Streamlit web app that tracks and stores liked tweets from specified Twitter accounts, with daily updates and interactive analysis.",
    longDescription: `
      <p><strong>Twitter-Trackr</strong> is a Python-based application that helps you keep an eye on the tweets your favorite accounts like. Whether you're doing research, analyzing trends, or just staying curious, this tool brings structure to Twitter's chaos.</p>
      
      <p>At its core, the app uses the Twitter API to fetch liked tweets from specified accounts and stores them in a <strong>SQLite</strong> database. With a neat <strong>Streamlit</strong> interface, you can explore likes visually and interactively.</p>
  
      <p>Key Features include:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li><strong>Initial Load:</strong> Pulls in all liked tweets for specified Twitter handles.</li>
        <li><strong>Daily Updates:</strong> Automatically syncs new liked tweets while pruning old ones to keep things fresh.</li>
        <li><strong>Data Storage:</strong> Stores tweet data in a local SQLite database for fast querying.</li>
        <li><strong>Interactive Exploration:</strong> View and filter liked tweets right from the web interface.</li>
      </ul>
  
      <p>Perfect for Twitter analysts, journalists, or anyone tracking online sentiment and behavior over time.</p>
    `,
    image: "/projects/twitter_trackr.png",
    tags: [
      "Python",
      "Twitter API",
      "SQLite",
      "Streamlit",
      "Automation",
      "Data Analysis",
    ],
    deploy_link: "",
    github_link: "https://github.com/SlavkoMuzdeka/Twitter-Trackr",
  },
  {
    title: "CityGuessr Quiz App",
    description:
      "A WPF-based quiz game that challenges users to identify cities from images under a tight 10-second timer.",
    longDescription: `
      <p><strong>CityGuessr Quiz App</strong> is a fun and fast-paced geography game built with Windows Presentation Foundation (WPF). Players are shown an image of a famous city landmark and must choose the correct city name from three options.</p>
      
      <p>The game spans 10 unique rounds, each with its own city image and a 10-second countdown, testing both your world knowledge and quick thinking.</p>
  
      <p>Key Features include:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li><strong>Interactive Quiz:</strong> Ten rounds of city-guessing fun with real photographs.</li>
        <li><strong>Countdown Timer:</strong> A 10-second timer adds urgency and excitement to each question.</li>
        <li><strong>WPF UI:</strong> Modern, responsive interface leveraging WPF for smooth animations and layout.</li>
        <li><strong>Lightweight Design:</strong> No database required, just a standalone executable that’s easy to run.</li>
        <li><strong>User-Friendly:</strong> Intuitive controls and feedback make the game accessible to all ages.</li>
      </ul>
      
      <p>Whether you’re a geography buff or just looking for a quick brain teaser, CityGuessr makes exploring the world both educational and entertaining.</p>
    `,
    image: "/projects/cityguessr_app.png",
    tags: ["WPF", "C#", "Quiz Game", "Geography", "Desktop App"],
    deploy_link: "",
    github_link: "https://github.com/SlavkoMuzdeka/City-Guessr",
  },
  {
    title: "eKindergarten",
    description:
      "A Java desktop application with MySQL backend for managing kindergartens, personnel, children, groups, activities, and finances.",
    longDescription: `
      <p>The <strong>eKindergarten</strong> project delivers a modern, efficient system for kindergarten administration. Built in Java with a MySQL database, it handles everything from institution details to daily activity scheduling and financial transactions.</p>
      
      <p>Designed for ease of use, the application provides administrators with a clear interface for managing multiple kindergartens, staff, enrolled children, and their associated data.</p>
  
      <p>Key Features include:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li><strong>Kindergarten Information:</strong> Track each location’s name, address, and contact details.</li>
        <li><strong>Personnel Management:</strong> Store records for administrators and caregivers, including IDs, personal details, credentials, and compensation.</li>
        <li><strong>Child Enrollment:</strong> Record child data, such as height, weight, medical history, and attendance times.</li>
        <li><strong>Group Allocation:</strong> Assign children and caregivers to groups and monitor assignment durations.</li>
        <li><strong>Activity Scheduling:</strong> Plan daily group activities with descriptions, dates, and durations.</li>
        <li><strong>Membership Fees:</strong> Manage monthly fees per child, such as service type, amount due, and payment status.</li>
        <li><strong>MySQL Integration:</strong> Secure, reliable storage and retrieval of all data via a MySQL relational database.</li>
      </ul>
    `,
    image: "/projects/e_kindergarten_java.png",
    tags: [
      "Java",
      "MySQL",
      "Desktop App",
      "Swing/JavaFX",
      "CRUD",
      "Data Management",
    ],
    deploy_link: "",
    github_link: "https://github.com/SlavkoMuzdeka/eKindergarten",
  },
  {
    title: "Railway Traffic Simulation",
    description:
      "A Java multi-threaded simulation demonstrating concurrent train and vehicle movement with collision detection and dynamic configuration.",
    longDescription: `
    <p>The <strong>Railway Traffic Simulation</strong> project explores the power and challenges of concurrent programming in Java by simulating trains and road vehicles moving on a shared 2D map. Each train and vehicle runs in its own thread, showcasing real-time interactions, collision handling, and synchronized access to shared tracks and roads.</p>
    
    <p>Users can define simulation parameters (maximum speeds, number of vehicles, and log file paths) via external configuration files, making the system highly adaptable.</p>

    <p>Key Features include:</p>
    <ul class="list-disc pl-5 space-y-2 my-3">
      <li><strong>Concurrent Movement:</strong> Independent threads for each train and vehicle, enabling simultaneous motion on rails and roads.</li>
      <li><strong>Collision Detection & Avoidance:</strong> Thread synchronization to detect and manage collisions at level crossings and intersections.</li>
      <li><strong>Realistic Attributes:</strong> Trains (steam, diesel, electric) and vehicles (brand, model, speed) behave according to their defined parameters.</li>
      <li><strong>Dynamic Configuration:</strong> Read external files to adjust speeds, vehicle counts, and logging paths at runtime.</li>
      <li><strong>Visual Simulation:</strong> GUI displays real-time positions, speeds, and path histories of all trains and vehicles on the network.</li>
    </ul>
    
    <p>This simulation provides a hands-on demonstration of thread-based parallelism and synchronization techniques in complex transportation scenarios.</p>
  `,
    image: "/projects/railway_traffic_simulation.png",
    tags: ["Java", "Concurrency", "Threads", "Eclipse", "GUI"],
    deploy_link: "",
    github_link: "https://github.com/SlavkoMuzdeka/Railway-Traffic-Simulation",
  },
  {
    title: "Diamond Circle",
    description:
      "A Java-based multiplayer board game that demonstrates concurrency using threads for figure movement, diamond placement, and card drawing.",
    longDescription: `
  <p>The <strong>Diamond Circle</strong> game project explores concurrent programming in Java through the development of a dynamic multiplayer board game. Each figure, diamond, and card-drawing action is managed using separate threads, enabling real-time, parallel interactions among game components.</p>

  <p>Players interact with the board simultaneously, drawing cards and moving figures while ghost figures and special actions are processed concurrently in the background. The system emphasizes thread safety, synchronization, and responsive UI updates to maintain a seamless gameplay experience.</p>

  <p>Key Features include:</p>
  <ul class="list-disc pl-5 space-y-2 my-3">
    <li><strong>Thread Management:</strong> Each action (figure movement, diamond spawning, and card drawing) is handled by separate threads.</li>
    <li><strong>Synchronization:</strong> Shared resources like the board and player stats are synchronized to prevent race conditions.</li>
    <li><strong>Parallel Gameplay:</strong> Enables parallel moves and updates, reflecting the pace of real-time multiplayer games.</li>
    <li><strong>Thread Safety:</strong> Proper mechanisms ensure thread-safe interactions and data integrity throughout the game.</li>
    <li><strong>Real-time Interactions:</strong> Player figures move based on card logic and respond immediately to player input.</li>
  </ul>

  <p>The project highlights essential concurrency patterns and techniques in Java, applying them to an engaging and visually interactive game.</p>
  `,
    image: "/projects/diamond_circle.png",
    tags: ["Java", "Concurrency", "Threads", "GUI"],
    deploy_link: "",
    github_link: "https://github.com/SlavkoMuzdeka/Diamond-Circle",
  },
];

export default projects;
