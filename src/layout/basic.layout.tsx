import "./basic.layout.css"
import React from "react";
import {NavBar} from "@/layout/components/header/navbar.component.js";
import logo from "@/assets/images/home/logo.png";
import arrowIcon from "@/assets/icons/ic-arrow-right.png"
import {Button, Text} from "@/shared/components/index.js";

type Props = {
    children: React.ReactNode;
}

export const BasicLayout = ({children}: Props) => {


    return (
        <view className="ThemeBasicLayout">
            <view className="HeaderContainer Container">
                <NavBar/>
                <view className="HomeBattlePanel">
                    <view className="HomeBattlePanelText">
                        <view className="HomeLogoContainer">
                            <image src={logo}  style={{width: 22, height: 22}}/>
                            <Text text={"Maze-Zero"} isSubtitle={true} fontWeight={"bold"}/>
                        </view>
                        <Text text={"¿Descubre lo que \n te depara el laberinto?"} fontSize={"xl"} fontWeight={"medium"}/>
                    </view>
                    <view className="HomeActionButtonContainer">
                        <Button text={"Comenzar"} icon={arrowIcon}/>
                        <Text text={"Nivel de laberinto 10"} fontSize={"sm"} fontWeight={"normal"} isSubtitle={true}/>
                    </view>
                </view>
            </view>
            {children}
        </view>
    );
}