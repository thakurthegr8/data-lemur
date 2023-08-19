import React, { useEffect, useState } from 'react'

const useLocalStorage = (props) => {
    const [value, setValue] = useState(null);
    useEffect(() => {
        if (props.key) {
            setValue(localStorage.getItem(props.key))
        }
    }, [])
    const setItem = (key, value) => {
        localStorage.setItem(key, value);
    }
    return { value, setItem };

}

export default useLocalStorage;