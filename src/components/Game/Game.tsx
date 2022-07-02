import "./styles.scss";
import {Card} from "../Card/Card";
import { NumberGenerationService } from "../../services/NumberGenerationService";
import {useEffect, useMemo, useRef, useState} from "react";

export const Game = () => {
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [guessed, setGuessed] = useState<number[]>([]);
    const primeNumbers = useMemo(() => NumberGenerationService.generatePrimeNumbers(1, 50), []);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        startGame();
    }, [])

    useEffect(() => {
        if (selectedCards.length === 2) {
            if (primeNumbers[selectedCards[0]] === primeNumbers[selectedCards[1]]) {
                setGuessed([...guessed, primeNumbers[selectedCards[0]]])
            }

            setTimeout(() => {
                setSelectedCards([]);
            }, 500)
        }

    }, [selectedCards]);

    const startGame = () => {
        if (ref.current) {
            ref.current.classList.add("showCards");
        }
        setTimeout(() => {
            if (ref.current) {
                ref.current.classList.remove("showCards");
            }
        }, 5000)
    }

    const handleClick = (index: number) => {
        setSelectedCards([...selectedCards, index]);
    }

    return (
        <div className={"game"} ref={ref}>
            {primeNumbers.map((item, index) => {
                let visible = false;
                if (selectedCards.includes(index) || guessed.includes(item)) {
                    visible = true;
                }
                return (
                    <Card
                        key={index}
                        item={item}
                        visible={visible}
                        handleClick={() => handleClick(index)}
                    />
                )
            })}
        </div>
    )
}