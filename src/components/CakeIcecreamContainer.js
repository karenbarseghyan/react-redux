import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { buyIcecream, buyCake} from '../redux'

function HooksIcecreamContainer(props) {
    const numOfIcecream = useSelector(state => state.icecream.numOfIcecream)
    const numOfCakes = useSelector(state => state.cake.numOfCakes)

    const dispatch = useDispatch()

    return (
        <div>
            <h2>Num of Icecream === {numOfIcecream} </h2>
            <h2>Num of Cakes === {numOfCakes} </h2>
            <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksIcecreamContainer
