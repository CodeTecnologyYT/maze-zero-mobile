import "./button.component.css";
import {Text} from "@/shared/components/index.js";

type Props = {
    text?: string;
    icon?: string;
}

export const Button = ({text = "", icon}: Props) => {

    return (
        <view className="Button">
            <Text text={text} fontWeight={"bold"} fontSize={"md"}/>
            icon && <image src={icon} style={{width: 25, height: 14}}/>
        </view>
    )
}