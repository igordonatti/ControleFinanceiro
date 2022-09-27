import React from 'react';
import * as C from "../styles/gridItem";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
  FaTrash
} from 'react-icons/fa';

interface ItemProps {
  desc: string;
  amount: number;
  expense: number;
  id: number;
}

export const GridItem = ({ item, onDelete }: {item: ItemProps, onDelete: any}) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red"/>
        ) : (
          <FaRegArrowAltCircleUp color="green"/>
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>  
  )
}
