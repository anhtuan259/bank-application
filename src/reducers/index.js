export default (state, action) => {
    switch (action.type) {
        case "WITHDRAW":
            return {
                ...state,
                money: state.money - action.money,
            };

        default:
            return state;
    }
}