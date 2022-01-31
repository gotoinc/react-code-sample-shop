import React, { FC } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

interface IButtonProps {
  className?: string;
  dataTestId?: string;
  outline?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({
  className,
  outline,
  onClick,
  children,
  dataTestId,
  disabled,
}) => {
  return (
    <button
      data-testid={dataTestId}
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
