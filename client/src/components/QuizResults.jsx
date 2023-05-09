import Divider from "./Divider";

function scorePercent(max, value){
  const percent = value / max * 100
  return `${percent}%`
}

//TODO replace placeholder text
export default function Results({quiz}){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const quizAnswers = {}
  let isValid = true

  let counter = 0
  for (const [key, value] of urlParams){
    const options = new Set([0,1,2])
    if (key != counter){
      isValid = false
    }
    if (!options.has(Number(value))){
      isValid = false
      console.log("doesn't have value: ", value)
    }
    quizAnswers[key] = value
    counter++
  }
  if(counter != 20){
    isValid = false
  }

  let totalScores = {}
  if(isValid){
    for(let [indx, opt] of Object.entries(quizAnswers)){
      const answerScore = quiz[indx].options[opt].score
      for(let [card, score] of Object.entries(answerScore)){
        if(totalScores[card]){
          totalScores[card] += score
        } else {
          totalScores[card] = score
        }
      }
    }
  }
  const sorted = Object.entries(totalScores).sort((a,b) => b[1] - a[1])
  return (
    <main
      className='bg-palette-c-dark text-palette-c-light mx-auto sm:text-2xl px-4 sm:px-8 mb-24'
    >
      <header className='my-12 max-w-4xl mx-auto'>
        <h2
          className='text-center text-2xl sm:text-4xl mb-16 font-bold text-palette-c-accent'
        >
          Quiz Results
        </h2>
        <p>
          {isValid ? 'Place Holder Text' : 'Invalid results, please retake the quiz'}
        </p>
      </header>
      <Divider/>
      {isValid ? 
        <section className='max-w-5xl mx-auto mt-12'>
          <div className='grid grid-flow-row'>
            {sorted.map((item) => {
              return (
                <div key={item[0]} className='flex flex-col capitalize mb-4'>
                  {item[0]}
                  <div className="w-full rounded h-7 bg-zinc-700 mt-2">
                    <div className="bg-palette-c-accent h-7 rounded" style={{width: scorePercent(sorted[0][1],item[1])}}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </section> : null}
    </main>
  )
}