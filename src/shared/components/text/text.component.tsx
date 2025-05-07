import "./text.component.css"

type TextSize = "sm" | "md" | "lg" | "xl";
type TextWeight = "bold" | "semibold" | "medium" | "normal" | "light";
type TextAlign = "left" | "center" | "right";

interface Props {
    fontSize?: TextSize;
    fontWeight?: TextWeight;
    textAlign?: TextAlign;
    isSubtitle?: boolean;
    text: string;
}

const className = {
    sm: "TextSizeSmall",
    md: "TextSizeMedium",
    lg: "TextSizeLarge",
    xl: "TextSizeXLarge",
    bold: "TextWeightBold",
    semibold: "TextWeightSemiBold",
    medium: "TextWeightMedium",
    normal: "TextWeightMedium",
    light: "TextWeightLight",
    left: "TextAlignLeft",
    center: "TextAlignCenter",
    right: "TextAlignRight",
}

export const Text = ({
                         text,
                         fontSize = "md",
                         fontWeight = "normal",
                         textAlign = "left",
                         isSubtitle = false
                     }: Props) => {
    const classNames = `${className[fontSize]} ${className[fontWeight]} ${className[textAlign]} TextHeightSeparate ${isSubtitle ? "TextSubtitle" : "TextTitle"}`
    return (
        <text className={classNames}>{text}</text>
    )

}