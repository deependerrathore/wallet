import {CardDescription, CardHeader, CardTitle} from "@/components/ui/card.js";

function Title({title} : {title:string}      ) {
    return (
        <CardHeader>
            <CardTitle>Web 3 {title} Wallet</CardTitle>
            <CardDescription>A secure, multi-chain wallet supporting {title} networks. Easily manage assets, make transactions, and explore dApps across both blockchains, all from a single wallet interface.</CardDescription>
        </CardHeader>
    )
}

export default Title;