import "./styles.scss";

type Props = {
    item: number;
    visible: boolean;
    handleClick: () => void;
}

export const Card = ({ item, handleClick, visible }: Props) => {
    return (
        <div
            className={`card ${visible ? 'visible' : ''}`}
            onClick={handleClick}
        >
            <span>{item}</span>
        </div>
    )
}