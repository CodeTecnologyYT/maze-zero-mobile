import "./categories.component.css"
import categoryArm from "@/assets/images/category/category_arm.png"
import categoryShield from "@/assets/images/category/category_shield.png"
import {Category, type CategoryProps} from "@/features/category/components/category.component.js";
import {Text} from "@/shared/components/index.js";
import {Slider} from "@/shared/components/slider/slider.component.js";
import {useState} from "@lynx-js/react";

export const Categories = () => {

    const [sliderDrawing, setSliderDrawing] = useState(false);
    const STATE_STATIONARY:number = 1;

    const categories: CategoryProps[] = [
        {
            text: "Armas",
            icon: categoryArm,
            active: true
        },
        {
            text: "Escudos",
            icon: categoryShield,
            active: false
        }
        , {
            text: "Escudos",
            icon: categoryShield,
            active: false
        }, {
            text: "Escudos",
            icon: categoryShield,
            active: false
        }, {
            text: "Escudos",
            icon: categoryShield,
            active: false
        }, {
            text: "Escudos",
            icon: categoryShield,
            active: false
        }, {
            text: "Escudos",
            icon: categoryShield,
            active: false
        }, {
            text: "Escudos",
            icon: categoryShield,
            active: false
        }, {
            text: "Escudos",
            icon: categoryShield,
            active: false
        }
    ]

    const isDrawing = (state: number )=>{
        if(STATE_STATIONARY === state){
            setSliderDrawing(false);
            return;
        }
        setSliderDrawing(true);
    };

    return (
        <view className="Categories">
            <Text text={"Preparate para el laberinto"} fontSize={"lg"} fontWeight={"bold"}/>
            <Slider showButton={sliderDrawing}>
                <list
                    scroll-orientation="horizontal"
                    list-type="single"
                    span-count="3"
                    class="CategoriesContainer"
                    bindscrollstatechange={(e) => {
                        isDrawing(e.detail.state)
                    }}
                    style={{
                        listMainAxisGap: "10px",
                        width: "calc(100% - 10px)",
                        height: "100px",
                        paddingLeft: "5px",
                        borderRadius: "10px"
                    }}
                >
                    {categories.map(c => {
                        return (
                            <list-item item-key={`list-item-${categories.indexOf(c)}`}
                                       key={`list-item-${categories.indexOf(c)}`}>
                                <Category icon={c.icon} text={c.text} active={c.active}/>
                            </list-item>
                        );
                    })}
                </list>
            </Slider>
            <view>

            </view>
        </view>
    )
}