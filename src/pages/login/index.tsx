import React from "react"
import UsernameInputField from "../../components/input-fields/usernameInputField"
import PasswordInputField from "../../components/input-fields/passwordInputFields"
import ButtonPrimary from "../../components/buttons/buttonPrimary"
import UseLogin from "./loginPage.hooks"

export default function LoginPage() {

    const {
        onChange,
        doLogin
    } = UseLogin()


    return (
        <div className="w-full h-full flex justify-center items-center bg-gray-50">
            <div className="w-[500px] h-[350px] bg-white border-gray-300 border rounded-6 flex flex-col items-center justify-center gap-4 drop-shadow-2xl">
                <h1 className="text-primary text-2xl font-roboto font-bold">Portfolio CMS</h1>
                <div className="flex flex-col gap-4">
                    <UsernameInputField placeholder="Username" onChange={onChange} namespace={"username"} />
                    <PasswordInputField placeholder="Password" onChange={onChange} namespace={"password"} />
                </div>
                <ButtonPrimary buttonText="Login" onClick={() => doLogin()} />
            </div>
        </div>
    )
}