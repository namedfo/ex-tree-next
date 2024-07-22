import { create } from 'zustand'





interface IUseHeaderStore {
    isShow: boolean
    toggleIsShow: () => void
}


export const useHeaderStore = create<IUseHeaderStore>()((set) => ({
    isShow: false,
    toggleIsShow: () => set(state => ({ isShow: !state.isShow }))
}))