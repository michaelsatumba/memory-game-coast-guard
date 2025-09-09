const questions = [
    {
        prompt: "General Order 1",
        answer: "To take charge of this post and all government property in view"
    },
    {
        prompt: "General Order 2",
        answer: "To walk my post in a military manner, keeping always on the alert and observing everything that takes place within sight or hearing"
    },
    {
        prompt: "General Order 3",
        answer: "To report all violations of orders I am instructed to enforce"
    },
    {
        prompt: "General Order 4",
        answer: "To repeat all calls from posts more distant from the guardhouse than my own"
    },
    {
        prompt: "General Order 5",
        answer: "To quit my post only when properly relieved"
    },
    {
        prompt: "General Order 6",
        answer: "To receive, obey, and pass on to the sentry who relieves me all orders from the Commanding Officer, Command Duty Officer, Officer of the Deck, and Officers and Petty Officer of the Watch only"
    },
    {
        prompt: "General Order 7",
        answer: "To talk to no one except in the line of duty"
    },
    {
        prompt: "General Order 8",
        answer: "To give the alarm in case of fire or disorder"
    },
    {
        prompt: "General Order 9",
        answer: "To call the Officer of the Deck in any case not covered by instructions"
    },
    {
        prompt: "General Order 10",
        answer: "To salute all officers and all colors and standards not cased"
    },
    {
        prompt: "General Order 11",
        answer: "To be especially watchful at night, and during the time for challenging, to challenge all persons on or near my post, and to allow no one to pass without proper authority"
    },
    {   prompt: "The U.S Coast Guard Ethos",
        answer: "In service to our nation With honor, respect, and devotion to duty We protect We Defend We Save We are Semper Paratus We Are The United States Coast Guard"
    },
    // Enlisted Ranks
    { prompt: "What is E-1?", answer: "Seaman Recruit" },
    { prompt: "What is E-2?", answer: "Seaman Apprentice" },
    { prompt: "What is E-3?", answer: "Seaman" },
    { prompt: "What is E-4?", answer: "Petty Officer Third Class" },
    { prompt: "What is E-5?", answer: "Petty Officer Second Class" },
    { prompt: "What is E-6?", answer: "Petty Officer First Class" },
    { prompt: "What is E-7?", answer: "Chief Petty Officer" },
    { prompt: "What is E-8?", answer: "Senior Chief Petty Officer" },
    { prompt: "What is E-9?", answer: "Master Chief Petty Officer" },
    { prompt: "What is the highest U.S. Coast Guard enlisted rank?", answer: "Master Chief Petty Officer of the Coast Guard" },
    
    // Warrant Officer Ranks
    { prompt: "What is CWO-2", answer: "Chief Warrant Officer 2" },
    { prompt: "What is CWO-3?", answer: "Chief Warrant Officer 3" },
    { prompt: "What is CWO-4?", answer: "Chief Warrant Officer 4" },
    
    // Officer Ranks
    { prompt: "What is O-1?", answer: "Ensign" },
    { prompt: "What is O-2?", answer: "Lieutenant Junior Grade" },
    { prompt: "What is O-3?", answer: "Lieutenant" },
    { prompt: "What is O-4?", answer: "Lieutenant Commander" },
    { prompt: "What is O-5?", answer: "Commander" },
    { prompt: "What is O-6?", answer: "Captain" },
    { prompt: "What is O-7?", answer: "Rear Admiral Lower Half" },
    { prompt: "What is O-8?", answer: "Rear Admiral" },
    { prompt: "What is O-9?", answer: "Vice Admiral" },
    { prompt: "What is O-10?", answer: "Admiral" },

    // Coast Guard Rates (Enlisted Job Specialties)
    { prompt: "What is the rate for AET?", answer: "Avionics Electrical Technician" },
    { prompt: "What is the rate for AMT?", answer: "Aviation Maintenance Technician" },
    { prompt: "What is the rate for AST?", answer: "Aviation Survival Technician" },
    { prompt: "What is the rate for BM?", answer: "Boatswain's Mate" },
    { prompt: "What is the rate for CMS?", answer: "Cyber Mission Specialist" },
    { prompt: "What is the rate for CS?", answer: "Culinary Specialist" },
    { prompt: "What is the rate for DC?", answer: "Damage Controlman" },
    { prompt: "What is the rate for DV?", answer: "Diver" },
    { prompt: "What is the rate for EM?", answer: "Electrician's Mate" },
    { prompt: "What is the rate for ET?", answer: "Electronics Technician" },
    { prompt: "What is the rate for GM?", answer: "Gunner's Mate" },
    { prompt: "What is the rate for HS?", answer: "Health Services Technician" },
    { prompt: "What is the rate for IS?", answer: "Intelligence Specialist" },
    { prompt: "What is the rate for IT?", answer: "Information Systems Technician" },
    { prompt: "What is the rate for IV?", answer: "Investigator" },
    { prompt: "What is the rate for ME?", answer: "Maritime Enforcement Specialist" },
    { prompt: "What is the rate for MK?", answer: "Machinery Technician" },
    { prompt: "What is the rate for MST?", answer: "Marine Science Technician" },
    { prompt: "What is the rate for OS?", answer: "Operations Specialist" },
    { prompt: "What is the rate for PA?", answer: "Public Affairs Specialist" },
    { prompt: "What is the rate for SK?", answer: "Storekeeper" },
    { prompt: "What is the rate for YN?", answer: "Yeoman" }
];

let current = 0;

function showPrompt(clearAnswer = true) {
    document.getElementById('prompt').textContent = questions[current].prompt;
    if (clearAnswer) {
        document.getElementById('answer').value = '';
        document.getElementById('result').textContent = '';
    }
}

document.getElementById('submit').addEventListener('click', () => {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = questions[current].answer;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('result').textContent = "Correct!";
        setTimeout(() => {
            current = (current + 1) % questions.length;
            showPrompt();
        }, 1000);
    } else {
        document.getElementById('result').textContent = "Try again!";
    }
});

// Previous and Next button logic
document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + questions.length) % questions.length;
    showPrompt();
});

document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % questions.length;
    showPrompt();
});

document.getElementById('answer').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        document.getElementById('submit').click();
    }
});

window.onload = showPrompt;