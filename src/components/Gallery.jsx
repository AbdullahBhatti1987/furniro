import React from "react";

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: "https://s3-alpha-sig.figma.com/img/9954/4b25/1da1dc5c1c4cd5091a6369784c3b3366?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oePmNhazmDe7I6oxgLtVoC1cFkBuXAcnw~-y1AXIhG-sfMwYrkHGQJJa~dVOfOuFfkXSfO45uMowjnyWEba1hF9~1yAVaoWzNhTUhxTe32gv3i9ymSZnTjdimJbZhe7WhBShtan7ZIuZM2Pm3zhJ2izp8jLLwmfsE24pws9BM3gb5ghshSGSZC9dOoHDHMyMV1V2ayekKK~h72lzWs~BFS0EyyztVQvejqUd9JjcXXlXACkW8~Rye7daufUO27kf0RKiO7IMUp8mO7G~64D3WqMHO0ZAju3LEgQ0VEqex7hyCCai62NfzVPx-9KkJLba3XCzJH5UIcwkKPSvmacufw__",
    },
    {
      id: 2,
      src: "https://s3-alpha-sig.figma.com/img/a4bb/2814/2f4aae4edaceced4645de9ad49216504?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWpKiQpmnku0085YaUGlmYtKaWcwKLxrn1hZpX1ArgnNdVi41~gsY9JNgyndNnDUzlefULR7SmRnkhTeuCL4fMWphUujVdJlGQ-PVzHzv4mdQKD25g1d5JC4kjXyhOL~zNdgtqzZgVcH0NgTHRNzbpQuHgmf2ZbXSF6SJYuPfDnBEldeuaKANr43pYi5ClUKd2~LEgENNP76e2XAVzdIRTDrhAvv431TbG2A8K7AgYaT8qiH6Hb9v8QbcH0uQ7O~pKa~8ojZrCQAeqq0bAmrKCv-znqgZiR~AqI8wStdYZJkKgAO0O-yT2RfIoQ63zgFeKWTxU8dYyw581pi7INhsw__",
    },
    {
      id: 3,
      src: "https://s3-alpha-sig.figma.com/img/e8ee/1dc9/413c23f2d7371be94a52ea9020db45cc?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eKMNxcKC5R2E9WoZxAoPNhgV6~vktt3u1bIxvL5lCWxUG-kgg74yZyv5oJaYDYRdpJRRX7-6hKlFPuTLX-Mza4cKIgcOAxthbjbIiBKf06-HyRnVwalHCNHmI14H6Lwp20zOhgOUN~7FaCsxI~~~I8~6~Ss784faKW3dJmKqzQA-Vcax01Klbb3Mlb9u-E6vI0l1FK7UoDmVEoi2qtQpzZdzexyfXfV12MOERs2-YxdxpNMQGfGEvuUaeiF0U7mZVIasFWI4bnAl9sWMGfUSJUXAjLpNUDxmnOTlmVk~QsPAykuzpFPEyVrXWrfiCWQgyksVqFapPwpM3l5vT-wALg__",
    },
    {
      id: 4,
      src: "https://s3-alpha-sig.figma.com/img/057c/3bab/f9de6c6ff643cd2e7661215ad26aed46?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JwdpXXVUqVZTfcT2vWVID2QXHy7G431hc0JZyVNSgDYx052alJa~jbpoiO0gBqzNMnbReO40Iw2-RMRVa4zjvZk0nF-MkCFS-ex2x8131YjWjFrm3ekE~rEwOvejx6DtSpRBH4BAza5VHFF8L3bOEtPCyTfcuV1oXHI4Xb3J00jXlgzAardljYl6GPLFK9WJ0lTnpyS9j9xQdOYZCOSnIh2xdHPQh5paQwitXKJ6Jso8xMJaomxwPKmQSCsc-qhIYf3kLpZu6-g4k~moKzQ6AHkoLxwDGbbSDoU5KiYYtq39qoWs8aG5U86Tk1Sa-5JJqEqcN3dDES29KUEhoTAbng__",
    },
    {
      id: 5,
      src: "https://s3-alpha-sig.figma.com/img/b167/0f90/40560e3b59b4fd3c2538107c6fa70736?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECOILltds2HLBbbQMcn-EA1J-HwU8cRJ~XAxtKB5TD4i84tNjn7IWloK0oaDgs7n~2hVzZtLrSqXvj8CMZraHnRRJ9rIRt8WYMtGxlj1Mp8A0aU~6EyvkrtLDI0cpKxw~OVWw6Kty~rRj7MFQ8yugEuMkPzvMXuV9-uubQxUz7YyAycnMrUTuuM2wbNuL5V8A3g2OzhtzrEqkDOxWddsafb00~8JGR~a-dFGQj9VJMveLlGkAVksAMn4I68vlXNhQJiLAIw~2FVhJTT8G-XJ6NFN3B8yIy-9Zcei4Cd9d75DtGxdvu~Rc2t3YtRTNBFNMtxCqskEjt1fMluaWdMyEg__",
    },
    {
      id: 6,
      src: "https://s3-alpha-sig.figma.com/img/9532/f812/360b02673b349021a24f23d4184b4e15?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=naqKn-NewyDuO7M5XHWkFx05SYL-ByfpiH2lG7UVcETFkxtIX9cEili1KyNuQF0VtV00CSjr~OsIcgwJAjYpmKJV6bhh51Eyk~J5Mdr4X3N2LUNwDnyIQloIKO9lrLnsZEjCFCuKLBmbVL0CT3bzD4Kporp7bin~piNsrw8nJJRmeaZrNRl0ykcVL~fQltrpi6Nfval7V0MLUuunoOjv-Qo3wS0rfaKIq97yemq6bxyupAb3GpkQmhpCNQ91CMe7IKOo9oImJ~yTYXRdRYgcTkr6GJbZytAJ86Y4OI640c4IiAoNaKTeJjdRiqjpvh4T0IhuDv1UYWONOCxHIi3LZg__",
    },
    {
      id: 7,
      src: "https://s3-alpha-sig.figma.com/img/394a/75bc/77d8a98d7cff3b010ba29ad5b60844d7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fkTonRPHBAX0lE5LM4ZZ4FQBAV9qH~U59Tfscs0XAxYLsAeg3qTS4d7~fZ1JCLUuUHGGgRr~h0DYKY5NnlaVuN2ivDw6tSfDTNqdLpF-n4KbE2LMAApYQeEIJUe67AQjtSk-ju2R6Qh~SOpiCnncx8gr6Iged8WKCVn6diLQgMeGkDQiR6ICP50RWa8zywU7ZQwsT~MkyCaQ-gYo1-sO4Vdb4u~6Qg5V0Qha30EfNG6TIFLC6VmamG3FQrvw69C~KXEsD8~Mt-8afBChcTd~81edykI2ohEcHf72rC-xfBJDAA3dj4byNfUMQeQRcnO4APz7xFcgvXdvetAyEeZDfw__",
    },
    {
      id: 8,
      src: "https://s3-alpha-sig.figma.com/img/7843/84ee/37569bf147f74d2ca44831a4a6ef3ee5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DdisMzNvNRcJgAAA0Gy57Qdx1hLpUAXIThYxH3pC660KofWcv5UnDzB1m1vMZ0d-d9Dx6pG-DzpNaVgRxu3vTOs1vRFKW~kotFBUl4uXIUVOeg-928WBGv-avnmfnf8c05~gCYEC2Ho6yXjYgFO6FMw-YuZxx3f9IajdF6Ei~o5yoEvv6iPhb7IG4l1Oil2sf2gF7mSvg1bgSxTlb1OwC6wkiVHvBuYFzw6nc5bdqnhFYsLO7B722RhZnTiSA6ruS~BYkU7baW6bdUTYSzk6UDqpVkqrUEKWOacoqD6hAYk~~4jSTFaDDbjO-3hjMhfV3B8zA18qI4urjsqoZF-Mcg__",
    },
    {
      id: 9,
      src: "https://s3-alpha-sig.figma.com/img/6b7d/b8c4/94f946a8fffd305fbd1dafe75395cc6f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9~qiDnc6KlVL~un~L9lzPk~Fzv1s14Epg7b4YeZlFAAdpvKlmIyVx3LQ39h8vkvnYbzRvWmL3eRJRHSYNVZ1t~ctAZn~vTEJ5jJeoj48t3FT7x8K8p5ow2x6SdVRTBs4xHaYQ-jSmlsZbtJW6bC5Pq-X6Bip8BYUgKHmh7Pef8g0lmSgx8t9YEo3hQU3TJWID1ayup3DM-jAicBWo532Ky9BKOg7FJfJDWXWxAe3dkHSIE9w-zDFTUXjH-88NrVt7nrioXrI31YBAmEccE3-5bcdpRWXa06mlPDenYxYVwqpQa7W460RtgD1n0sXYMTeuYIY0f4-8~342LsPDIgxw__",
    },
  ];
 

  return (
    <>
      <div className="w-full bg-white overflow-hidden ">
        <div className="flex flex-col justify-center items-center gap-2 pt-16 w-[50vw] h-fit mx-auto">
          <h2 className="text-lg md:text-xl lg:text-3xl font-semibold">Share your setup with</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold">#FurniroFurniture</h1>
        </div>
        <div className="w-[100vw] h-[100vh] mx-auto flex flex-col justify-center items-center flex-wrap gap-4 overflow-hidden" id="centerDiv">
  {images.map(
    (data) =>
      data.id <= 9 && (
        <div key={data.id}>
          <img
            className="h-auto max-w-36 md:max-w-48 lg:max-w-56 xl:max-w-72 rounded-lg"
            src={data.src}
          />
        </div>
      )
  )}
</div>

      </div>
    </>
  );
}
