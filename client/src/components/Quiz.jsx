import { useState } from 'react';
import Divider from './Divider.jsx';

function Quiz({ quiz }) {
  const [quizAnswers, setQuizAnswers] = useState({});

  function submit(e) {
    const valid = quiz.every((item) => {
      return quizAnswers[item.id] ? true : false;
    });
    if (!valid) {
      alert('Please make sure you answer all questions.');
      e.preventDefault();
    }
  }

  function onChange(value, index) {
    setQuizAnswers({ ...quizAnswers, [index]: value });
  }

  return (
    <form onSubmit={submit} action='/quiz/results'>
      <ul>
        {quiz.map((item) => {
          return (
            <li key={`li-${item.id}`} className='mb-6'>
              <p className='mb-4'>{item.question}</p>

              <fieldset className='mb-6 mx-8'>
                {item.options.map((option, index) => {
                  return (
                    <label key={index} className='block mb-2 cursor-pointer'>
                      <input
                        className='peer cursor-pointer'
                        type='radio'
                        name={item.id}
                        value={index}
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
    </form>
  );
}

export default Quiz;
