import {Text} from "@/shared/components/text/text.component.js";
import "./message.component.css"

type Props = {
    text: string;
    icon?: string;
}
export const Message = ({text, icon}:Props) => {
    return (
        <view className="MessageContainer">
            <image src={icon} style={{width: 13.5, height: 15.2}}/>
            <Text text={text} fontSize={"sm"} fontWeight={"normal"} isSubtitle={true}/>
        </view>
    )
}