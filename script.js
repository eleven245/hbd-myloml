const questions = [
  { 
    question: "Where was our first date?", 
    options: ["MCD", "HYPD", "Sanjay Van", "Vegas"], 
    answer: "HYPD",
    nextPage: "page1.html" 
  },
  { 
    question: "What's her favorite food?", 
    options: ["Pizza", "Pasta", "Burger", "Sushi"], 
    answer: "Pasta",
    nextPage: "page3.html" 
  },
  { 
    question: "What's her dream destination?", 
    options: ["Paris", "New York", "Maldives", "Tokyo"], 
    answer: "Paris",
    nextPage: "page4.html" 
  },
  { 
    question: "What's her favorite movie?", 
    options: ["Titanic", "Inception", "La La Land", "Frozen"], 
    answer: "Titanic",
    nextPage: "page5.html" 
  },
  { 
    question: "What's her favorite season?", 
    options: ["Winter", "Spring", "Summer", "Autumn"], 
    answer: "Spring",
    nextPage: "reward.html" 
  },
];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const heartIcons = document.querySelectorAll(".heart-icon");
const rewardSound = document.getElementById("reward-sound");

const typeQuestion = (text) => {
  questionElement.textContent = "";
  let i = 0;
  const typingEffect = setInterval(() => {
    questionElement.textContent += text[i];
    i++;
    if (i === text.length) clearInterval(typingEffect);
  }, 50);
};

const loadQuestion = () => {
  const current = questions[currentQuestion];
  typeQuestion(current.question);

  // Clear previous options
  optionsElement.innerHTML = "";

  current.options.forEach((option) => {
    const button = document.createElement("button");
    button.className =
      "bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold py-2 px-4 rounded hover:scale-105 transform transition-all duration-300 w-full";
    button.textContent = option;

    // Add click event
    button.addEventListener("click", () => {
      if (option === current.answer) {
        // Update progress tracker
        heartIcons[currentQuestion].classList.add("active");

        currentQuestion++;
        if (currentQuestion < questions.length) {
          // Redirect to the next page
          window.location.href = current.nextPage;
        } else {
          // All questions answered, play reward
          rewardSound.play();
          alert("Congratulations! You’ve completed the Treasure Hunt!");
        }
      } else {
        alert("Wrong answer! Try again.");
      }
    });

    optionsElement.appendChild(button);
  });
};

// Initialize
loadQuestion();
