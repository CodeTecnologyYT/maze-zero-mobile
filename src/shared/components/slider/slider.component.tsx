import icSliderArrowLeft from '@/assets/icons/ic-slider-arrow-left.png'
import icSliderArrowRight from '@/assets/icons/ic-slider-arrow-right.png'
import "./slider.component.css"
import {useEffect, useState} from "@lynx-js/react";

type Props = {
    children: React.ReactNode;
    showButton: boolean;
}
export const Slider = ({children, showButton}: Props) => {
    const [showAnimate, setShowAnimate] = useState(true);
    useEffect(() => {
        if(showButton){
            const timer = setTimeout(() => setShowAnimate(showButton), 200);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [showButton])
    return (
        <view className="slider-container">
            {showAnimate && <view
                className={`slider-button slider-button-left ${showButton ? "animate-in-out" : "animate-out-in"}`}>
                <image src={icSliderArrowLeft} style={{width: "24px", height: "24px"}}/>
            </view>}
            {children}
            {showAnimate && <view
                className={`slider-button slider-button-right ${showButton ? "animate-in-out" : "animate-out-in"}`}>
                <image src={icSliderArrowRight} style={{width: "24px", height: "24px"}}/>
            </view>}
        </view>
    );
}