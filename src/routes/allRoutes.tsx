/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContainerRoutes, RoutesPath } from "../constants";
import React, { Suspense } from "react";
import PageLoader from "../shared-component/loader";
import Container from "../shared-component/hoc/container";

function App() {
  return (
    <>
      <BrowserRouter>
        <React.Fragment>
          <Routes>
            {RoutesPath.map((item: any, index: number) => {
              return (
                <Route
                  path={item.path}
                  key={index}
                  element={
                    <Suspense fallback={<PageLoader />}>
                      {<item.element />}
                    </Suspense>
                  }
                />
              );
            })}
            <Route element={<Container />}>
              {ContainerRoutes.map((item: any, index: number) => {
                return (
                  <Route
                    path={item.path}
                    key={index}
                    element={
                      <Suspense fallback={<PageLoader />}>
                        {<item.element />}
                      </Suspense>
                    }
                  />
                );
              })}
            </Route>
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;
