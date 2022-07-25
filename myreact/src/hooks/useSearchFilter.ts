import { useMemo } from 'react';
import { IShopData } from '../ts/dataType';

export const useSearchFilter = (
  searchItems: IShopData[],
  inputValue: string
): IShopData[] =>
  useMemo(
    () =>
      searchItems.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [inputValue, searchItems]
  );
