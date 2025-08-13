const questions = [
    {
        prompt: "General Order 1",
        answer: "To take charge of this post and all government property in view"
    },
    {
        prompt: "General Order 2",
        answer: "To walk my post in a military manner, keeping always on the alert, and observing everything that takes place within sight or hearing"
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
];

let current = 0;

function showPrompt() {
    document.getElementById('prompt').textContent = questions[current].prompt;
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
}

document.getElementById('submit').addEventListener('click', () => {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = questions[current].answer;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('result').textContent = "Correct!";
        current = (current + 1) % questions.length;
        setTimeout(showPrompt, 1000);
    } else {
        document.getElementById('result').textContent = "Try again!";
    }
});

document.getElementById('answer').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        document.getElementById('submit').click();
    }
});

window.onload = showPrompt;