import * as C from '../styles/resume';
import React from 'react'
import { ResumeItem } from './ResumeIten';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from 'react-icons/fa';

interface ItemProps {
  income: string;
  expense: string;
  total: string;
}

export const Resume = (props: ItemProps) => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={ FaRegArrowAltCircleUp } value={props.income}/>
      <ResumeItem title="Saídas" Icon={ FaRegArrowAltCircleDown } value={props.expense} />
      <ResumeItem title="Total" Icon={ FaDollarSign } value={props.total} />
    </C.Container>
  )
}
