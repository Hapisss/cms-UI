import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setAuthenticated } from "../../redux/authSlice";
import { RootState } from "../../redux/store";

export default function UseLogin() {

    interface loginCredentials {
        username: string,
        password: string
    }

    const [form, setForm] = useState({} as loginCredentials)
    const dispatch = useDispatch()
    const { isAuthenticated, accessToken } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            checkIsLoggedIn()
        }
    }, [isAuthenticated])

    function onChange(namespace: string, value: string) {
        setForm((prevState) => {
            return {
                ...prevState,
                [namespace]: value
            }
        })
    }

    function doLogin() {
        if (form.username === 'username' && form.password === 'password') {
            dispatch(setAccessToken('dummy_token'))
            dispatch(setAuthenticated(true))
        }
    }

    // remove when implementing API
    function checkIsLoggedIn() {
        if (isAuthenticated) {
            console.log('lewat', accessToken)
        }
    }

    return {
        onChange,
        doLogin
    }
}