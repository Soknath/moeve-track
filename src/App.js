import React from 'react';
import Map from "./map/map.js";
import Layout from "./rightSidebar/index.js";
import "./App.css";
import "@tremor/react/dist/esm/tremor.css";
import Device from "./deviceList";
import DetailData from "./detailData/index";
import { ContextWrapper } from "./AppContext.js";

function App() {
  return (
    <div className="App">
      <ContextWrapper>
        <div className="flex w-screen">
          <div className="flex w-full">
            <Layout>
              <div className="flex">
                <Device />
              </div>
              <div className="flex w-full">
                <div className="relative w-full">
                  <Map />
                  <div className="absolute bottom-0 w-full bg-white">
                    <div className="h-96 w-full p-3">
                      <DetailData />
                    </div>
                  </div>
                </div>
              </div>
            </Layout>
          </div>
        </div>
      </ContextWrapper>
    </div>
  );
}

export default App;
