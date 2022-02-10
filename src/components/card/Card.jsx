import React from "react";
import { CardDiv, InsideDiv, P } from "./styles";
import Image from "next/image";

const Card = () => {
    return (
        <CardDiv>
            <InsideDiv>
                <Image
                    src={"/ethereum-icon-purple.svg"}
                    width={19}
                    height={49}
                    alt="eth"
                />
                <p>Eth balance</p>
            </InsideDiv>

            <P>Address</P>
        </CardDiv>
    );
};

export default Card;
