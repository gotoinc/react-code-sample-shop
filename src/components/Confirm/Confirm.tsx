import React, { FC } from 'react';
import './Confirm.scss';

interface IConfirm {
  question: string;
  onConfirmClick: (isClick: boolean) => void;
}

const Confirm: FC<IConfirm> = ({ question, onConfirmClick }) => {
  return (
    <div className="confirm">
      <div className="confirm__wrapper">
        <h2 className="confirm__title">{question}</h2>
        <div className="confirm__buttons">
          <button
            data-testid="cancel-button"
            onClick={() => onConfirmClick(false)}
            className="confirm__btn confirm__btn_cancel"
          >
            Cancel
          </button>
          <button
            data-testid="confirm-button"
            onClick={() => onConfirmClick(true)}
            className="confirm__btn confirm__btn_okay"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
