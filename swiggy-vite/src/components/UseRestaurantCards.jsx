import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";

function useRestaurantCards() {
    const [resData, setResData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(obj => {
                console.log("Fetched Restaurant Cards Data.");
                setTimeout(()=>{
                    let restaurantCardsData = obj?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                    setResData(restaurantCardsData);
                    setFilteredData(restaurantCardsData);
                },1000)
            });
    }, []);
    return [resData, filteredData, setFilteredData];
};

export default useRestaurantCards;