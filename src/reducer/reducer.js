export const reducer = (state, action) => {
    switch (action.type) {
        case 'add': 
            return [
                ...state,
                {id: Date.now(), text: action.payload, completed: false}
            ];
        case 'remove': 
            return state.filter((item) => item.id !== action.payload);

        case 'toogle':
            return state.map((elem) => {
                if (elem.id === action.payload) {
                    elem.completed = !elem.completed;
                }
                return elem;
            });

        default: 
            return state;
    }
};

