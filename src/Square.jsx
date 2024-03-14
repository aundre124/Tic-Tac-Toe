import Circle from "./Circle"
import Cross from "./Cross"

const Square = ({position, value, take_turn}) =>{
    const chkTurn = () =>{
        if (value == 'EMPTY')
        take_turn(position)
    }

    return(
        <div className="square" onClick={chkTurn}>
            {value == 'CIRCLE' && <Circle/>}
            {value == 'CROSS' && <Cross/>}
        </div>
    )
}

export default Square