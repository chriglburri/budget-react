import types from "../actions/entries.actions";

const reducer = (state = initialEntries, action) => {
    let newEntries;
    switch (action.type) {
        case types.POPULATE_ENTRIES:
            return action.payload;

        case types.ADD_ENTRY:
            newEntries = state.concat({ ...action.payload });
            return newEntries;

        case types.REMOVE_ENTRY:
            newEntries = state.filter((e) => e.id !== action.payload.id);
            return newEntries;

        case types.POPULATE_ENTRY_DETAILS:
        case types.UPDATE_ENTRY:
            newEntries = [...state];
            const index = newEntries.findIndex(
                (entry) => entry.id === action.payload.id
            );
            newEntries[index] = {
                ...newEntries[index],
                ...action.payload.entry,
            };
            return newEntries;

        default:
            return state;
    }
};

export default reducer;

var initialEntries = [];
