import { MENU_ITEM_URL } from "../utils/constants";
import vegIcon from "../assets/veg-icon.svg";
import nonVegIcon from "../assets/non-veg-icon.svg";


function MenuItems({ res, type, openSections, setOpenSections }) {
    const isOpen = openSections?.includes(res?.categoryId);
    // const colors = ["#f6e6e9","#faeed6","#e4f1d3","#e0eff6"];

    function toggleSection() {
        if (isOpen) {
            setOpenSections(openSections.filter((id) => id !== res?.categoryId))
        }
        else {
            setOpenSections([...openSections, res?.categoryId])
        }
    };

    return (
        <div>

            <div className=
                {type === "item"
                    ? "w-[800px] mx-auto font-extrabold border-t-15 border-[#f2f2f2] text-lg flex justify-between hover:cursor-pointer"
                    : type === "nested"
                        ? "border-b-gray-300 font-bold border-b-1 flex justify-between hover:cursor-pointer"
                        : ""
                }
                // onClick={() => setIsOpen(!isOpen)}

                // console.log("cllicked");
                // if(res?.categoryId === isOpen){
                //     setIsOpen(null);
                // }
                // else{
                //     setIsOpen(res?.categoryId);
                // }
                onClick={() => {
                    // console.log("cllicked");
                    toggleSection();
                }}
            >
                <div className="py-4">
                    {res?.title} ({res?.itemCards.length || 0})
                </div>
                <div>
                    <i className={`fa-solid  ${isOpen ? "fa-angle-up" : "fa-angle-down"} `}></i>
                </div>
            </div>

            <div className="w-[800px] mx-auto">
                {isOpen && res?.itemCards?.map((item) => {
                    return (
                        <div key={item?.card?.info?.id}>

                            <div className="py-5 flex justify-between" >

                                <div className="w-[552px] h-[174px] flex flex-col align-middle justify-center">

                                    <div className="">

                                        <div className="flex gap-3 mb-1 items-center-safe">

                                            <div className="">
                                                {item?.card?.info?.itemAttribute 
                                                && 
                                                (item?.card?.info?.itemAttribute?.vegClassifier === "VEG" 
                                                    ? <img src={vegIcon} alt="Veg Symbol" className="w-5 h-5" />
                                                    :  <img src={nonVegIcon} alt="Non-Veg Symbol" className="w-5 h-5" />
                                                )} 
                                            </div>

                                            {item?.card?.info?.ribbon 
                                            && 
                                            (item?.card?.info?.ribbon?.text === "Bestseller") 
                                            &&
                                                 <div className="text-[#f7614d] font-semibold">
                                                     Bestseller
                                                </div>
                                            } 

                                        </div>

                                        <h1 className="text-lg font-semibold">{item?.card?.info?.name}</h1>

                                        <p className="mt-1 font-semibold">
                                            ₹ {" "}
                                            {
                                                item?.card?.info?.price
                                                    ? (item?.card?.info?.price / 100)
                                                    : (item?.card?.info?.variantsV2?.pricingModels[0]?.price / 100)
                                            }
                                        </p>

                                        {item?.card?.info?.ratings?.aggregatedRating.rating &&
                                            (
                                                <div className="mt-3 flex gap-1 text-sm">
                                                    <p className="text-[#116649] font-semibold">
                                                        <span><i className="fa-solid fa-star"></i></span>{" "}
                                                        {item?.card?.info?.ratings?.aggregatedRating?.rating}
                                                    </p>
                                                    <p> (
                                                        {item?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                                                        )
                                                    </p>
                                                </div>
                                            )
                                        }

                                        <p className="line-clamp-2 mt-3">{item?.card?.info?.description}</p>

                                    </div>

                                </div>
                                <div className="relative w-[156px] h-[144px]">
                                    <img src={MENU_ITEM_URL + item?.card?.info?.imageId} alt="Menu-item Image" className="w-[156px] h-[144px] rounded-2xl object-cover object-center hover:cursor-pointer" />
                                    <button className="w-[128px] h-[39px] bg-white text-[#1ca671] rounded-2xl absolute bottom-0 translate-y-1/2 translate-x-1/9 text-lg border border-[#d9dadc] shadow font-semibold hover:cursor-pointer hover:bg-gray-200">ADD</button>
                                </div>

                            </div>

                            <div className="w-[800px] my-5 h-[1px] bg-[#d4d4d4]"></div>


                        </div>
                    )
                })}
            </div>

        </div>
    )
};

export default MenuItems;