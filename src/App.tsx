import React, { Suspense } from "react";
import type { FC } from "react";

import Router from "@/router/index";
import Container from "@/components/contianer";
import Menu from "@/components/menu";
import Player from "@/components/palyer";

const App: FC = () => {
  return (
    <div>
      <Container>
        <Menu />
        <Suspense fallback="">
          <Router />
        </Suspense>
      </Container>
      <Player />
    </div>
  );
};

export default App;
