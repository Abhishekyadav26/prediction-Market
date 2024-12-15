"use client";
import { ConnectButton, lightTheme, } from "thirdweb/react";
import { client } from "@/app/clients";
import { defineChain } from "thirdweb";


export function Navbar() {

    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Simple Prediction Market</h1>
            <div className="items-center flex gap-2">
                <ConnectButton 
                    client={client} 
                    theme={lightTheme()}
                    chain={defineChain(5003)}
                    connectButton={{
                        style: {
                            fontSize: '0.75rem !important',
                            height: '2.5rem !important',
                            border: '2px black',
                        },
                        label: 'Sign In',
                    }}
                />
            </div>
        </div>
    );
}