import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import Config from './config.json'

import LogoIcon         from "./assets/images/logo-dark.webp"
import LogoDarkIcon     from "./assets/images/logo-light.webp"

export const config = Config

const getStore = (initialState: StoreObject) => {
    try {
    } catch (err) {
        console.log(err)
    }
    return initialState
}

const setStore = (state:any) => {
    delete state.L
    window.localStorage.setItem(config.appKey, JSON.stringify(state))
}

const initialState: StoreObject = {
    theme:              '',
    loading:            false
}

export const slice = createSlice({
    name: 'store',
    initialState: getStore(initialState),
    reducers: {
        update: (state: any, action) => {
            for (const k in action.payload) {
                if (state[k] === undefined) new Error(`undefined store key ${k}`)
                state[k] = action.payload[k]
            }
            setStore(state)
        }
    }
})

export const fetchJson = (api:string, method:string, param: any) => {
    return fetch(
        api,
        {
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(param),
        }
    )
};

const useStore = () => {
    const G = useSelector((state: StoreObject) => state)

    const dispatch = useDispatch()
    const update = (payload:Partial<StoreObject>) => dispatch(slice.actions.update(payload))

    const showLoading = (visible: boolean) => update({loading: visible})

    const Logo = G.theme === "" ? LogoIcon : LogoDarkIcon

    return { ...G, dispatch, update, showLoading, Logo }
}

export default useStore