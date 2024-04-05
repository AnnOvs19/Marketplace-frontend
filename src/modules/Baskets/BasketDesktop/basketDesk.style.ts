import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const BasketTable = styled.table`
  background-color: ${mainTheme.colors.gray};
  width: 100%;
  /* display: flex;
  flex-direction: column;
  gap: 20px; */
`;

export const TableHead = styled.thead`
  text-align: center;
`;

export const TableString = styled.tr`
  /* display: flex;
  align-items: center; */
`;

export const TableCell = styled.th`
  padding-bottom: 15px;

  &:first-child {
    width: 50%;
  }
`;

export const TableBody = styled.tbody``;

export const BodyElement = styled.td`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; */
`;
