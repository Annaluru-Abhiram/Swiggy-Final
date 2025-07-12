import React from "react";
import { IMG_URL } from "../utils/constants";

function RestaurantCard({ id, name, cloudinaryImageId, areaName, cuisines, avgRating, sla, aggregatedDiscountInfoV3 }) {

    return (
        <>
            <div className="card w-[220px] hover:cursor-pointer" id={id}>
                <div className="image relative overflow-hidden w-[220px] h-[144.4px] rounded-[1rem]">
                    <img src={IMG_URL + cloudinaryImageId} alt="Card-Image" className="w-[220px] h-[144.4px] rounded-[1rem] object-cover object-center" />
                    <div className="gradient bg-linear-to-t from-black to-transparent w-[220px] h-[81px] absolute bottom-0">
                    </div>
                    <div className="badge w-[220px] line-clamp-1 text-white font-[800] text-[20px] absolute bottom-1 pl-2.5">
                        <span>{aggregatedDiscountInfoV3?.header}</span> <span>{aggregatedDiscountInfoV3?.subHeader}</span>
                    </div>
                </div>
                <div className="card-content pl-2">
                    <p className="title line-clamp-1 font-bold text-[18px]">{name}</p>
                    <p className="ratings font-medium"> <span><i className="fa-solid fa-star text-green-700"></i></span> <span>{avgRating}</span> <span>{sla.slaString}</span></p>
                    <p className="cusines line-clamp-1 text-[#656a6d]">{cuisines.join(",")}</p>
                    <p className="area text-[#656a6d]">{areaName}</p>
                </div>
            </div>
        </>
    )
}

function RestaurantCardWithBadge(RestaurantCard) {
    return (props) => {
        return (
            <div className="relative">
                <span className="bg-green-700 absolute z-20 left-0 top-3 text-white rounded-r-3xl px-1 w-10 h-7 font-medium flex items-center justify-center">VEG</span>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export {RestaurantCardWithBadge};

export default RestaurantCard;