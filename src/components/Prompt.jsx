import React from 'react'

function Prompt({ question }) {
   return (
      <div className="prompt">
         <div className="prompt__wrapper">
            <h2 className="prompt__title">{question}</h2>
            <div className="prompt__buttons">
               <button type="button" className="prompt__btn prompt__btn_cancel">Отменить</button>
               <button type="button" className="prompt__btn prompt__btn_okay">Да</button>
            </div>
         </div>
      </div>
   )
}

export default Prompt