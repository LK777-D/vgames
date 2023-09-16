import "./Quiz.css";
import { useState } from "react";
import Button from "./UI/Button";
const quizQuestions = [
  {
    id: 1,
    question:
      "What is the main character's name in 'The Legend of Zelda' series?",
    options: ["Link", "Mario", "Samus", "Ganondorf"],
    answer: "Link",
  },
  {
    id: 2,
    question: "Which game features a battle royale mode known as 'Warzone'?",
    options: [
      "Apex Legends",
      "Fortnite",
      "Call of Duty: Modern Warfare",
      "Battlefield V",
    ],
    answer: "Call of Duty: Modern Warfare",
  },
  {
    id: 3,
    question:
      "In 'Minecraft,' what is the primary resource used to craft tools and structures?",
    options: ["Iron", "Gold", "Diamonds", "Wood"],
    answer: "Diamonds",
  },
  {
    id: 4,
    question:
      "Which game is known for its block-building and sandbox-style gameplay?",
    options: ["Terraria", "Roblox", "No Man's Sky", "Minecraft"],
    answer: "Minecraft",
  },
  {
    id: 5,
    question:
      "What is the name of the fictional city where 'Grand Theft Auto V' is set?",
    options: ["Vice City", "Los Santos", "Liberty City", "San Fierro"],
    answer: "Los Santos",
  },
  {
    id: 6,
    question:
      "Which iconic character collects rings and battles against the villain Dr. Robotnik?",
    options: [
      "Sonic the Hedgehog",
      "Crash Bandicoot",
      "Lara Croft",
      "Donkey Kong",
    ],
    answer: "Sonic the Hedgehog",
  },
  {
    id: 7,
    question:
      "Which game features a vast open world where you can hunt, fish, and explore as Arthur Morgan?",
    options: [
      "Red Dead Redemption 2",
      "The Witcher 3: Wild Hunt",
      "Dark Souls III",
      "Assassin's Creed Odyssey",
    ],
    answer: "Red Dead Redemption 2",
  },
  {
    id: 8,
    question: "What is the objective of the game 'Among Us'?",
    options: [
      "Survive on a deserted island",
      "Solve mysteries in a haunted mansion",
      "Complete tasks on a spaceship and identify the impostors",
      "Race against opponents in futuristic vehicles",
    ],
    answer: "Complete tasks on a spaceship and identify the impostors",
  },
  {
    id: 9,
    question:
      "Which series is known for its science fiction narrative and features titles like 'Half-Life 2' and 'Half-Life: Alyx'?",
    options: ["Portal", "Bioshock", "Halo", "Half-Life"],
    answer: "Half-Life",
  },
  {
    id: 10,
    question:
      "In 'The Elder Scrolls V: Skyrim,' what is the shout used to slow down time?",
    options: ["Fus Ro Dah", "Yol Toor Shul", "Laas Yah Nir", "Tiid Klo Ul"],
    answer: "Tiid Klo Ul",
  },
];

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [restart, setRestart] = useState(false);
  const [start, setStart] = useState(true);

  const handleNextQ = (question) => {
    if (questionIndex < quizQuestions.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setRestart(true);
      return;
    }
    if (question === quizQuestions[questionIndex].answer) {
      setScore(score + 1);
    }
  };

  const restartHandler = () => {
    setRestart(false);
    setScore(0);
    setQuestionIndex(0);
  };
  const startHandler = () => {
    setStart(false);
  };
  const className = `quiz ${start ? "none" : ""}`;
  return (
    <>
      <section className="quizwrapper font1">
        {start && (
          <div>
            <h4 className="font1">
              {" "}
              Test Your Knowladge - Video Games Master Quiz
            </h4>
            <Button onClick={startHandler} text="Start Quiz" />
          </div>
        )}
        {!restart ? (
          <div className={className}>
            <h3>Question N: {questionIndex + 1} </h3>
            <h3>{quizQuestions[questionIndex].question}</h3>
            <span>Your score : {score}</span>
            <div className="options">
              {quizQuestions[questionIndex].options.map((question) => (
                <Button
                  key={question}
                  text={question}
                  onClick={() => handleNextQ(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3>Video Games Master Quiz - Your Score : {score}</h3>
            <Button text="Restart" onClick={restartHandler}></Button>
          </div>
        )}
      </section>
    </>
  );
};

export default Quiz;
