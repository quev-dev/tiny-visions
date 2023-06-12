import { useState, useEffect } from 'react';

export default function QuizQuestions({ quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});

  const saveQuestionData = (value, index) => {
    setQuizAnswers((quizAnswers) => ({
      ...quizAnswers,
      [index]: value,
    }));
  };
  const goToQuestion = (questionNumber) => {
    if (questionNumber < 0) questionNumber = 0;
    else if (questionNumber > quiz.length - 1) questionNumber = quiz.length - 1;
    setCurrentQuestion(questionNumber);
  };

  function submitQuiz(e) {
    e.preventDefault();
    const valid = quiz.every((item) => {
      return quizAnswers[item.id] ? true : false;
    });
    if (!valid) {
      alert('Please make sure you answer all questions.');
    } else {
      const queryString = Object.keys(quizAnswers)
        .map((key) => `${key}=${quizAnswers[key]}`)
        .join('&');
      window.location.href = `/quiz/results/?${queryString}`;
    }
  }

  function renderQuestion() {
    const questionToRender = quiz[currentQuestion];
    const selectedAnswer = quizAnswers[questionToRender.id] || '';
    return (
      <li key={`li-${questionToRender.id}`}>
        <h4 className='font-bold text-center my-3'>
          Question {currentQuestion + 1} of {quiz.length}:
        </h4>
        <p className='mb-4'>{questionToRender.question}</p>

        <fieldset className='mx-8'>
          {questionToRender.options.map((option, index) => {
            return (
              <label key={index} className='block mb-2 cursor-pointer'>
                <input
                  className='peer accent-palette-c-accent'
                  type='radio'
                  name={questionToRender.id}
                  value={index}
                  checked={selectedAnswer === index.toString()}
                  onChange={(e) => {
                    saveQuestionData(e.target.value, questionToRender.id);
                  }}
                />
                <span className='ml-2 peer-checked:text-palette-c-accent'>
                  {option.answer}
                </span>
              </label>
            );
          })}
        </fieldset>
      </li>
    );
  }

  return (
    <form
      onSubmit={submitQuiz}
      action='/quiz/results'
      className='flex flex-col gap-4 bg-palette-c-darker rounded-md p-4'
    >
      <ul>{renderQuestion()}</ul>
      <div className='flex flex-row gap-4 justify-center'>
        <button
          type='button'
          onClick={() => goToQuestion(currentQuestion - 1)}
          className='rounded-md py-1 px-2 bg-palette-c-dark text-palette-c-light'
        >
          Prev
        </button>
        <button
          type='button'
          onClick={() => goToQuestion(currentQuestion + 1)}
          className='rounded-md py-1 px-2 bg-palette-c-dark text-palette-c-light'
        >
          Next
        </button>
      </div>
      <div className='flex justify-center'>
        {currentQuestion === quiz.length - 1 && (
          <button
            className='rounded-md max-w-max py-2 px-8 bg-palette-c-accent text-palette-c-light'
            type='submit'
          >
            Submit Quiz
          </button>
        )}
      </div>
    </form>
  );
}
