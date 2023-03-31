const Initial_state = {
    Games: []
}

export default function changeGames(state = Initial_state, action) {

    switch (action.type) {
        case 'SET_GAME':
            return { ...state, Games: action.payload }
        default:
            return state
    }

}
