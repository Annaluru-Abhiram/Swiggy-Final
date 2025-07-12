import React from "react";
import RestaurantCard from "./RestaurantCard";
import useRestaurantCards from "./useRestaurantCards";
import { Link } from "react-router";
import { RestaurantCardWithBadge } from "./RestaurantCard";

const RestaurantContainer = () => {

    console.log("Restaurant Container RE-Rendered");

    const [resData, filteredData, setFilteredData] = useRestaurantCards();
    const CardWithBadge = RestaurantCardWithBadge(RestaurantCard);

    function FilterData() {
        console.log("Filter Button Clicked");

        const filterRes = resData.filter((obj) => obj.info.avgRating > 4.2);
        setFilteredData(filterRes);
    };

    function ClearFilter() {
        console.log("Clear Button clicked");

        setFilteredData(resData);
    }

    return (
        <>
            {/* <h1 className="w-[80%] mx-auto font-bold text-[24px]">Restaurants with online food delivery in Tirupati</h1> */}
            <div className="w-[80%] mx-auto mt-5">
                <button className="bg-white border border-[#d9dadc] rounded-[1rem] px-3 py-1.5 shadow-md shadow-[0px 2px 4px #ebe1e1] mr-5 hover:cursor-pointer" onClick={FilterData}><i className="fa-solid fa-arrow-up-short-wide"></i> Filter</button>
                <button className="bg-white border border-[#d9dadc] rounded-[1rem] px-3 py-1.5 shadow-md shadow-[0px 2px 4px #ebe1e1] hover:cursor-pointer" onClick={ClearFilter}>Clear</button>
            </div>

            <div className="res-container 
            my-15
            w-[80%] m-auto flex flex-wrap gap-10 justify-start">
                {filteredData?.length === 0
                    ?
                    <h1 className=" text-2xl">Loading...</h1>
                    :
                    filteredData.map((obj) => {
                        return (
                            <Link to={`/restaurantmenu/${obj.info.id}`} key={obj.info.id}>
                                {obj.info.veg ? (
                                    <CardWithBadge {...obj.info} />
                                ) : (
                                    <RestaurantCard {...obj.info} />

                                )}
                            </Link>
                        )
                    })}
            </div>
        </>
    )
}

export default RestaurantContainer;

