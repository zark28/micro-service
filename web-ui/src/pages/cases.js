import fetch from "isomorphic-unfetch";
import {useState} from "react";
import Layout from "../components/Layout";
import Case from "../components/Case";





function Cases() {
    const[state,setState]= useState({cases:[], isLoading:false})

    //Making an APi Call 
    getCases((data)=>{
        setState((prev)=>({...prev,cases:data}));
    });

    return (
    <Layout title="Cases | Covid Anchor">
        <h1>Cases Page</h1>
        <div className="cases">
            {state.cases.map((item,key)=>{
                return<Case key={key} caseData={item}/>;
            })}

        </div>
    </Layout>
    );
}

export default Cases;

//Get Cases
const CASE_API = "http://localhost:5000?take=5&skip=2";
async function getCases(update){
    const response = await fetch(CASE_API);
    const data = await response.json();
    console.log(update(data))

    // await update(data);
}