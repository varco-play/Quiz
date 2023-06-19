import React from "react";
import './App.scss'

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
  {
    title: "Hook - это ... ?",
    variants: ["коса", "инструмкет в реакт", "удар"],
    correct: 1,
  },
  {
    title: "Что озночает ! в js?",
    variants: ["Утверждает что-то", "Важное", "False"],
    correct: 2,
  },
  {
    title: "Какое действие верное?",
    variants: ["npm create-react-app", "npx create-react-app .", "npm create-react"],
    correct: 1,
  },
  {
    title: "Что такое FireBase",
    variants: ["Такого нет", "База данных", "Основная библиотека"],
    correct: 1,
  },
  {
    title: "Кто такой Стив Джобс",
    variants: ["Создатель Micrasoft", "Создатель Twitter", "Создатель телефонов"],
    correct: 0,
  },
  {
    title: "121, 100, 81, ...?",
    variants: ["73", "нету правельного ответа", "64"],
    correct: 2,
  },
  {
    title: "Artificial Intelligence - это ... ?",
    variants: ["Искуственный интелект", "Артификальный интилигент", "Правельного ответа нет"],
    correct: 0,
  },
];


function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const persentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${persentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const question = questions[step];



  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);


    if(index == question.correct) {
      setCorrect(correct + 1);
      };
    

    }
  return (
    <div className="App">
      {step != questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
