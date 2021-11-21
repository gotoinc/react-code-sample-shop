import React from 'react';

const SortPopup = React.memo(function SortPopup({
  items,
  onClickSortType,
  activeSortType,
}) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortRef = React.useRef();
  const activeLabel = items.find((obj) => {
    return obj.type === activeSortType;
  }).name;

  const toggleVidiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const onSelectItem = (index) => {
    onClickSortType(index);
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
            {items.map((obj, index) => (
              <li
                key={`${obj.type}+${index}`}
                className={activeSortType === obj.type ? 'active' : ''}
                onClick={() => onSelectItem(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.defaultProps = {
  items: [],
};

export default SortPopup;
