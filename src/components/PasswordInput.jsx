
"use client";

import { TextInput } from "flowbite-react";
import { CiUnlock } from "react-icons/ci";

export function PassComponent() {
  return (
    <div className="">   
      <TextInput id="email4" type="password" icon={CiUnlock} sizing="lg" placeholder="********" required />
    </div>
  );
}
