import "./text-icon.component.css"
import {Text} from "@/shared/components/text/text.component.js";
interface Props {
    text: string;
    icon: string;
}

export const TextIcon = ({icon, text}: Props) => {
    return (
        <view className="TextIconContainer">
            <Text text={text} fontSize="md" isSubtitle={true}  fontWeight={"semibold"}/>
            <image src={icon} className="ContainerIcon"/>
        </view>
    );
}