import React from "react";
import { Component } from "../components/Breadcrumb";
import { GiSettingsKnobs } from "react-icons/gi";
import { TbGridDots } from "react-icons/tb";
import { BsViewList } from "react-icons/bs";

function Shop() {
  return (
    <div>
      <div className="relative h-72 overflow-hidden flex justify-center items-center">
        <img
          className="w-fit blur-sm opacity-50"
          src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJ0IrFydlj9uvOMjJZPyyOAzsWpXD-V7v~2AoI0O82MHPp~g3VTGLmBiJRC7fiMxFNLIxScq5lGcsNnLWYC6Sz~bHYb13hCTJxAgvQAEP6zqyaF12wVXEPNzsaXc2Ms4fTVdFMqvkQNjnuKGeP~iSKsKAHDwxs-m5p5SCyrq0MDJ~BEIzCgZIuiY3iLouiYPFtGjK~cJNzvg6jSXOGB0TJz87eR7yi-04szvRXnquc8RF~h-krnK6-u7dpiw4GBHYSZlUZ7g~~OwEAmZzJYD1~K75YIcUet4bJ4rOcTuP1ZsVglRZqq8TTjvX1UMOA1uzKijRq-9x2bf0YbLfZFZxg__"
          alt=""
        />
        <div className="absolute w-full h-full flex flex-col justify-center items-center gap-6">
          <h1 className=" text-center text-6xl font-semibold">Shop</h1>
          <Component />
        </div>
      </div>
      <div className="filter">
        <div className="left">
          <div className="flex flex-row gap-2 justify-between items-center">
            <GiSettingsKnobs />
            <p>Filter</p>
            <TbGridDots />
            <BsViewList />
          </div>
          <div>
            <p>Showing 1-16 of 32 results</p>
          </div>
        </div>
        <div className="right">
          <div className="">
            <p>Show</p>
            <select name="number" id="number">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="">
            <p>Sort by</p>
            <select name="sortby" id="number">
              <option value="1">Sort by name A-Z</option>
              <option value="2">Sort by name Z-A</option>
              <option value="4">Low to High</option>
              <option value="5">High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
