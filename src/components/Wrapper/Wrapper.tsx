import "./styles.scss";
import {Game} from "../Game/Game";

export const Wrapper = () => {
    return (
        <div className={"wrapper"}>
            <h2>Mahjong-like game</h2>
            <Game />
        </div>
    )
}