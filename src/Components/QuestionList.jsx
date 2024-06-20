import { useState } from "react";
import { useGlobalState } from "../Context/GlobalState";
import { Question } from "./Question";

export const QuestionList = () =>{
    const {questionsList} = useGlobalState();
    const [indexQuestion, setIndex] = useState(0)
    console.log("Lista 1"+questionsList[indexQuestion].id)
    return (
        <>
           {
            questionsList[indexQuestion].questionList.map(question => {
                <Question/>
            })
           }
        </>
    );
}