import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

function useRestaurantMenuInfo(id) {
    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState([]);

    useEffect(() => {
        fetch(MENU_URL + id)
            .then(res => res.json())
            .then(data => {
                setResInfo(data.data.cards[2].card.card.info);
                
                const allCards = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

                const combinedMenu = [];

                allCards.forEach((cardObj)=>{
                    const type = cardObj.card?.card["@type"];
                    if(type?.includes("food.v2.ItemCategory") || type?.includes("food.v2.NestedItemCategory")){
                        combinedMenu.push(cardObj);
                    }
                });

                // console.log(combinedMenu);
                setResMenu(combinedMenu);
            })
    }, [])
    return [resInfo, resMenu];
}

export default useRestaurantMenuInfo;