
"use client";

import { TextInput } from "flowbite-react";


export function Component({id, type, icon, placeholder}) {
  return (
    <div className="w-full">     
      <TextInput id={id} type={type} icon={icon} sizing={"lg"} placeholder={placeholder} required />
    </div>
  );
}
