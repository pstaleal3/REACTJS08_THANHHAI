import { handleHashCategoryById } from "../../helpers"
import categoryService from "../../services/category"

// Action Types
export const ACT_FETCH_ALL_CATEGORIES = 'ACT_FETCH_ALL_CATEGORIES'

// Action
export function actFetchAllCategories(hashCategoryById) {
  return {
    type: ACT_FETCH_ALL_CATEGORIES,
    payload: {
      hashCategoryById
    }
  }
}


// Action Async
export function actFetchAllCategoriesAsync() {
  return async dispatch => {
    try {
      const response = await categoryService.getList()
      const categories = response.data
      const hashCategoryById = handleHashCategoryById(categories)
      
      dispatch(actFetchAllCategories(hashCategoryById))
    } catch(err) {
      // TODO ...
    }
  }
}