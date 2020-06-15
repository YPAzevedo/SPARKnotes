import React, { memo } from "react";

import logo from '../../assets/logo.svg'

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="spark-notes" height={45}/>
    </Container>
  );
};

export default memo(Header);
