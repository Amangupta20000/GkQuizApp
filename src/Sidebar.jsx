import React from 'react'

const Sidebar =() => {
    
    return (
        <div className="Sidebar p-2">
        <div className="question_pallet">
        <h3>Question Pallet</h3>
            <button disabled="disabled" className='question_numbers' id='btn1'>1</button>
            <button disabled="disabled" className='question_numbers'id='btn2'>2</button>
            <button disabled="disabled" className='question_numbers'id='btn3'>3</button>
            <button disabled="disabled" className='question_numbers'id='btn4'>4</button>
            <button disabled="disabled" className='question_numbers'id='btn5'>5</button>
            <button disabled="disabled" className='question_numbers'id='btn6'>6</button>
            <button disabled="disabled" className='question_numbers'id='btn7'>7</button>
            <button disabled="disabled" className='question_numbers'id='btn8'>8</button>
            
        </div>
        
        <div className="legends m-4">
            <h3>Legends and Filters</h3>
            <button disabled="disabled" className='question_numbers'>3</button>
            <label>  : not visited / Answered</label>
            <br />
            <button disabled="disabled" className='question_Answered '>5</button>
            <label className='legendAnswer'>  :  Answered</label>
            <br />
        </div>
        </div>
    )
}

export default Sidebar
