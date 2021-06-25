import React from 'react';
import {useDispatch} from "react-redux";
import {togglePage} from "../stores/pageActions";

import {
    Link
} from "react-router-dom";

export const MainPage = () => {
    const dispatch = useDispatch();

    const togglePageHandler = (htmlToRender) => {
        dispatch(togglePage(htmlToRender))
    }
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: 150,
            flexDirection: 'column'
        }}>

            <label htmlFor={'input'}>Штмл сюда </label>
            <input
                style={{
                    width: '100%'
                }}
                name={'input'}
                onChange={(e) => togglePageHandler(e.target.value)}
            />
            <Link to="/render-page">Смотреть</Link>
        </div>
    )
}
