import React, { FC, useState } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import { IPizza, IPizzaModel } from '../../types/types';
import plusIcon from '../../assets/img/plus.svg'
import { availableSizes, typeNames } from '../../data';

export interface IPizzaBlock extends IPizza {
  onClickAddPizza: (pizza: IPizzaModel) => void;
  addedCount: number | undefined;
  isLoading: boolean;
}

const getInitialActiveSize = (sizes: Array<number>) => {
  const activeSize = availableSizes.findIndex(
    (size: number) => sizes.includes(size)
  );
  return activeSize
}

const PizzaBlock: FC<IPizzaBlock> = ({
  id,
  imageUrl,
  name,
  price,
  types,
  sizes,
  onClickAddPizza,
  addedCount,
}) => {
  const [activeType, setActiveType] = useState<number>(types[0]);
  const [activeSize, setActiveSize] = useState<number>(getInitialActiveSize(sizes));
  const onSelectType = (index: number, disabled: boolean) => {
    if (!disabled) {
      setActiveType(index);
    }
  };

  const onSelectSize = (index: number, disabled: boolean) => {
    if (!disabled) {
      setActiveSize(index);
    }
  };

  const onAddPizza = () => {

    if (activeSize === -1) {
      alert("Size of pizza should be defined!")
      return;
    }

    const pizzaModel: IPizzaModel = {
      id,
      name,
      imageUrl,
      price,
      type: typeNames[activeType],
      size: availableSizes[activeSize],
    };
    onClickAddPizza(pizzaModel);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typeNames.map((type, index) => {
            const disabled = !types.includes(index)
            return (
              <li
                key={type}
                className={classNames({
                  active: activeType === index,
                  disabled,
                })}
                onClick={() => onSelectType(index, disabled)}
                data-testid="item-select-type"
              >
                {type}
              </li>
            )
          })}
        </ul>
        <ul>
          {availableSizes.map((size, index) => {
            const disabled = !sizes.includes(size)
            return (
              <li
                key={size}
                className={classNames({
                  active: activeSize === index,
                  disabled,
                })}
                onClick={() => onSelectSize(index, disabled)}
              >
                {size} cm
              </li>
            )
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from {price} $</div>
        <Button
          onClick={onAddPizza}
          dataTestId="add-pizza-button"
          className="button--add"
          outline
          disabled={activeSize === -1}
        >
          <img src={plusIcon} alt="plus" />
          <span>Add</span>
          <i>{`(${addedCount ? addedCount : 0})`}</i>
        </Button>
      </div>
    </div>
  );
};

export default PizzaBlock;
