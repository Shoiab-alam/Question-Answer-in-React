import React from "react";
import Question from "./Question";
import QuestionApi from "./QuestionApi";
const FinalQuestion = () => {
    return(<>    
    <div className="flex justify-center items-center h-screen bg-white">
        <div className="w-96 border-2 bg-white rounded-2xl shadow-inner p-5"> 
        <p className="text-2xl font-bold bg-slate-200 rounded text-center mb-5 p-2">REACT INTERVIEW QUESTION</p>

        {
            QuestionApi.map((items,index)=>{
                return <Question 
                    key={index}
                    question={items.question}
                    answer={items.answer}
                />
            })
        }
        </div>
        </div>
    </>


    )
}

export default FinalQuestion;