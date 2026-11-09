const affirmationText = document.getElementById("affirmation");
const btn = document.getElementById("btn");

const affirmations = [
    "I am building a life that my future self will thank me for.",
    "I do not need to feel ready; I need to take the first step.",
    "My past does not define what I am capable of becoming.",
    "I keep promises to myself, especially when nobody is watching.",
    "I am not here to be average; I am here to discover my potential.",
    "I can be a beginner today and an expert through consistent effort.",
    "I refuse to let temporary discomfort decide my permanent future.",
    "I am becoming someone who does what needs to be done.",
    "I do not compete with others; I compete with who I was yesterday.",
    "My discipline will carry me when my motivation disappears.",
    "I have the courage to start over without calling myself a failure.",
    "I am allowed to grow beyond the person people expect me to be.",
    "Every difficult problem I solve makes me more capable.",
    "I do not need everyone's approval to believe in my direction.",
    "I choose long-term growth over short-term comfort.",
    "I can feel afraid and still move forward.",
    "I am responsible for the choices that shape my future.",
    "I will not abandon my goals just because progress feels slow.",
    "I have survived difficult days before, and I can face today.",
    "I am learning to trust the person I am becoming.",
    "My worth is not measured by my productivity or achievements.",
    "I give myself permission to fail, learn, and try again.",
    "I am building confidence by doing difficult things.",
    "I would rather struggle while learning than stay comfortable and stagnant.",
    "I can turn confusion into understanding through patience and effort.",
    "I do not need to have everything figured out today.",
    "I choose to act on my goals instead of waiting for perfect conditions.",
    "I am capable of creating opportunities instead of waiting for them.",
    "I will not let one bad day become a bad life.",
    "I respect myself enough to protect my time and energy.",
    "I am becoming more resilient with every challenge I face.",
    "I can change my habits, my mindset, and my direction.",
    "I choose courage even when the outcome is uncertain.",
    "I am not behind in life; I am building my own path.",
    "I will focus on what I can do today, not everything I cannot control.",
    "I am capable of understanding things that once seemed impossible.",
    "I choose curiosity over the fear of looking foolish.",
    "I will not confuse slow progress with no progress.",
    "I am learning to finish what I start.",
    "I can be proud of myself while still striving to improve.",
    "I will make decisions based on my values, not my insecurities.",
    "I deserve rest without feeling guilty for being human.",
    "I am stronger when I face my problems instead of avoiding them.",
    "I can listen to criticism without letting it define me.",
    "I will invest in skills that give me greater freedom in life.",
    "I am building a future through the choices I make right now.",
    "I do not need to prove my worth; I need to live according to my values.",
    "I choose consistency over intensity and progress over perfection.",
    "I have the patience to build something meaningful over time.",
    "I will become someone I respect through the actions I take today."
];

function getAffirmation() {
    btn.disabled = true;
    affirmationText.textContent = "Finding your affirmation...";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        affirmationText.textContent = affirmations[randomIndex];
        btn.disabled = false;
    }, 300);
}

btn.addEventListener("click", getAffirmation);