export const checkBtnValidation = (email, password) =>{
    const isEmailValid = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i.test(email)
    const isPassswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!isEmailValid) return("Email is not Valid")
    if(!isPassswordValid) return("Password is not valid")
    return (null)
}