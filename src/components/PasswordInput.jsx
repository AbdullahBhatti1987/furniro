
"use client";

import { TextInput } from "flowbite-react";
import { CiUnlock } from "react-icons/ci";

export function PassComponent({placeholder, onChange}) {
  return (
    <div className="">   
      <TextInput id="password" type="password" icon={CiUnlock} sizing="lg" placeholder={placeholder} onChange={onChange} required />
    </div>
  );
}
