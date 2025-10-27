
import rolesim from "../assets/rolesim.webp"
import speech from "../assets/speech.webp"
import micro from "../assets/micro.webp"
import surge from "../assets/surge.webp"
import logistic from "../assets/logistic.webp"
import creative from "../assets/creative.webp"

const ProjectCardData = [
{
    imgsrc: rolesim, 
    title: "RoleSim: Job-Aware Multi-Agent Interview System",
    text: "Built a production-grade Generative-AI interview platform using Next.js, integrating Server-Sent Events (SSE) for real-time streaming of LLM responses.The system features a modular, DRY architecture for scalability and uses Retrieval-Augmented Generation (RAG) via Supabase pgvector and OpenAI GPT-4 for dynamic, context-aware questioning. [cite_start]It utilizes a multi-agent workflow (Interviewer, Evaluator, Tutor) with LangChain/LangGraph concepts and Neo4j for competency mapping and personalized feedback.",
    view: "https://github.com/Ritik-rik/RoleSim" 
},
{
    imgsrc: micro, 
    title: "Microservices: Based Order & User Management System",
    text: "Built an Order & User Management System using Spring Boot REST APIs, adhering to a scalable and modular microservices design.It integrated Kafka for event-driven communication between the services, was containerized with Docker, and deployed on OpenShift.Implemented distributed tracing with Spring Boot, Sleuth, and Zipkin to enable end-to-end visibility and reduce debugging time by 40%.",
    view: "https://github.com/Ritik-rik/Microservices-Project" 
},
    {
        imgsrc: speech,
        title:"Speech Ease",
        text:"Created a text-to-speech Android app with emoji-to-speech messaging, language support (English/French), and contextual templates for simple daily communication has empowered silent persons.Created a Java-based Android app with 3 app features in collaboration at an acceptable cost. As a developer on an 8-person team, I made a substantial contribution as a Developer.Employing encryption and data anonymization, Managed a database with more than 10,000 records using Firebase's backend services.",
        view:"https://github.com/Ritik-rik/SpeechEaseM"
    },
    {
    imgsrc: surge,  
    title: "Algorithmic Pricing Loophole Simulator: The Surge Floor Fix",  
    text: "Developed an interactive simulation to expose and fix a real-world pricing loophole seen in major ride-sharing platforms. Built a dynamic HTML + Tailwind + JavaScript web simulator with adjustable surge variables and visual fare charts. Designed Python backend logic (fare_calculator.py) to demonstrate the flawed vs. fixed pricing algorithm using Surge Floor, preventing price collapse during peak hours.",  
    view: "https://github.com/ritikrikm/pricing-loophole-simulator"
},
{
    imgsrc: logistic,  
    title: "Logistic Project",  
    text: "Built a full-stack logistics management platform with a React + Node.js architecture. Implemented client-server communication, optimized routes, and streamlined contact management features. Designed modular frontend and backend structure with reusable components, delivering a stable, production-ready solution for logistics automation.",  
    view: "https://github.com/ritikrikm/logistic-project"
},
{
    imgsrc: creative,  
    title: "TheCreativeBud E-commerce Website",  
    text: "Created an end-to-end e-commerce web app using HTML, CSS, and JavaScript with Firebase backend. Implemented real-time data synchronization, secure authentication, and a smooth product browsing experience. Configured CI/CD build scripts for optimized deployment, ensuring high performance and scalability.",  
    view: "https://github.com/Ritik-rik/TheCreativeBud"
}

];

export default ProjectCardData