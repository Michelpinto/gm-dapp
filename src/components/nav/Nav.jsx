import React from "react";
import { useState } from "react";
import { Div } from "./styles";

const Nav = ({ connectWallet, connected, userAcc }) => {
    return (
        <Div>
            <h1>gm</h1>
            <button onClick={connectWallet}>
                {connected === true && userAcc.length > 0
                    ? "Connected: " +
                      String(userAcc).substring(0, 6) +
                      "..." +
                      String(userAcc).substring(38)
                    : "Connect wallet"}
            </button>
        </Div>
    );
};

export default Nav;
