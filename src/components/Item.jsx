import { useContext } from "react"
import { countContext } from "../App"
import Title from "./Title";
import Button from "./Button";

const Item = () => {
    const { count, setCount } = useContext(countContext);

    const increaseCount = () => { setCount(count + 1) };
    const decreaseCount = () => { setCount(count - 1) };

    return (
        <div className="item">Item
            <Title name={count} />

            <Button onClick={increaseCount} text="Increase" />
            <Button onClick={decreaseCount} text="Decrease" />

        </div>
    )
}

export default Item