import React, { memo } from "react";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <span id="logo" role="img" aria-label="notebooks">
          ⚡️📚
        </span>
        <span id="title">
          <b>SPARK</b>notes
        </span>
      </div>
    </Container>
  );
};

export default memo(Header);
