import { FocusEvent, useMemo, useState } from 'react';
import { useInputContext } from '../../context/SearchContent';
import { useSearchFilter } from '../../hooks/useSearchFilter';
import styles from './searchBlock.module.scss';
import storeItems from '../../data/resItems.json';
import SearchInput from '../UI/SearchInput';
import { formatCurrency } from '../../utils/formatCurrency';
import { Link } from 'react-router-dom';

const InputBlock = (): JSX.Element => {
  const { inputValue, setInputValue } = useInputContext();
  const [isHintsVisible, setIsHintsVisible] = useState(true);
  const [btnMoreVisible, setBtnMoreVisible] = useState<boolean>(false);

  const allItems = useSearchFilter(storeItems, inputValue);

  const hintsItems = useMemo(() => {
    if (!inputValue) {
      setBtnMoreVisible(false);
      return [];
    }

    let hintsItems = allItems;

    if (allItems.length >= 3) {
      hintsItems = hintsItems.splice(0, 2);
      setBtnMoreVisible(true);
    } else {
      setBtnMoreVisible(false);
    }

    return hintsItems;
  }, [inputValue, allItems]);

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    const currentTarget = e.currentTarget;
    console.log(currentTarget);

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setIsHintsVisible(false);
      }
    }, 0);
  };

  return (
    <SearchInput
      tabIndex={1}
      onFocus={() => setIsHintsVisible(true)}
      onBlur={handleBlur}
      type="text"
      placeholder="Search..."
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
    >
      {isHintsVisible && (
        <div className={styles.hints} onClick={() => setIsHintsVisible(false)}>
          {hintsItems.map((item) => (
            <Link to={'roll/' + item.id} key={item.id}>
              <div className={styles.hints__hint}>
                <div className={styles['hints__hint-hover']} />
                <img
                  src={item.imgUrl}
                  alt="roll"
                  className={styles.hints__hint__img}
                />
                <div className={styles.hints__hint__about}>
                  <span className={styles.hints__hint__title}>{item.name}</span>
                  <p className={styles.hints__hint__subtitle}>
                    Рис, угорь, каку унаги, кунжут, водоросли нори.
                  </p>
                </div>
                <span className={styles.hints__hint__price}>
                  {formatCurrency(item.price)}
                </span>
              </div>
            </Link>
          ))}
          {btnMoreVisible && (
            <Link to="search">
              <div className={styles.hints__hint}>
                <div className={styles['hints__hint-hover']} />
                <span>MOREEE</span>
              </div>
            </Link>
          )}
        </div>
      )}
    </SearchInput>
  );
};

export default InputBlock;
