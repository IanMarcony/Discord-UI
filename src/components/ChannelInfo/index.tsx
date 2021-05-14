import React from "react";

import {
  Container,
  Title,
  HashtagIcon,
  Separator,
  Description,
} from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>chat-livre</Title>
      <Separator />
      <Description>Aqui geral pode se falar</Description>
    </Container>
  );
};

export default ChannelInfo;
