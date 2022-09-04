import { ACT_FETCH_ALL_CATEGORIES } from "./actions";

const initState = {
  hashCategoryById: {},
  loading:true
}

function reducer(categoryState = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_CATEGORIES:
      return {
        ...categoryState,
        hashCategoryById: action.payload.hashCategoryById,
        loading: false
      }
    default:
      return categoryState
  }
}

export default reducer