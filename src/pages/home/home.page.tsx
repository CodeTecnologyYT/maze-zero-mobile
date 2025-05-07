import {BasicLayout} from "@/layout/basic.layout.js";
import icSkull from "@/assets/icons/ic-skull.png"
import "./home.page.css"
import {Message} from "@/shared/components/index.js";
import {Category} from "@/features/category/components/category.component.js";
import {Categories} from "@/features/category/components/categories.component.js";


export const Home = () => {
    return (
        <BasicLayout>
            <view className="Container HomePage">
                <Message text={"ArcEval ha matado al jefe del laberinto 10"} icon={icSkull}/>
                <Categories/>
            </view>
        </BasicLayout>
    );
}