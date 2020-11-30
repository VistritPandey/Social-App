import React from "react";
import styled from "styled-components";

export default function SignInScreen() {
  return (
    <Container>
      <Main></Main>
      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View``;

const RightCircle = styled.View``;

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
