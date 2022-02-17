import React from "react";
import { CardDiv, InsideDiv, P } from "./styles";
import Image from "next/image";
import { useState } from "react";

const Card = ({ balanceAcc, connectWallet, showAddress }) => {
    return (
        <CardDiv>
            <InsideDiv>
                <Image
                    src={"/ethereum-icon-purple.svg"}
                    width={19}
                    height={49}
                    alt="eth"
                />
                <p>{connectWallet && `${balanceAcc} ETH`}</p>
            </InsideDiv>

            <P>{showAddress}</P>
        </CardDiv>
    );
};

export default Card;
