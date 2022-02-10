import React from "react";
import { Button, Card, Input } from "./styles";

const Body = () => {
    return (
        <Card>
            <Input placeholder="Address to" />
            <Input placeholder="Message" />
            <Input placeholder="Amount(eth)" />
            <Button>Send</Button>
        </Card>
    );
};

export default Body;
