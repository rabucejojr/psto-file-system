import { ACTION_TYPE } from "./actionTypes";

export const AddDocs=()=>{
    return{
        type:ACTION_TYPE.ADD_DOCS
    }
}
export const GetDocs = () => {
  return {
    type: ACTION_TYPE.GET_DOCS,
  }
}
export const UpdateDocs = () => {
  return {
    type: ACTION_TYPE.UPDATE_DOCS,
  }
}
export const DeleteDocs = () => {
  return {
    type: ACTION_TYPE.DELETE_DOCS,
  }
}