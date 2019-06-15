import React, { useState, useContext, createContext, useEffect } from 'react';




export interface State {
    id: string,
    setId(id:string):void,
    setId2(id:string):void,
    b:any
}

export const UserLoginInfoContext = createContext<State>({
    id: "base",
    setId:(id:string)=>{console.log("not changed")},
    setId2:(id:string)=>{console.log("not changed")},
    b:false
})
const UserLoginInfoContextProvider: React.FC = (props) => {

    const setIdFn = (id: string) => {
        console.log(state.id + " : 1");
        setState({
            ...state,
            id: id,
            b:true
        })
    }
    const setIdFn2 = (id: string) => {
        console.log(state.id + " : 2");
        setState({
            ...state,
            b:true
        })
    }
// setId 는 계속 초기 이고 id,b가 새걸로 덮어짐
// id 초기로 바뀌고, setId b가 새걸로 덮어짐
    /*
        setState({
            ...state,
            setId:??
            b:[t,state]
        })

    */
    useEffect(() =>{
        //console.log(state);
        test();
        return() => {
            //console.log(state);
            test();
        }
    });

    const test = () => {
        console.log(state)
    }

    const [state, setState] = useState<State>({
        id: "consumed",
        setId:setIdFn,
        setId2:setIdFn2,
        b:false
    });

    return (
        <UserLoginInfoContext.Provider value={state}>
            {props.children}
        </UserLoginInfoContext.Provider >
    );
}

export default UserLoginInfoContextProvider;