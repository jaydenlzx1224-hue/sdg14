// SDG 14 - Protect Our Oceans, Protect Our Future

document.addEventListener("DOMContentLoaded", () => {

  // Open and close information screens
  const detailScreen = document.getElementById("detail-screen");
  const detailTitle = document.getElementById("detail-title");
  const detailImage = document.getElementById("detail-image");
  const detailText = document.getElementById("detail-text");
  const closeButton = document.getElementById("close-detail");

  // Information about ocean pollution
  const oceanInfo = {
    plastic: {
      title: "Plastic Pollution",
      image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f",
      text: "Plastic waste is one of the biggest threats to our oceans. Plastic bags, bottles and food packaging can enter the sea through rivers and drains. Marine animals may mistake plastic for food or become trapped in it. We can help by using reusable bags and bottles, recycling plastic and avoiding single-use plastics."
    },

    chemicals: {
      title: "Chemical Pollution",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18",
      text: "Chemical pollution happens when harmful substances from factories, farms and households enter rivers and oceans. These chemicals can poison marine animals, damage coral reefs and make the water unsafe. Proper waste disposal and reducing chemical use can help protect ocean ecosystems."
    },

    fishing: {
      title: "Fishing Gear Pollution",
      image: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7",
      text: "Lost or abandoned fishing nets and lines can continue trapping marine animals. This is sometimes called ghost fishing. Sea turtles, fish and other animals may become trapped. Fishers should dispose of damaged equipment properly and retrieve lost gear whenever possible."
    },

    oil: {
      title: "Oil Pollution",
      image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5",
      text: "Oil spills can spread across the ocean and harm marine life. Oil can cover the feathers of seabirds and affect fish and other sea animals. Preventing oil leaks, maintaining ships and responding quickly to spills can reduce the damage."
    },

    reusable: {
      title: "Use Reusable Items",
      image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a",
      text: "Bring reusable shopping bags, water bottles and food containers. This reduces the amount of plastic waste that may eventually reach the ocean."
    },

    recycle: {
      title: "Reduce and Recycle",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15d",
      text: "Separate recyclable materials such as paper, glass and plastic. Reduce unnecessary packaging and reuse items whenever possible. These simple habits help reduce waste."
    },

    cleanup: {
      title: "Join Beach Clean-ups",
      image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5",
      text: "Taking part in beach clean-up activities helps remove rubbish before it enters the sea. Always follow safety instructions and dispose of collected rubbish properly."
    },

    seafood: {
      title: "Choose Sustainable Seafood",
      image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9",
      text: "Sustainable fishing helps protect fish populations and ocean ecosystems. Avoid supporting illegal fishing and learn where seafood comes from."
    },

    awareness: {
      title: "Spread Awareness",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      text: "Share information about ocean pollution with friends, family and classmates. Education encourages more people to take action and protect marine life."
    },

    drains: {
      title: "Keep Drains and Rivers Clean",
      image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2",
      text: "Rubbish thrown on streets can travel through drains and rivers into the ocean. Put rubbish in bins and never pour harmful chemicals into drains."
    }
  };

  // Find all cards that can open information screens
  const infoCards = document.querySelectorAll("[data-topic]");

  infoCards.forEach(card => {
    card.addEventListener("click", () => {
      const topic = card.dataset.topic;
      const info = oceanInfo[topic];

      if (!info) return;

      if (detailTitle) detailTitle.textContent = info.title;
      if (detailImage) {
        detailImage.src = info.image;
        detailImage.alt = info.title;
      }
      if (detailText) detailText.textContent = info.text;

      if (detailScreen) {
        detailScreen.classList.add("active");
        detailScreen.style.display = "flex";
      }
    });
  });

  // Close the information screen
  function closeDetail() {
    if (detailScreen) {
      detailScreen.classList.remove("active");
      detailScreen.style.display = "none";
    }
  }

  if (closeButton) {
    closeButton.addEventListener("click", closeDetail);
  }

  if (detailScreen) {
    detailScreen.addEventListener("click", event => {
      if (event.target === detailScreen) {
        closeDetail();
      }
    });
  }

  // Ocean protection quiz
  const quizQuestions = [
    {
      question: "What is one major cause of ocean pollution?",
      answers: ["Plastic waste", "Clean water", "Sea plants"],
      correct: 0
    },
    {
      question: "Which action helps protect the ocean?",
      answers: ["Throw rubbish into rivers", "Use reusable bags", "Waste more plastic"],
      correct: 1
    },
    {
      question: "What can happen to sea animals because of plastic?",
      answers: ["They become trapped or eat it", "They become stronger", "Nothing happens"],
      correct: 0
    },
    {
      question: "What does SDG 14 aim to protect?",
      answers: ["Outer space", "Life Below Water", "Roads and buildings"],
      correct: 1
    },
    {
      question: "How can students help the ocean?",
      answers: ["Join clean-ups", "Throw rubbish on beaches", "Waste water"],
      correct: 0
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionElement = document.getElementById("quiz-question");
  const answerElement = document.getElementById("quiz-answers");
  const nextButton = document.getElementById("next-question");
  const scoreElement = document.getElementById("quiz-score");

  function showQuestion() {
    if (!questionElement || !answerElement) return;

    const question = quizQuestions[currentQuestion];
    questionElement.textContent = question.question;
    answerElement.innerHTML = "";

    question.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.className = "quiz-option";

      button.addEventListener("click", () => {
        if (answerElement.dataset.answered === "true") return;

        answerElement.dataset.answered = "true";

        if (index === question.correct) {
          score++;
          button.classList.add("correct");
        } else {
          button.classList.add("wrong");
          answerElement.children[question.correct].classList.add("correct");
        }

        if (nextButton) nextButton.disabled = false;
      });

      answerElement.appendChild(button);
    });

    answerElement.dataset.answered = "false";

    if (nextButton) nextButton.disabled = true;
    if (scoreElement) {
      scoreElement.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    }
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      currentQuestion++;

      if (currentQuestion < quizQuestions.length) {
        showQuestion();
      } else {
        questionElement.textContent = "Quiz Completed!";
        answerElement.innerHTML = "";
        nextButton.style.display = "none";

        if (scoreElement) {
          scoreElement.textContent =
            `Your score: ${score} out of ${quizQuestions.length}`;
        }
      }
    });

    showQuestion();
  }

});
