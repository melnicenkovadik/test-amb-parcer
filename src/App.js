import './App.css';
import {useState} from "react";

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
const shortCodes2 = {
    image: 'https://images.unsplash.com/photo-1592551321929-0ba808e08e14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
    title: ' Hello Abm Item',
    description: 'I am page of your asset, please see on me',
    listTitle: 'Tell us your story. (in a minimum of 200 words)',
    listtDescr: 'My name is Chirag Agarwal and i am from agra.I pass 12th class from the\n        Nios Board.In my family, i have two members including me:-my mother and\n        my elder brother.My brother is insurance agent. My mother is house women\n        and she is also doing a work from a home like packing, clothes stiching,\n        etc. My hobbies is teaching, watching web series, watching comedy shows\n        and also doing a little bit programming.',
    listTitle2: 'Why do you want to learn web development?',
    listtDescr2: ' Programming need a logical part. I like to do a logical question and\n        logical part. I am doing the programming like python, html, css and\n        javaScript from the online resources like sololearn, Codecademy and also\n        from the youtube.When i am learning programming and it give me help how\n        to think and programming also help me to improve my logical thinking. I\n        enjoy the programming',
    listTitle3: '\n        Tell us a little bit about the person who has had the most impact on you\n        and how?\n      ',
    listtDescr3: ' My mother is the only person who had the most impact in my life because\n        after the father dead, me and my brother very small in age. She doing a\n        work very hard for me and my brother. My Uncle(Tauji) also help our\n        family as a financially.',
    listTitle4: '\n        What\'s your preferred learning style? How do you think you learn\n        something best?\n      ',
    listtDescr4: ' I preferred practical learning style not a theoritical because most of\n        the college focus on theoritical not a practical that\'s why most of the\n        company reject the student of the college. I am giving te first pirorty\n        to the practical learning and the second pirorty theotical learning.\n        Prcatical learning visualize and help me how the work is going on.',
}

function App() {
    const [result, setResult] = useState('')
    const getHtml = (htmlString) => {
        setResult(Object.keys(shortCodes2).reduce((acc, code) => {
                return acc.replaceAll(`{{${code}}}`, shortCodes2[code])
            }, htmlString)
        )
    }
    return (
        <div className="App">
            <br/>
            <br/>
            <input onChange={(e) => getHtml(e.target.value)} value={result}/>
            <br/>
            <br/>
            <div dangerouslySetInnerHTML={{__html: result}}/>
        </div>
    );
}

export default App;
