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
      "A connected suite of tools that identifies conference speakers and tracks their career paths, providing notifications when they leave their companies—especially when they venture out to start their own.",
    longDescription: `
      <p>The Intelligence Machine project is a comprehensive system designed to collect and analyze data related to conference speakers and their employment histories. Its primary goal is to identify speakers from selected conferences, monitor where they have worked, and notify users when these individuals leave their companies—especially when they embark on starting their own ventures.</p>
      
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
];

export default projects;
