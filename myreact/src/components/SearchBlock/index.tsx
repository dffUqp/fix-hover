import React, { useMemo, useState } from 'react';
import { useInputContext } from '../../context/SearchContent';
import { useSearchFilter } from '../../hooks/useAllAndHintsSearchItems';
import styles from './searchBlock.module.scss';
import storeItems from '../../data/resItems.json';

const SearchBlock = (): JSX.Element => {
  const { inputValue, setInputValue } = useInputContext();
  const [btnMoreVisible, setBtnMoreVisible] = useState<boolean>(false);

  const allItems = useSearchFilter(storeItems, inputValue);

  const hintsItems = useMemo(() => {
    if (!inputValue) {
      setBtnMoreVisible(false);
      return [];
    }

    let hintsItems = allItems;

    if (allItems.length >= 4) {
      hintsItems = hintsItems.splice(0, 3);
      setBtnMoreVisible(true);
    } else {
      setBtnMoreVisible(false);
    }

    return hintsItems;
  }, [inputValue, allItems]);

  return (
    <div className={styles['inputBlock']}>
      <img
        className={styles['inputBlock__icon']}
        src="./images/searchmagnifierinterfacesymbol1_79893.png"
        alt="search-icon"
      />
      <input
        className={styles['inputBlock__input']}
        type="text"
        placeholder="Search"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <div className={styles['inputBlock__hints']}>
        {hintsItems?.map((item) => (
          <div className={styles.hint} key={item.id}>
            <span>CAT POTNII</span>
          </div>
        ))}
        {btnMoreVisible && (
          <div className={styles.hint}>
            <span>MOREEE</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBlock;
