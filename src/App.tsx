import './App.css'

import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import Title from "@/components/Title.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ethers} from 'ethers'
import {useState} from "react";
function App() {
    const [mnemonics, setMnemonics] = useState<string | undefined>("");

    const generateRandom = ()=>{
        const mnemonic = ethers.Wallet.createRandom().mnemonic?.phrase;
        setMnemonics(mnemonic)
    }

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
                                <Button onClick={generateRandom}>Generate mnemonics</Button>
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

            </Card>
        </>
    );
}

export default App
