import avatar from "@/assets/images/layout/avatar.png"
import menuIcon from "@/assets/icons/ic-menu.png"
import diamondIcon from "@/assets/icons/ic-diamond.png"
import coinIcon from "@/assets/icons/ic-coin.png"
import "./navbar.component.css"
import {Text, TextIcon} from "@/shared/components/index.js";

export const NavBar = () => {
    return (
        <view className="NavBar">
            <view className="User">
                <view className="Avatar">
                    <view className="AvatarStatus"/>
                    <image src={avatar} className="AvatarImage"/>
                </view>
                <view className="UserInfo">
                    <Text text={"Bryan"} fontWeight={"bold"}/>
                    <Text text={"Nivel 10"} fontSize={"sm"} isSubtitle={true}/>
                </view>
            </view>
            <view className="Menu">
                <TextIcon text={"300"} icon={coinIcon}/>
                <TextIcon text={"300"} icon={diamondIcon}/>
                <view className="MenuBar">
                    <image src={menuIcon} className="MenuIcon"/>
                </view>
            </view>
        </view>
    );
}