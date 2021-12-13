import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { buyIcecream} from '../redux'

function HooksIcecreamContainer(props) {
    const numOfIcecream = useSelector(state => state.icecream.numOfIcecream)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Num of Icecream === {numOfIcecream} </h2>
            <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
        </div>
    )
}

export default HooksIcecreamContainer
