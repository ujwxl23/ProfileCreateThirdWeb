import React from 'react';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import "./styles/Home.css";
import AddDetails from "./components/AddDetails";
import UploadImage from './components/UploadImage';

export default function Home() {
  const address = useAddress();
  
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
                Profile Create.
            </span>
          </h1>

          <div className="connect">
            <ConnectWallet
              dropdownPosition={{
                side: "right",
                align: "start",
              }}
            />
          </div>
        </div>
      </div>
      <div className="add-details">
      <AddDetails />
      <UploadImage/>
      </div>
    </main>
  );
}
