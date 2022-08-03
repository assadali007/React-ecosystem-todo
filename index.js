import * as redux from "redux";

function changeCount(amount=1) {
    return {
        type: "CHANGE_COUNT",
        // payload is the king of attachment to add something in our how much we increase the number
        payload:amount
    }
}



function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payload :  thing
    }
}


function removeFavoriteThing(thing) {
    return {
        type : "REMOVE_FAVORITE_THING",
        payload : thing
    }
}

const initialState = {
    count : 0,
     favoriteThings : []
}


function reducer(state = initialState,action) {
    switch (action.type) {
        case "CHANGE_COUNT" :
            return {
                ...state,
                count : state.count + action.payload
            }
        case "ADD_FAVORITE_THING" :
            return {
                // keep insure the other part of state intect count intect in favorite things
                ...state,
                // use all the value of state.favoriteThings array and add the add the new value
                favoriteThings:[...state.favoriteThings,action.payload]
            }
        case "REMOVE_FAVORITE_THING":
            const updatedArr = state.favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
            return {
                ...state,
                favoriteThings: updatedArr

            }
        default:
            return state;
    }

}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(changeCount(5))
store.dispatch(addFavoriteThing("Raindrops on roses"))
store.dispatch(addFavoriteThing("Whiskers on kittens"))



store.dispatch(removeFavoriteThing("Raindrops on roses"))

