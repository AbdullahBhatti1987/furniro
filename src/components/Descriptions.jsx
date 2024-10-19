import React, { useState } from "react";

function Descriptions() {
  const [description, setDescription] = useState(true);
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [review, setReview] = useState(false);

  const showDescription = () => {
    setDescription(true);
    setAdditionalInfo(false);
    setReview(false);
  };
  
  const showAdditionalInfo = () => {
    setDescription(false);
    setAdditionalInfo(true);
    setReview(false);
  };
  
  const showReview = () => {
    setDescription(false);
    setAdditionalInfo(false);
    setReview(true);
  };

  return (
    <div className="lg:w-8/12 md:w-10/12 w-11/12 mx-auto py-12 flex flex-col gap-8">
      <div className="top flex flex-row gap-12 justify-center font-semibold">
        <button onClick={showDescription} className="text-xl text-gray-400 focus:text-black">
          Description
        </button>
        <button onClick={showAdditionalInfo} className="text-xl text-gray-400 focus:text-black">
          Additional Information
        </button>
        <button onClick={showReview} className="text-xl text-gray-400 focus:text-black">
          Review [5]
        </button>
      </div>

      {description && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-gray-400">
            <p className="text-justify">
              1 - Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="text-justify">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full">
        <div className="w-1/2 flex justify-start items-start overflow-hidden lightColor transition hover:scale-100">
          <img
            className="transition scale-70 hover:scale-100"
            src="https://s3-alpha-sig.figma.com/img/b739/5be5/3f5927c3cf50e945c3e0f03b3206e810?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMK3eoWGXBCp2MEdJtHiQx7lcrTnxCGofwLlATgoTMELUl8q7swxw7Xk8k8goLo0s1sU1nX4xYaJb6airSn-WAthkOZXafpDfZKD4pHX9Oo4wxiQTnkUH~u0kliaQE00sPSTnXY8r5~1xG8vGRpVE35RtY-6bBnLfxIFttue7GTuaJrzGIVTguCt16bgi966JjlSOlmDpHmMtg-s1rk~slDZ5mnAkBCf2SXTdrQXjsP5Drgo1eaFnL4uADiYezgv7PpBmR4mijHdyvUqsuhSr0Hlq-HghhF1-WR4LkYSouFHZiNzsmsQTNlmHpBNvX~ZoSncEuH41VAnAG1qmX9ktw__"
            alt=""
          />
        </div>
        <div className="w-1/2 flex justify-start items-start overflow-hidden lightColor transition hover:scale-100">
          <img
            className="transition scale-70"
            src="https://s3-alpha-sig.figma.com/img/1421/901b/217b5f7ea72cbcd9ce3062c4165744e5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IlAcNjI4S9Ik63nj83QskZOYsyUyh9Gw3JYDD9V9Xv5ayBMu0nlQ2Z-Ry~E5YlLzoObWK1etaRoYzoA4~xg1cs96yuHbGVF4K74ZF2D9nJfkHlvUICt0amzk3RE0kfjWkXOAwrtRGauXhpP5Yqo7iTnxSqszYaatkrinmud8dHt0k78HCBv6hSxQIYl6QtfVCrUvQXxKWqnI55ILIvCBWtfQ2UC0B431QErQDndFEeSP6IF5oaCANWYNKl5Z0h4rcshIzSGXF3GmfLY4tBPkz5eLztr5BQze1fS9Z9jkTebw-tLXGPU6BYRgYB53ZAPUHTedDVuVVuuUhGzvk981Wg__"
            alt=""
          />
        </div>
      </div>
        </div>
      )}

      {additionalInfo && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-gray-400">
            <p className="text-justify">
              2 - Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="text-justify">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full">
        <div className="w-1/2 flex justify-start items-start overflow-hidden lightColor transition hover:scale-100">
          <img
            className="transition scale-70 hover:scale-100"
            src="https://s3-alpha-sig.figma.com/img/b739/5be5/3f5927c3cf50e945c3e0f03b3206e810?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMK3eoWGXBCp2MEdJtHiQx7lcrTnxCGofwLlATgoTMELUl8q7swxw7Xk8k8goLo0s1sU1nX4xYaJb6airSn-WAthkOZXafpDfZKD4pHX9Oo4wxiQTnkUH~u0kliaQE00sPSTnXY8r5~1xG8vGRpVE35RtY-6bBnLfxIFttue7GTuaJrzGIVTguCt16bgi966JjlSOlmDpHmMtg-s1rk~slDZ5mnAkBCf2SXTdrQXjsP5Drgo1eaFnL4uADiYezgv7PpBmR4mijHdyvUqsuhSr0Hlq-HghhF1-WR4LkYSouFHZiNzsmsQTNlmHpBNvX~ZoSncEuH41VAnAG1qmX9ktw__"
            alt=""
          />
        </div>
        <div className="w-1/2 flex justify-start items-start overflow-hidden lightColor transition hover:scale-100">
          <img
            className="transition scale-70"
            src="https://s3-alpha-sig.figma.com/img/1421/901b/217b5f7ea72cbcd9ce3062c4165744e5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IlAcNjI4S9Ik63nj83QskZOYsyUyh9Gw3JYDD9V9Xv5ayBMu0nlQ2Z-Ry~E5YlLzoObWK1etaRoYzoA4~xg1cs96yuHbGVF4K74ZF2D9nJfkHlvUICt0amzk3RE0kfjWkXOAwrtRGauXhpP5Yqo7iTnxSqszYaatkrinmud8dHt0k78HCBv6hSxQIYl6QtfVCrUvQXxKWqnI55ILIvCBWtfQ2UC0B431QErQDndFEeSP6IF5oaCANWYNKl5Z0h4rcshIzSGXF3GmfLY4tBPkz5eLztr5BQze1fS9Z9jkTebw-tLXGPU6BYRgYB53ZAPUHTedDVuVVuuUhGzvk981Wg__"
            alt=""
          />
        </div>
      </div>
        </div>
      )}

      {review && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-gray-400">
            <p className="text-justify">
              3 - Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="text-justify">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering, with a well-balanced audio that boasts clear midrange and extended highs.
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full">
        <div className="w-1/2 flex justify-start items-start overflow-hidden lightColor transition hover:scale-100">
          <img
            className="transition scale-70 hover:scale-100"
            src="https://s3-alpha-sig.figma.com/img/b739/5be5/3f5927c3cf50e945c3e0f03b3206e810?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMK3eoWGXBCp2MEdJtHiQx7lcrTnxCGofwLlATgoTMELUl8q7swxw7Xk8k8goLo0s1sU1nX4xYaJb6airSn-WAthkOZXafpDfZKD4pHX9Oo4wxiQTnkUH~u0kliaQE00sPSTnXY8r5~1xG8vGRpVE35RtY-6bBnLfxIFttue7GTuaJrzGIVTguCt16bgi966JjlSOlmDpHmMtg-s1rk~slDZ5mnAkBCf2SXTdrQXjsP5Drgo1eaFnL4uADiYezgv7PpBmR4mijHdyvUqsuhSr0Hlq-HghhF1-WR4LkYSouFHZiNzsmsQTNlmHpBNvX~ZoSncEuH41VAnAG1qmX9ktw__"
            alt=""
          />
        </div>
        <div className="w-1/2 flex justify-start items-start overflow-hidden lightColor transition hover:scale-100">
          <img
            className="transition scale-70"
            src="https://s3-alpha-sig.figma.com/img/1421/901b/217b5f7ea72cbcd9ce3062c4165744e5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IlAcNjI4S9Ik63nj83QskZOYsyUyh9Gw3JYDD9V9Xv5ayBMu0nlQ2Z-Ry~E5YlLzoObWK1etaRoYzoA4~xg1cs96yuHbGVF4K74ZF2D9nJfkHlvUICt0amzk3RE0kfjWkXOAwrtRGauXhpP5Yqo7iTnxSqszYaatkrinmud8dHt0k78HCBv6hSxQIYl6QtfVCrUvQXxKWqnI55ILIvCBWtfQ2UC0B431QErQDndFEeSP6IF5oaCANWYNKl5Z0h4rcshIzSGXF3GmfLY4tBPkz5eLztr5BQze1fS9Z9jkTebw-tLXGPU6BYRgYB53ZAPUHTedDVuVVuuUhGzvk981Wg__"
            alt=""
          />
        </div>
      </div>
        </div>
        
      )}
    </div>
  );
}

export default Descriptions;
