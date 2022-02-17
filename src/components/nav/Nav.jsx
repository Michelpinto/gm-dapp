import React from "react";
import { useState } from "react";
import { Div } from "./styles";

const Nav = ({ connectWallet, connected }) => {
    return (
        <Div>
            <h1>gm</h1>
            <button onClick={connectWallet}>
                {connected ? "Connected" : "Connect wallet"}
            </button>
        </Div>
    );
};

export default Nav;
