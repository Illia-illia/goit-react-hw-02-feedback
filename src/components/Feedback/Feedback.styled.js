import styled from 'styled-components';

export const Wrap = styled.div`
  width: 500px;
  padding: 15px;
`;

export const Title = styled.p`
  font-family: sans-serif;
  font-size: 25px;
  font-weight: 700;
`;

export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #d9fbbe;
  border-radius: 6px;
  border: 1px solid #212121;
  display: inline-block;
  cursor: pointer;
  color: #212121;
  font-family: Georgia;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 15px;
  text-decoration: none;
  margin-right: 15px;

  &:hover {
    color: #ffffff;
  }
`;

export const Text = styled.p`
  font-family: sans-serif;
  font-size: 25px;
  line-height: 1.15px;
  padding-bottom: 10px;
`;
