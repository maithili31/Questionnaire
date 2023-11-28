import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';

function App() {
  const [username, setUsername] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned,setEarned] = useState("$ 0");

  var data=[
    {
      id: 1,
      question: "Which god is also known as ‘Gauri Nandan’?",
      answers:[
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Indra",
          correct: false,
        },
        {
          text: "Hanuman",
          correct: false,
        },
        {
          text: "Ganesha",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question:"When is the National Hindi Diwas celebrated?",
      answers:[
        {
          text:"13th September",
          correct: false,
        },
        {
          text:"14th July",
          correct: false,
        },
        {
          text:"14th September",
          correct: true,
        },
        {
          text:"15th August",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who wrote Vande Mataram?",
      answers:[
        {
          text:"Rabindranath Tagore",
          correct: false,
        },
        {
          text:"Bankim Chandra Chatterjee",
          correct: true,
        },
        {
          text:"Sarat Chandra Chattopadhyay",
          correct: false,
        },
        {
          text:"Ishwar Chandra Vidyasagar",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "The largest Buddhist Monastery in India is located at",
      answers:[
        {
          text:"Sarnath, Uttar Pradesh",
          correct: false,
        },
        {
          text:"Tawang, Arunachal Pradesh",
          correct: true,
        },
        {
          text:"Dharamshala , Himachal Pradesh",
          correct: false,
        },
        {
          text:"Gangtok, Sikkim",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of the following musical instruments is NOT of foreign origin?",
      answers:[
        {
          text:"Tabla",
          correct: false,
        },
        {
          text:"Sitar",
          correct: false,
        },
        {
          text:"Violin",
          correct: false,
        },
        {
          text:"Flute",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Which former Indian President died as a result of a road accident?",
      answers:[
        {
          text:"Giani Zail Singh",
          correct: true,
        },
        {
          text:"Rajendra Prasad",
          correct: false,
        },
        {
          text:"R. Venkatraman",
          correct: false,
        },
        {
          text:"Faqruddin Ali Ahmed",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who is the founder of the political party Dravida Munnetra Kazhagam (DMK)?",
      answers:[
        {
          text:"C. N. Annadurai",
          correct: true,
        },
        {
          text:"M. Karunanidhi",
          correct: false,
        },
        {
          text:"Jayalalitha",
          correct: false,
        },
        {
          text:"M. G. Ramachandran",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who was the first Indian woman to win a medal in the olympics?",
      answers:[
        {
          text:"P.T. Usha",
          correct: false,
        },
        {
          text:"Kunjarani Devi",
          correct: false,
        },
        {
          text:"Bachendri Pal",
          correct: false,
        },
        {
          text:"Karnam Maleshwari",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Which Mughal emperor was deported to Rangoon by the British?",
      answers:[
        {
          text:"Shah Jahan",
          correct: false,
        },
        {
          text:"Bahadur Shah II",
          correct: true,
        },
        {
          text:"Akbar Shah I",
          correct: false,
        },
        {
          text:"Bahadur Shah I",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who among the following is said to have witnessed the reigns of eight Delhi Sultans?",
      answers:[
        {
          text:"Minhaj-us-Siraj",
          correct: false,
        },
        {
          text:"Ziauddin Barani",
          correct: false,
        },
        {
          text:"Amir Khusro",
          correct: true,
        },
        {
          text:"Shams-i-Siraj Afif",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who wrote the introduction to the English translation of Rabindranath Tagore's Gitanjali? ",
      answers:[
        {
          text:"P. B. Shelley",
          correct: false,
        },
        {
          text:"W. B. Yeats",
          correct: true,
        },
        {
          text:"Alfred Tennyson",
          correct: false,
        },
        {
          text:"T. S. Elliot",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "The wife of which of these famous sports persons was once a captain of Indian volleyball team?",
      answers:[
        {
          text:"K. D. Jadav",
          correct: false,
        },
        {
          text:"Dhyan Chand",
          correct: false,
        },
        {
          text:"Prakash Padukone",
          correct: false,
        },
        {
          text:"Milkha Singh",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Which laptop do ",
      answers:[
        {
          text:"HP",
          correct: false,
        },
        {
          text:"Lenovo",
          correct: true,
        },
        {
          text:"Apple",
          correct: false,
        },
        {
          text:"Asus",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which laptop do i ",
      answers:[
        {
          text:"HP",
          correct: false,
        },
        {
          text:"Lenovo",
          correct: true,
        },
        {
          text:"Apple",
          correct: false,
        },
        {
          text:"Asus",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which laptop do i use",
      answers:[
        {
          text:"HP",
          correct: false,
        },
        {
          text:"Lenovo",
          correct: true,
        },
        {
          text:"Apple",
          correct: false,
        },
        {
          text:"Asus",
          correct: false,
        },
      ],
    },
  ]

 

  var newArray = data.sort(() => Math.random() - 0.5);
  const Shuffle= new Set();
  Shuffle.add(data);
    console.log(Shuffle)


  const moneyPyramid = useMemo (()=>
    [
      {id : 1 , amount:"Rs 100"},
      {id : 2 , amount:"Rs 200"},
      {id : 3 , amount:"Rs 300"},
      {id : 4 , amount:"Rs 500"},
      {id : 5 , amount:"Rs 1000"},
      {id : 6 , amount:"Rs 2000"},
      {id : 7 , amount:"Rs 4000"},
      {id : 8 , amount:"Rs 8000"},
      {id : 9 , amount:"Rs 16000"},
      {id : 10 , amount:"Rs 32000"},
      {id : 11 , amount:"Rs 64000"},
      {id : 12 , amount:"Rs 125000"},
      {id : 13 , amount:"Rs 250000"},
      {id : 14 , amount:"Rs 500000"},
      {id : 15 , amount:"Rs 1000000"},
  
    ].reverse(),
  []);

  useEffect(() => {
    questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount)
  },[moneyPyramid,questionNumber])

  return (
    <div className="App">
      {username ? (
        <> 
          <div className="main">
            {stop ? <h1 className='endText'> You earned : {earned}</h1> : (
            <>
              <div className="top">
                <div className="timer">
                  <Timer setStop={setStop} questionNumber={questionNumber}/>
                </div>
              </div>
              <div className="bottom">
                <Trivia 
                  // data={data} 
                  data={newArray}
                  setStop={setStop} 
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber} 
                />
              </div>
            </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m)=> (
                <li className={questionNumber=== m.id ? "moneyListItem active " : "moneyListItem" }> 
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
                ))}
            </ul>
          </div>
        </>
      ) : <Start setUsername={setUsername}/>}
      
    </div>
  );
}

export default App;
