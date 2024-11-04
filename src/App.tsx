import './App.css'

import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import Title from "@/components/Title.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ethers} from 'ethers'
import {useEffect, useState} from "react";
import IndividualWallet from "@/components/IndividualWallet.tsx";
function App() {
    const [mnemonics, setMnemonics] = useState<string | undefined>("");
    const [hdNodeWallet, setHdNodeWallet] = useState<ethers.HDNodeWallet[]>([])
    const [counter, setCounter] = useState(0);


    const generateAddress = ()=>{
        setCounter(counter + 1);
        const wallet = hdNodeWallet[0]!.derivePath(Number(counter).toString());
        setHdNodeWallet( preWallets => [...preWallets,wallet])

    }

    useEffect(()=>{
        console.log("im here");
        const mnemonic = ethers.HDNodeWallet.createRandom().mnemonic?.phrase;
        setMnemonics(mnemonic);
        if (mnemonic != null) {
            const hdNodeWallet = ethers.HDNodeWallet.fromPhrase(mnemonic);
            setHdNodeWallet( preWallets => [...preWallets,hdNodeWallet])
        }
        console.log("you are here");

    },[])
    return (
        <>
            <Card>
                <Tabs defaultValue="eth">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="eth">ETH</TabsTrigger>
                        <TabsTrigger value="sol">SOL</TabsTrigger>
                    </TabsList>
                    <TabsContent value="eth">
                        <Card>
                            <Title title="Ethereum"/>
                            <CardContent>
                                <p className="border-b-2 border-t-2">{ mnemonics != "" ? mnemonics : "Here you'll see the seed phrase."}</p>
                            </CardContent>
                            <CardFooter className="items-center flex justify-center">
                                <Button onClick={generateAddress}>Generate Address</Button>
                            </CardFooter>
                        </Card>

                    </TabsContent>
                    <TabsContent value="sol">
                        <Card>
                            <Title title="Solana"/>
                            <CardContent>
                                <p className="border-b-2 border-t-2">Here you'll see the seed phrase.</p>
                            </CardContent>
                            <CardFooter className="items-center flex justify-center">
                                <Button>Generate mnemonics</Button>

                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
                {hdNodeWallet.map(item => <IndividualWallet address={item.address} privateKey={item.privateKey} />)}
            </Card>
        </>
    );
}

export default App
