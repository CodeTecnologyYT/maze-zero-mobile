import "./category.component.css"
import {Text} from "@/shared/components/text/text.component.js";
import {act} from "react";

export type CategoryProps = {
    text?: string;
    icon: string;
    active?: boolean;
}

export const Category = ({text = "", icon, active = false}: CategoryProps) => {
    return (
        <view className="CategoryContainer">
            <view class={active ? "CategoryIconContainerActive" : "CategoryIconContainerNoActive"}>
                <image src={icon} style={{width: "38px", height: "38px"}}/>
            </view>
            <Text text={text} fontSize={"md"} fontWeight={"bold"} textAlign="center"/>
        </view>
    )
}