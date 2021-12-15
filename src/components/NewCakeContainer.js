import React, { useState} from 'react'
import { buyCake } from '../redux/cakes/cakeActions'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    console.log(props, "-------------------")
    const [number, setNumer] = useState(1);
    const handleChange = (e) => {
        setNumer(e.target.value)
    }

    return (
        <div>
            <h2>Number of Cakes  === {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={handleChange} />
            <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : (number) => dispatch(buyCake(number))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer) 
