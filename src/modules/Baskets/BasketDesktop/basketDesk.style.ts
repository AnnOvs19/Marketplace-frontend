import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const BasketTable = styled.div`
  padding: 25px;
  background-color: #161616;
  border: 1px solid ${mainTheme.colors.gray};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const TableString = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 15px;

  @media (${mainTheme.deviсe.laptopM}) {
    gap: 30px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 25px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 20px;
  }
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const BodyElement = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 11px;

  &:nth-child(1) {
    width: 390px;
  }

  &:nth-child(2) {
    width: 85px;
  }

  &:nth-child(4) {
    width: 85px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    &:nth-child(1) {
      width: 900px;
    }

    &:nth-child(2) {
      width: 155px;
    }

    &:nth-child(4) {
      width: 155px;
    }
  }

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 5px;
    &:nth-child(2) {
      width: 165px;
    }

    &:nth-child(4) {
      width: 165px;
    }
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 5px;
    &:nth-child(2) {
      width: 190px;
    }

    &:nth-child(4) {
      width: 190px;
    }
  }

  @media (max-width: 690px) {
    gap: 5px;
    &:nth-child(2) {
      width: 227px;
    }

    &:nth-child(4) {
      width: 227px;
    }
  }
`;
