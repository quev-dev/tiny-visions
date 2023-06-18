import { useState, useEffect } from 'react';
import Divider from './Divider.jsx';

export default function Quiz({ quiz }) {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [submitError, setSubmitError] = useState(false);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);

  useEffect(() => {
    const defaultQuizAnswers = {};
    quiz.forEach((item) => {
      defaultQuizAnswers[item.id] = '';
    });
    setQuizAnswers(defaultQuizAnswers);
  }, [quiz]);

  function submit(e) {
    if (submitError) setSubmitError(false);
    const valid = quiz.every((item) => {
      return quizAnswers[item.id] ? true : false;
    });
    if (!valid) {
      const unanswered = quiz.filter((item) => !quizAnswers[item.id]);
      setUnansweredQuestions(unanswered);
      setSubmitError(true);
      e.preventDefault();
    }
  }

  function onChange(value, index) {
    setQuizAnswers({ ...quizAnswers, [index]: value });
  }

  return (
    <form onSubmit={submit} action='/quiz/results'>
      <ul>
        {quiz.map((item, index) => {
          return (
            <li key={`li-${item.id}`} className='mb-6'>
              <h5 className='font-bold mb-2'>
                Question {index + 1}{' '}
                <span className='opacity-20'>of {quiz.length}</span>
              </h5>
              <p className='mb-4'>{item.question}</p>

              <fieldset className='mb-6 mx-8'>
                {item.options.map((option, index) => {
                  return (
                    <label
                      key={index}
                      className='mb-2 cursor-pointer flex flex-row gap-1 bg-palette-c-darker rounded-md p-4'
                    >
                      <input
                        className='peer cursor-pointer'
                        type='radio'
                        name={item.id}
                        value={index}
                        checked={quizAnswers[item.id] === index.toString()}
                        onChange={(e) => {
                          onChange(e.target.value, item.id);
                        }}
                      />
                      <span className='ml-2 peer-checked:text-palette-c-accent'>
                        {option.answer}
                      </span>
                    </label>
                  );
                })}
              </fieldset>
              <Divider />
            </li>
          );
        })}
      </ul>
      <div className='w-full flex items-center'>
        <button className='mx-auto px-4 py-1 bg-palette-c-accent rounded'>
          Submit
        </button>
      </div>
      {submitError && (
        <div>
          <aside className='tarot-dialogue mt-5 flex flex-col gap-2 border-4 border-red-600 bg-palette-c-darker rounded-md p-4'>
            <h5 className='text-center font-bold'>🚫 Warning!</h5>
            <p>
              You have not responded to all of the questions. You must complete{' '}
              <b>each</b> question before you can submit the quiz.
            </p>
            <ul className='flex flex-col gap-2'>
              <li>Unanswered questions:</li>
              <li className='flex flex-wrap gap-x-2'>
                {unansweredQuestions.map((item) => (
                  <span key={item.id}>{parseInt(item.id) + 1}.</span>
                ))}
              </li>
            </ul>
            <br />
          </aside>
          <br />
          <Divider />
        </div>
      )}
    </form>
  );
}
