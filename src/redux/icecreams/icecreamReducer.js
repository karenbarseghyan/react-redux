import { BUY_ICECREAM } from "./icecreamTypes"


const initialState = {
    numOfIcecream : 50
}

const icecreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            numOfIcecream : state.numOfIcecream - 2
        }
        default: return state
    }
}

export default icecreamReducer;