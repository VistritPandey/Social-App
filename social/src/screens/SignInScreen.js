import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components";

export default SignInScreen = () => {
  return (
    <Container>
      <Main></Main>
      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View``;

const RightCircle = styled.View`
  background-color: #8022d9;
  position: absolute;
  widht: 400px;
  height: 400px;
  border-radius: 200px;
  left: -100px;
  top: -200px;
`;

const LeftCircle = styled.View`
  background-color: #23a6d5;
  position: absolute;
  widht: 200px;
  height: 200px;
  border-radius: 100px;
  left: -50px;
  top: -50px;
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
`;
