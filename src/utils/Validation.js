export const ValidateForm = (email, password) => {
    // Email validation with case-insensitivity
    const emailValidate = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    // Password validation (8-16 characters, one number, one lowercase, one uppercase, one special character)
    const passwordValidate = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if (!emailValidate) return "Email is invalid";
    if (!passwordValidate) return "Password is invalid";

    return null;
};
