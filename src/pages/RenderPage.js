import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";

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

export const RenderPage = () => {
    const {pageToRender, error} = useSelector(state => state);
    const [result, setResult] = useState();
    let history = useHistory();

    useEffect(() => {
        console.log(pageToRender);
        if (pageToRender === undefined) {
            history.push("/");
        } else {
            setResult(Object.keys(shortCodes2).reduce((acc, code) => {
                    return acc.replaceAll(`{{${code}}}`, shortCodes2[code])
                }, pageToRender)
            )
        }
    }, [pageToRender])

    const renderErrorView = (
        <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
        ><img src={'https://www.ejaar.ae/images/NoRecordFound.png'}/>{error}</div>
    )

    return (
        <>
            {pageToRender ? <div dangerouslySetInnerHTML={{__html: result}}/>

                : renderErrorView}
        </>

    )
}
