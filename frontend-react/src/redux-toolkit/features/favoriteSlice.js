import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
    favoriteItems: localStorage.getItem("favoriteItems") ? JSON.parse(localStorage.getItem("favoriteItems")) : [],
    thumbTotalQuantity: 0,
}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        thumbToFavorite(state, action) {
            const itemIndex = state.favoriteItems.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.favoriteItems[itemIndex].thumbQuantity += 1
                toast.info(`${state.favoriteItems[itemIndex].title}에 좋아요를 눌렀습니다.`, {
                    position: "bottom-left"
                })
            } else {

                const tempProduct = { ...action.payload, thumbQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.title}이 마음에 들었습니다.`, {
                    position: "top-center"
                })
            }

            localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems))

        },
    }
})

export const { thumbToFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer