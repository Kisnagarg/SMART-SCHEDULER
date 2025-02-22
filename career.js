document.addEventListener("DOMContentLoaded", function () {
    const sectorDropdown = document.getElementById("sector");
    const nextStepButton = document.getElementById("nextStep");
    const questionsContainer = document.getElementById("questionsContainer");
    const questionTitle = document.getElementById("questionTitle");
    const questionOptions = document.getElementById("questionOptions");
    const submitQuizButton = document.getElementById("submitQuiz");
    const careerResult = document.getElementById("careerResult");
    const resultText = document.getElementById("resultText");

    let selectedSector = "";
    let currentQuestionIndex = 0;
    let userAnswers = [];

    // Questions for each sector
    const questions = {
        technology: [
            { question: "Do you enjoy coding and problem-solving?", options: ["Yes", "No"] },
            { question: "Would you prefer working on software or hardware?", options: ["Software", "Hardware"] },
        ],
        business: [
            { question: "Are you interested in leadership and management?", options: ["Yes", "No"] },
            { question: "Do you like working with data and analytics?", options: ["Yes", "No"] },
        ],
        healthcare: [
            { question: "Do you like helping people with their health?", options: ["Yes", "No"] },
            { question: "Would you prefer working in a hospital or a lab?", options: ["Hospital", "Lab"] },
        ],
        creative: [
            { question: "Are you passionate about designing and visual arts?", options: ["Yes", "No"] },
            { question: "Would you prefer digital design or traditional arts?", options: ["Digital", "Traditional"] },
        ],
        engineering: [
            { question: "Do you enjoy building and designing structures or systems?", options: ["Yes", "No"] },
            { question: "Would you prefer working with mechanical or electrical systems?", options: ["Mechanical", "Electrical"] },
        ]
    };

    // Career Suggestions
    const careerPaths = {
        technology: {
            "Yes-Software": "Software Engineer, Web Developer, or AI Specialist",
            "Yes-Hardware": "Hardware Engineer, Embedded Systems Developer, or IT Technician",
            "No": "Consider learning UI/UX Design or IT Support"
        },
        business: {
            "Yes-Yes": "Business Analyst, Data Scientist, or Marketing Strategist",
            "Yes-No": "HR Manager, Project Manager, or Entrepreneur",
            "No": "Consider roles in customer relations or office administration"
        },
        healthcare: {
            "Yes-Hospital": "Doctor, Nurse, or Paramedic",
            "Yes-Lab": "Medical Researcher, Lab Technician, or Pharmacist",
            "No": "Consider Public Health or Medical Administration"
        },
        creative: {
            "Yes-Digital": "Graphic Designer, Video Editor, or Animator",
            "Yes-Traditional": "Illustrator, Painter, or Sculptor",
            "No": "Consider roles in content writing or photography"
        },
        engineering: {
            "Yes-Mechanical": "Mechanical Engineer, Automotive Engineer, or Aerospace Engineer",
            "Yes-Electrical": "Electrical Engineer, Robotics Engineer, or Circuit Designer",
            "No": "Consider Industrial Design or Technical Sales"
        }
    };

    // Step 1: User selects a sector
    nextStepButton.addEventListener("click", function () {
        selectedSector = sectorDropdown.value;
        if (selectedSector === "") {
            alert("Please select a sector to continue.");
            return;
        }

        // Hide sector selection & show questions
        document.getElementById("sectorSelection").classList.add("hidden");
        questionsContainer.classList.remove("hidden");

        currentQuestionIndex = 0;
        userAnswers = [];
        showQuestion();
    });

    // Step 2: Display questions based on the selected sector
    function showQuestion() {
        if (currentQuestionIndex < questions[selectedSector].length) {
            questionsContainer.classList.remove("hidden");
            careerResult.classList.add("hidden");

            const currentQuestion = questions[selectedSector][currentQuestionIndex];
            questionTitle.innerText = currentQuestion.question;
            questionOptions.innerHTML = "";

            currentQuestion.options.forEach(option => {
                const button = document.createElement("button");
                button.innerText = option;
                button.classList.add("option-button");
                button.addEventListener("click", () => {
                    userAnswers.push(option);
                    currentQuestionIndex++;
                    showQuestion();
                });
                questionOptions.appendChild(button);
            });
        } else {
            showCareerSuggestion();
        }
    }

    // Step 3: Show career recommendation
    function showCareerSuggestion() {
        questionsContainer.classList.add("hidden");
        careerResult.classList.remove("hidden");

        const answerKey = userAnswers.join("-");
        const suggestion = careerPaths[selectedSector][answerKey] || "Explore different fields and see what interests you!";
        
        resultText.innerText = `Based on your answers, we suggest exploring careers in: ${suggestion}`;
    }
});
