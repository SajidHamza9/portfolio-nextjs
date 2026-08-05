import styled from "styled-components";
import { ContainedButton } from "@/components/Intro/styles";

export const Text = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.07rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: center;
  span {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 1.8rem;
    margin-right: 1rem;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 0.6;
    }
  }
`;

export const TextField = styled.input`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-family: sans-serif;
  color: ${({ theme }) => theme.bgColor};
  &:focus {
    border: none;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.bgColor};
  &:focus {
    border: none;
    outline: none;
  }
  resize: vertical;
  min-height: 10rem;
  margin: 0;
  font-family: sans-serif;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 1rem;
  margin-bottom: 1rem;
  display: block;
`;

export const FormChild = styled.div`
  margin-bottom: 2rem;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled(ContainedButton)`
  width: fit-content;
  box-shadow: none;
  font-size: 0.8rem;
  padding: 1.1rem 1.5rem;
`;

export const Error = styled.div`
  color: red;
  margin-top: 0.5rem;
`;
