function  IndividualWallet  ({address,privateKey}: {address:string, privateKey:string})  {
    return (
        <div className="individualWallet">
            <div>Address: ${address}</div>
            <div>Private Key: ${privateKey}</div>
        </div>
    )
}

export default IndividualWallet;