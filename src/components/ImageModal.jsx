
"use client";

import { Modal } from "flowbite-react";
import { useState } from "react";


export function ImageModal({src}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>
      <img
          className="w-1/3 border-2 border-gray-300 rounded-lg shadow-md cursor-pointer"
          src={src}
          alt=""
        />
      </button>
      <Modal dismissible show={openModal}  size="2xl" onClose={() => setOpenModal(false)}>
   
        <Modal.Body>
          <div className="text-center">
                <img src={src} alt="" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

