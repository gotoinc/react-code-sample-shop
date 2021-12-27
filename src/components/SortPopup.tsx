import React, { FC } from 'react';

import selectIcon from '../assets/img/select-icon.svg'

type ItemType = {
  name: string;
  type: string;
  order: string;
};

interface ISortPopup {
  items: ItemType[];
  onClickSortType: (typeOfPizza: ItemType) => void;
  activeSortType: string;
}

const SortPopup: FC<ISortPopup> = React.memo(
  ({ items, onClickSortType, activeSortType }) => {
    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
    const sortRef = React.useRef<HTMLDivElement>(null);
    const activeLabel = items.find((sort) => {
      return sort.type === activeSortType;
    })!.name;

    const toggleVidiblePopup = () => {
      setVisiblePopup(!visiblePopup);
    };
    const handleOutsideClick = (e: any) => {
      if (!e.path.includes(sortRef.current)) {
        setVisiblePopup(false);
      }
    };
    React.useEffect(() => {
      document.body.addEventListener('click', handleOutsideClick);
    }, []);

    const onSelectItem = (typeOfPizza: ItemType) => {
      console.log(typeOfPizza);
      onClickSortType(typeOfPizza);
      setVisiblePopup(false);
    };
    return (
      <div ref={sortRef} className="sort">
        <div className="sort__label">
          <b>Sort by:</b>
          <span onClick={toggleVidiblePopup}>
            {activeLabel}
            <img src={selectIcon} alt="select icon" />
          </span>
        </div>
        {visiblePopup && (
          <div className="sort__popup">
            <ul>
              {items.map((typeOfPizza, index) => (
                <li
                  key={`${typeOfPizza.type}+${index}`}
                  className={
                    activeSortType === typeOfPizza.type ? 'active' : ''
                  }
                  onClick={() => onSelectItem(typeOfPizza)}
                >
                  {typeOfPizza.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
);

export default SortPopup;
