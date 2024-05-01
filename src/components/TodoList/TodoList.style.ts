import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const TodoHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 15px;
    margin-bottom: 10px;
  }
`;

export const TodoBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 12px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const TodoItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 49%;
  padding: 5px 10px;
  background-color: #18161c;

  @media (max-width: 900px) {
    width: 48%;
  }

  @media (max-width: 500px) {
    width: 47%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 100%;
  }
`;

export const TodoText = styled.span`
  font-size: 14px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.white};

  @media (max-width: 870px) {
    font-size: 12px;
  }
`;

export const DeleteItem = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  transition: 0.4s;
  font-weight: 300;
  color: red;

  @media (max-width: 870px) {
    font-size: 14px;
  }
`;
