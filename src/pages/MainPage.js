import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {togglePage} from "../stores/pageActions";

import {
    Link
} from "react-router-dom";
const iframe = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Card Layout with CSS Grid</title>
    <link rel="stylesheet" href="styles.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <main>
      <section class="cards">
        <div class="card">
          <div class="card__image-container">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
            />
          </div>
          <div class="card__content">
            <p class="card__title text--medium">
              Here's the Title of an Awesome Course
            </p>
            <div class="card__info">
              <p class="text--medium">30 Min</p>
              <p class="card__price text--medium">Free</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <style>
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      body {
        background-color: #303032;
      }

      main {
        display: grid;
        grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
        grid-gap: 40px;
        padding: 60px 0;
      }

      .text--medium {
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        color: #ecf0f1;
      }

      .cards {
        grid-column: 2 / span 12;
        display: grid;
        grid-template-columns: repeat(12, minmax(auto, 60px));
        grid-gap: 40px;
      }

      .card {
        grid-column-end: span 4;
        display: flex;
        flex-direction: column;
        background-color: #39393b;
        cursor: pointer;
        transition: all 0.3s ease 0s;
      }

      .card:hover {
        transform: translateY(-7px);
      }

      .card__image-container {
        width: 100%;
        padding-top: 56.25%;
        overflow: hidden;
        position: relative;
      }

      .card__image-container img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .card__content {
        padding: 20px;
      }

      .card__title {
        margin-bottom: 20px;
      }

      .card__info {
        display: flex;
        align-self: end;
        align-items: center;
      }

      .card__price {
        margin-left: auto;
        padding: 5px 20px;
        background-color: #303032;
        border-radius: 20px;
      }

      @media only screen and (max-width: 1000px) {
        .card {
          grid-column-end: span 6;
        }
      }

      @media only screen and (max-width: 700px) {
        main {
          grid-gap: 20px;
        }
        .card {
          grid-column-end: span 12;
        }
      }

      @media only screen and (max-width: 500px) {
        main {
          grid-template-columns: 10px repeat(6, 1fr) 10px;
          grid-gap: 10px;
        }
        .cards {
          grid-column: 2 / span 6;
          grid-template-columns: repeat(6, 1fr);
          grid-gap: 20px;
        }
        .card {
          grid-column-end: span 6;
        }
      }
    </style>
  </body>
</html>

    `
const iframe2 = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
    <style>
      .heading {
        text-align: center;
        color: whitesmoke;
        padding-bottom: 16px;
      }
      body {
        background-color: #063f79;
      }
      .image-radius {
        border-radius: 50%;
        display: block;
        margin: auto;
        height: 110px;
        width: 110px;
      }
      h2 {
        color: whitesmoke;
        text-align: center;
      }
      span {
        color: #149e0a;
      }
      li {
        color: white;
        font-size: 20px;
        padding-top: 30px;
      }
      p {
        color: #149e0a;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <h1 class="heading">{{title}}</h1>
    <img
      class="image-radius"
      src="{{image}}"
      alt="Chirag"
    />
    <h2> <span>{{description}}</span></h2>
    <ol>
      <li>{{listTitle}} </li>
      <p>
      {{listtDescr}}
      </p>
      <li>{{listTitle2}}</li>
      <p>
       {{listtDescr2}}
      </p>
      <li>
       {{listTitle3}}
      </li>
      <p>
       {{listtDescr3}}
      </p>
      <li>{{listTitle4}}</li>
      <p>
       {{listtDescr4}}
      </p>
    </ol>
  </body>
</html>
`
const shortCodes1 = {
    title: 'Here\'s the Title of an Awesome Course',
    textMedium: '30 Min',
    cardPrice: 'Free',
}

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
