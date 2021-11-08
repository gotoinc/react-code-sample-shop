import React from 'react'

function Confirm({ question, onConfirmClick }) {
   return (
      <div className="confirm">
         <div className="confirm__wrapper">
            <h2 className="confirm__title">{question}</h2>
            <div className="confirm__buttons">
               <button onClick={() => onConfirmClick(false)} type="button" className="confirm__btn confirm__btn_cancel">Cancel</button>
               <button onClick={() => onConfirmClick(true)} type="button" className="confirm__btn confirm__btn_okay">Yes</button>
            </div>
         </div>
      </div>
   )
}

export default Confirm
