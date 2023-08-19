import { useContract } from "@thirdweb-dev/react";
import { PROFILE_CONTRACT_ADDRESS } from "../constants/addresses";
import { Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";
import { ethers } from "ethers";

export default function AddDetails() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

    return(
        <div>
        <p>Hello!! Enter details</p>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
            <input type="text" placeholder="Date of Birth" value={dob} onChange={e => setDob(e.target.value)} />
            <input type="text" placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)} />
            <Web3Button
                contractAddress={PROFILE_CONTRACT_ADDRESS}
                action={(contract) => contract.call(
                    "addDetails",
                    [name, age, dob, gender],
                )}
            >Create Profile</Web3Button>
       </div>
    );
}