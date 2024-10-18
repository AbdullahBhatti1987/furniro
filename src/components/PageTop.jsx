import React from 'react'
import { Component } from "../components/Breadcrumb";

function PageTop({heading, routeLink}) {
  return (
    <div className="relative lg:h-72 md:h-56 h-36 overflow-hidden flex justify-center items-center">
        <img
          className="w-fit blur-sm opacity-50"
          src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJ0IrFydlj9uvOMjJZPyyOAzsWpXD-V7v~2AoI0O82MHPp~g3VTGLmBiJRC7fiMxFNLIxScq5lGcsNnLWYC6Sz~bHYb13hCTJxAgvQAEP6zqyaF12wVXEPNzsaXc2Ms4fTVdFMqvkQNjnuKGeP~iSKsKAHDwxs-m5p5SCyrq0MDJ~BEIzCgZIuiY3iLouiYPFtGjK~cJNzvg6jSXOGB0TJz87eR7yi-04szvRXnquc8RF~h-krnK6-u7dpiw4GBHYSZlUZ7g~~OwEAmZzJYD1~K75YIcUet4bJ4rOcTuP1ZsVglRZqq8TTjvX1UMOA1uzKijRq-9x2bf0YbLfZFZxg__"
          alt=""
        />
        
        <div className="absolute w-full h-full flex flex-col justify-center items-center">
        <img
              src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V-KgMF65bBpedJXfxnEh5Re44eKl0ptjo1vHE0H2caKlZSKxSiipCgF9xMEBLT8rrCzA4qLXt6vUNroksYtvS2SrZ4PFU1TG6OtrH5UjO~XMt8JFfNVgS~fQzJiRvpPn7hvXPyXfdgVMgVfyKtFgkwlDXg7B9QBgKybRWGg8BTCd5RlnYtNW57N4FcL3m9o64gdFFannJlge4WJFhm1UKBfZ3js-VcQb6DhAmaNCdg9XL8cr0cbT68Y6XV6g1S3IZcJUjmWtbQhteIxuhhMdTsAiglZLBo1WRY6tIoLAz3Sjq8xJxydvHnf76FX-HmucGkl6FgUjLxbUYIiwEPPCNw__"
              className="lg:w-24 md:w-18 w-12 transition translate-y-4 "
              alt="Flowbite React Logo"
            />
          <h1 className=" text-center lg:text-6xl md:text-4xl text-xl font-semibold mb-4">                       
            {heading}
          </h1>
          <Component routeLink={routeLink}/>
        </div>
      </div>
  )
}

export default PageTop