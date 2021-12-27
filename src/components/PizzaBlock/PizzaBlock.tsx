import React, { FC, useState } from 'react';
import classNames from 'classnames';

import Button from '../Button';
import { IPizza, IPizzaModel } from '../../types/types';

import plusIcon from '../../assets/img/plus.svg'

export interface IPizzaBlock extends IPizza {
  onClickAddPizza: (pizza: IPizzaModel) => void;
  addedCount: number | undefined;
  isLoading: boolean;
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
  const typeNames = ['thin', 'classic'];
  const avaliableSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState<number>(types[0]);
  const [activeSize, setActiveSize] = useState<number>(0);

  const onSelectType = (index: number, disablet: boolean) => {
    if (disablet) return
    setActiveType(index);
  };

  const onSelectSize = (index: number, disablet: boolean) => {
    if (disablet) return
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const pizzaModel: IPizzaModel = {
      id,
      name,
      imageUrl,
      price,
      type: typeNames[activeType],
      size: avaliableSizes[activeSize],
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
          {avaliableSizes.map((size, index) => {
            const disabled = !types.includes(index)
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
