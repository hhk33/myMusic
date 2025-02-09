import React, { Suspense } from "react";
import type { FC } from "react";
import { useRoutes } from "react-router-dom";

import routes from "@/router/index";
import Container from "@/components/contianer";
import Menu from "@/components/menu";
import Player from "@/components/palyer";

const App: FC = () => {
  return (
    <div>
      <Container>
        <Menu />
        <Suspense fallback="">{useRoutes(routes)}</Suspense>
      </Container>
      <Player />
    </div>
  );
};

export default App;
