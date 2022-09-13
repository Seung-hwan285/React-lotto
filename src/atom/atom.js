import {atom} from "recoil";

export const textState = atom({
    key: 'textState',
    default: '',
});


export  const ToggleState =atom({
    key:'toggle',
    default: false,
})

export const showState=atom({
    key:'show',
    default : false,
})


export const matchCountState=atom({
    key : 'match',
    default : {},
})