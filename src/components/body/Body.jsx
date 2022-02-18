import React, { useState } from "react";
import { Button, Card, Input, UiMsg } from "./styles";
import gmAbi from "../../../artifacts/contracts/Gm.sol/Gm.json";
import { ethers } from "ethers";

const Body = ({ connected, connectWallet }) => {
    const gmContract = "0x2386cA300DedDAa2363e7638b0F31F402691EDc8";
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");
    const [amount, setAmount] = useState("");
    const [uiMessage, setUiMessage] = useState("");

    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleChangeAmount = (e) => {
        setAmount(e.target.value);
    };

    async function sendEth() {
        if (address == "" || message == "" || amount == "") {
            setUiMessage("Please fill out the fields");
        } else {
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            const signer = provider.getSigner();

            const contract = new ethers.Contract(gmContract, gmAbi.abi, signer);

            setUiMessage("Waiting on transaction success... ⏳");

            const transaction = await contract.sendEth(address, message, {
                value: ethers.utils.parseEther(amount),
            });

            await transaction.wait();

            setUiMessage("Transaction complete! 🥳");
        }
    }

    return (
        <>
            <Card>
                <Input
                    name="address"
                    onChange={handleChangeAddress}
                    value={address}
                    required
                    placeholder="Address to"
                />
                <Input
                    onChange={handleChangeMessage}
                    value={message}
                    placeholder="Message"
                />
                <Input
                    onChange={handleChangeAmount}
                    type="number"
                    value={amount}
                    required
                    placeholder="Amount(eth)"
                />
                <Button onClick={sendEth}>Send</Button>
            </Card>

            <UiMsg>{uiMessage}</UiMsg>
        </>
    );
};

export default Body;
