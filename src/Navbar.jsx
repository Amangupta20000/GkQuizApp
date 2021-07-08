import React,{useState,useEffect} from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {result,isSubmitted} from './Questions';
import Sdata from './Sdata'



const Navbar = (props) => {
    const {initialMinute = 2,initialSeconds = 3} = props;
    let [ minutes, setMinutes ] = useState(initialMinute);
    let [seconds, setSeconds ] =  useState(initialSeconds);
    let myInterval;
    useEffect(()=>{
     myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    setSeconds(-1)
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    const Submit = ()=>{
        document.querySelector('#ShowResult').classList.add('ShowResult')
        document.querySelector('.ShowScore').innerHTML = `Your Score is ${result}/${Sdata.length}`
        document.querySelector('#hidden_div').classList.remove('hidden_div')
        document.querySelector('#hidden_div').classList.add('hidden_divs')
    }

    if(minutes ===0 && seconds===-1){
        seconds=0
        alert("Times Up")
        Submit();
        document.querySelector('#hidden_div').classList.remove('hidden_div') 
        document.querySelector('#hidden_div').classList.add('hidden_divs') 
    }
    if(isSubmitted){
       seconds=' completed'
       minutes='Quiz '
    document.querySelector('#hidden_div').classList.remove('hidden_div') 
    document.querySelector('#hidden_div').classList.add('hidden_divs') 
    }
    return (
        <div className='container-fluid text-center'>
            <label className="m-3"> <strong> Anonymous </strong> </label> 
            <lable className="vl m-2"></lable>
            <label className="m-3"><strong> General Knowledge Quiz </strong></label> 
            <lable className="vl m-2"></lable>
            <label className="timer m-3"><strong> Time Left :  <span id="countdown"> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds} </span>  </strong></label> 
           <div className="hidden_div" id='hidden_div'></div>
        </div>
    )
}

export default Navbar