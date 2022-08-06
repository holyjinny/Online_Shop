import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Cart에 물품 추가하는 기능
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`${state.cartItems[itemIndex].title}로 장바구니가 두둑해지고 있습니다.`, {
                    position: "bottom-left"
                })
            } else {

                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.title}물건이 추가 되었습니다`, {
                    position: "top-center"
                })
            }

            // 여기를 아마 DB로 바꿔야 할 듯 (현재 로컬에 저장 중)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        // 카트에 있는 물건을 제외하는 기능
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )

            state.cartItems = nextCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`${action.payload.title}물건이 제외 되었습니다`, {
                position: "bottom-left"
            })
        },

        // 물건 수량 감소 기능
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info(`${action.payload.title}물건의 수량이 감소 되었습니다`, {
                    position: "bottom-left"
                })
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )

                state.cartItems = nextCartItems
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
                toast.error(`${action.payload.title}물건이 제외 되었습니다`, {
                    position: "bottom-left"
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        // 카트 비우기 기능
        clearCart(state, action) {
            state.cartItems = [];
            toast.error("카트가 비워졌습니다.", {
                position: "bottom-left"
            })

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        // 총 금액 기능
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem
                const itemTotal = price * cartQuantity

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            }, {
                total: 0,
                quantity: 0
            })

            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }

    }
})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions

export default cartSlice.reducer