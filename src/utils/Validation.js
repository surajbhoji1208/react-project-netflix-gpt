export const ValidateForm = (email,password)=>
{
    const emailValidate =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(email)
    const passwordValidate = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)

    if(!emailValidate) return "Email is invalid";
    if(!passwordValidate) return "Password is invalid"

    return null

}