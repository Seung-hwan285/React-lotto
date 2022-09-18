import {atom} from "recoil";

export const textState = atom<any>({
    key: 'textState',
    default: '',
});


export  const ToggleState =atom<boolean>({
    key:'toggle',
    default: false,
})

export const showState=atom<boolean>({
    key:'show',
    default : false,
})


export const matchCountState=atom<any>({
    key : 'match',
    default : {},
})


export const resultNumberCount=atom<number>({
    key : 'resultCount',
    default: 0,
})

export const LottoListState=atom<any[]>({
    key : 'lottoList',
    default: [],
})

export const ShowinningNumber=atom<boolean>({
    key : 'isShowModal',
    default :false,
})