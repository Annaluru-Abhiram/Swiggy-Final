import useRestaurantMenuInfo from "./useRestaurantMenuInfo";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import MenuItems from "./MenuItems";

function RestaurantMenuInfo() {
    const { id } = useParams();
    const [resInfo, resMenu] = useRestaurantMenuInfo(id);
    // console.log(resMenu);
    const [openSections, setOpenSections] = useState([]);
    
    const [filterMenu, setFilterMenu] = useState([]);
    const [isVegFiltered, setIsVegFiltered] = useState([]);

    // exactly why we used useeffect
    useEffect(() => {
        if (resMenu && resMenu.length > 0) {
            setFilterMenu(resMenu);
            const first = resMenu.find((obj) =>
                obj?.card?.card?.["@type"]?.includes("food.v2.ItemCategory")
            );
            if (first) {
                setOpenSections([first.card.card.categoryId]);
            }
        }
    }, [resMenu]);

    const filterVegItems = () => {
        if (!resMenu || resMenu.length === 0) {
            console.log("No data available for filtering");
            return;
        }

        if(!isVegFiltered){
            const filtered = resMenu.map((obj) => {
                const itemCards = obj?.card?.card?.itemCards;
                if (itemCards && itemCards.length > 0) {
                    const vegItems = itemCards.filter((itemObj) => itemObj?.card?.info?.itemAttribute?.vegClassifier === "VEG");
    
                    if (vegItems.length > 0) {
                        return {
                            ...obj,
                            card: {
                                ...obj.card,
                                card: {
                                    ...obj.card.card,
                                    itemCards: vegItems,
                                },
                            },
                        };
                    }
                }
                return null;
            }).filter((obj) => obj !== null);
            console.log("Filtered Veg Menu:", filtered);
            setFilterMenu(filtered);
        }
        else{
            setFilterMenu(resMenu);
        }

        setIsVegFiltered(!isVegFiltered);
    };

    console.log(resInfo.sla);
    // if (resInfo?.sla?.slaString) {
    //     console.log(resInfo.sla.slaString);
    // }
    


    return (
        <>
            {
                resInfo &&
                (
                    <div className="w-[60%] mx-auto text-xs font-light flex gap-1 mt-2.5">
                        <p className="hover:font-semibold hover:cursor-pointer">
                            <Link to="/">Home</Link>
                        </p> /
                        <p className="hover:font-semibold hover:cursor-pointer">
                            {resInfo.city}
                        </p> /
                        <p className="font-semibold">
                            {resInfo.name}
                        </p>
                    </div>
                )
            }


            {resInfo ?
                (
                    <div className="w-[750px] mx-auto mt-10 mb-15">

                        <h1 className="text-[28px] font-bold">{resInfo.name}</h1>

                        <div className="bg-linear-to-t from-zinc-400 to-transparent w-full h-[160px] mt-8 rounded-4xl">

                            <div className="w-[95%] mx-auto border-1 border-zinc-300 px-5 rounded-3xl p-4 bg-white">

                                <span><i className="fa-solid fa-star text-green-700"></i></span> <span className="font-bold">{resInfo.avgRatingString} ({resInfo.totalRatingsString}) • ({resInfo.costForTwoMessage})</span>

                                <p className="mt-1">
                                    <Link to="/" className="text-orange-500 font-semibold underline decoration-1">{resInfo?.cuisines?.join(", ")}</Link>
                                </p>

                                <div className="flex gap-3 mt-2">

                                    <div className="flex flex-col justify-center">

                                        <div className="w-2 h-2 rounded-full bg-[#c4c4c4]">
                                        </div>
                                        <div className="w-0.5 h-5.5 bg-[#c4c4c4] ml-[3px]">
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#c4c4c4]">
                                        </div>

                                    </div>

                                    <div className="">

                                        <div className="font-bold flex gap-5">
                                            <p>Outlet </p> <span className="font-normal">{resInfo.areaName}</span>
                                        </div>
                                        <div className="font-bold">
                                            <p>{resInfo.sla.slaString}</p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="flex gap-4 mt-10">
                            <button className="border-1 bg-red-600"
                                onClick={filterVegItems}
                            >FILTER VEG</button>

                            <div className="w-[72px] h-[35px] rounded-4xl border border-[#d9dadc] relative  shadow-md shadow-[0px 2px 4px #ebe1e1]">
                                <span className="w-[38px] h-[10px] rounded-4xl absolute bg-[#d9dadc]  top-2.75 left-4"></span>
                            </div>
                            <div className="w-[72px] h-[35px] rounded-4xl border border-[#d9dadc] relative  shadow-md shadow-[0px 2px 4px #ebe1e1]">
                                <span className="w-[38px] h-[10px] rounded-4xl absolute bg-[#d9dadc] top-2.75 left-4"></span>
                            </div>
                            <div className="flex w-[72px] h-[35px] rounded-4xl border border-[#d9dadc] justify-center items-center  shadow-md shadow-[0px 2px 4px #ebe1e1]">
                                <div className="text-xs text-center font-semibold">
                                    Bestseller
                                </div>
                            </div>
                        </div>

                    </div>


                ) :
                (
                    <h1 className="text-2xl w-10/12 mx-auto">Loading...</h1>
                )
            }

            {
                filterMenu && filterMenu.map((obj) => {
                    const card = obj?.card?.card;
                    const type = card?.["@type"]

                    if (type?.includes("food.v2.ItemCategory")) {
                        return (

                            <MenuItems res={card} type="item" openSections={openSections} setOpenSections={setOpenSections} key={card.categoryId} />

                        )
                    }

                    if (type?.includes("food.v2.NestedItemCategory")) {
                        return (


                            <div className="w-[800px] mx-auto px-4 pt-4 font-extrabold border-t-15 border-[#f2f2f2] " key={card?.categoryId}>
                                {card?.title}
                                {card?.categories?.map((cat) => (

                                    <MenuItems res={cat} type="nested" openSections={openSections} setOpenSections={setOpenSections} key={cat?.categoryId} />

                                ))}

                            </div>
                        )
                    }
                    return null;
                })
            }
        </>
    )
}

export default RestaurantMenuInfo;