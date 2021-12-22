import React, { FC } from 'react';

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
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41 0.200195L6 4.78019L10.59 0.200195L12 1.6102L6 7.61019L-6.16331e-08 1.61019L1.41 0.200195Z"
                fill="#151515"
              />
            </svg>
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
