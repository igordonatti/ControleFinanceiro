import React from 'react';
import { IconType } from 'react-icons/lib';
import * as C from '../styles/resumeItem';

export type ItemProps = {
  title: string;
  Icon: IconType;
  value: string;
}

export const ResumeItem = (props: ItemProps) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{props.title}</C.HeaderTitle>
        <props.Icon />
      </C.Header>
      <C.Total>{ props.value }</C.Total>
    </C.Container>
  )
}
