import React from 'react';
import {ButtonGroup} from 'react-native-elements';

export enum FilterType {
  ALL = 0,
  INCOMPLETE = 1,
  COMPLETED = 2,
}

interface Props {
  filterType: FilterType;
  setFilterType: (filter: FilterType) => void;
}

export const TodoFilter: React.FC<Props> = ({filterType, setFilterType}) => {
  const buttons = ['全て', '未完了のみ', '完了のみ'];

  return <ButtonGroup onPress={setFilterType} selectedIndex={filterType} buttons={buttons} />;
};