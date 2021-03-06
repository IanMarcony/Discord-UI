import React from "react";
import ChannelButton from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" selected />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="estudo" />
      <ChannelButton channelName="devs" />
      <ChannelButton channelName="reuniões" />
    </Container>
  );
};

export default ChannelList;
