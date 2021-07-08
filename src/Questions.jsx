import React, { useState,useEffect } from 'react'
import Sdata from './Sdata'

let result;
let isSubmitted = false;


 const Questions = () => {
    let  answers,answer ;
    const [QuizResult, setQuizResult] = useState('')
    const [count , setCount] = useState(0)
    const [score,setscore] = useState(0)    
    const [data,setdata] =useState({})
    
    useEffect(() => {
        answers = document.querySelectorAll('.answer')
        }
    )
    
    const getCheckedAnswer = ()=>{
        
        answers.forEach((curAnsElem)=>{
            if(curAnsElem.checked){
            answer = curAnsElem.id
                if(count ===0){
                    document.querySelector('#btn1').classList.add('question_Answered')
                }
                if(count ===1){
                    document.querySelector('#btn2').classList.add('question_Answered')
                }
                if(count ===2){
                    document.querySelector('#btn3').classList.add('question_Answered')
                }
                if(count ===3){
                    document.querySelector('#btn4').classList.add('question_Answered')
                }
                if(count ===4){
                    document.querySelector('#btn5').classList.add('question_Answered')
                }
                if(count ===5){
                    document.querySelector('#btn6').classList.add('question_Answered')
                }
                if(count ===6){
                    document.querySelector('#btn7').classList.add('question_Answered')
                }
                if(count ===7){
                    document.querySelector('#btn8').classList.add('question_Answered')
                }
            }      
        })      
        return answer;
    }

    const deSelect = ()=>{
        answers.forEach((curAnsElem)=> curAnsElem.checked = false) 
    }
    useEffect(()=>{
        if (count < Sdata.length){     
            loadQuestion();
        }else{     
            isSubmitted = true   
            document.querySelector('#ShowResult').classList.add('ShowResult')  
            setQuizResult(`Your Score is ${score}/${Sdata.length}`)
        }
    },[count])

    const Answer = ()=>{
        setCount(count + 1)
        const checkedAnswer = getCheckedAnswer();
            if(checkedAnswer===data.ans){
                setscore(score + 1); 
            }
       deSelect();
    }

    const loadQuestion = () => { 
        setdata(Sdata[count])
    }
    result= score; 
  
  
    return (
        <div className='container-fluid displayQuestions '>
            <h2 className="question m-5 ">{data.question}</h2>
            <ul>
                <li>
                    <input type="radio" name="answer" id="ans1" className='answer' />
                    <label htmlFor="ans1" id="option1">{data.a}</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="ans2" className='answer' />
                    <label htmlFor="ans2" id="option2">{data.b}</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="ans3" className='answer' />
                    <label htmlFor="ans3" id="option3">{data.c}</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="ans4" className='answer' />
                    <label htmlFor="ans4" id="option4">{data.d}</label>
                </li>
            </ul>
            <button onClick={Answer} className="Submit_btn btn btn-success" disabled={false} id='Submit_btn'>Submit</button>
            <div className='HideResult text-center ' id="ShowResult">
            <h3 className="YourResult">Your Result :</h3>
            <h4 className="ShowScore">{QuizResult}</h4>
            </div>
        </div>
    )
}

export default Questions
export {result,isSubmitted}
