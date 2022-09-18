interface LottoCheckBoxProps{
    onChangeToggle : (e:any)=>void;
}
function LottoCheckBox({onChangeToggle} : LottoCheckBoxProps){

    return(

        <>

            <input id="switch" type="checkbox" onChange={onChangeToggle}/>

            <label htmlFor="switch" className="label-on-off"></label>
        </>
    )
}

export default LottoCheckBox;