import { ACTION_ADD, ACTION_DELETE } from "./actions";



const initialState = {
    list: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_ADD:
            
            return {
                list: [...state.list, action.item].filter(Boolean)
            }
            
            ;
        case ACTION_DELETE:
            const a = state.list
            console.log(a)
            const c = a.indexOf(action.item)
            console.log(c)
            a.splice(c,1)
      return {
                list:[...a].filter(Boolean)
      }

        default: {
            return state
        }

    }
}
export default reducer;