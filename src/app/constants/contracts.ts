import { defineChain, getContract } from "thirdweb";
import { client } from "@/app/clients";

export const predictionMartketContractAddress = "0xB4acCD9e79d8Bbc932398399500718b509329658";
export const tokenAddress = "0x8E8e59Cc1B9C772afFe993824A060247a15a2f02";

export const predictionMartketContractContract = getContract({
    client: client,
    chain: defineChain(5003),
    address: predictionMartketContractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: defineChain(5003),
    address: tokenAddress
})