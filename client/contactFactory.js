import provider from "./provider";
import { ethers } from "ethers";

const contactFactoryAddress = "0x51a911549F99f8f04A5a7C91a722EB8Ed8904C07"
const contactFactoryAbi = [
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_telegram",
                "type": "string"
              }
            ],
            "name": "createContact",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_telegram",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_discord",
                "type": "string"
              }
            ],
            "name": "createContact",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "ownerToContact",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
];
const contactFactory = new ethers.Contract(contactFactoryAddress, contactFactoryAbi, provider);

export default contactFactory;