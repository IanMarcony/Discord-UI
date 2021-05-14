import React from "react";

import { Button } from "./styles";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  hasNotifications,
  isHome,
  mentions,
  selected,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src="https://svgshare.com/i/Pb9.svg" alt="Rocketseat" />}
    </Button>
  );
};

export default ServerButton;
