import React from 'react';
import { IShopData } from '../../ts/dataType';
import StoreItem from '../Card';
import styles from './StoreBlock.module.scss';

type CardsBlockProps = {
  data: IShopData[];
};

const CardsBlock = ({ data }: CardsBlockProps) => {
  return (
    <div className={styles['storeBlock-items']}>
      {data.map(
        (item: IShopData): JSX.Element => (
          <StoreItem {...item} key={item.id} />
        )
      )}
    </div>
  );
};

export default CardsBlock;
