import react, {useEffect, useState} from "react";
import { WeekDiv,
         WeekDay } from "./MonthStyled";

import Day from "../Day/Day";


const Month = () => {



    const MountWeek = () => {
        let week = [];
        for(let i=0; i<7; i++){
            week.push(<Day/>)
        }
        return <WeekDiv>{week}</WeekDiv>;
    }

    const MountMonth = () => {
        let month = [];
        for (let i = 0; i<6; i++){
            month.push(MountWeek())
        }
        return month;
    }

    return(
        <>
            <WeekDay> </WeekDay>
            {MountMonth()}
        </>
    )

}

export default Month;