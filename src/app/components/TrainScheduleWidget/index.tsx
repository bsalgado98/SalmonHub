'use client'
import Widget from "../Widget"
import { Schedule } from "njt-api"
import TrainScheduleWidgetProps from "@/app/types/TrainScheduleWidgetProps"
import { useEffect, useState } from "react"

const TrainScheduleWidget = ({ id, size, fromStation, toStation }: TrainScheduleWidgetProps) => {
    const [ schedule, setSchedule ] = useState("")

    const getCurrentSchedule = async () => {
        const currentSchedule = await Schedule.getScheduleForDay(fromStation, toStation, new Date())
        console.log({currentSchedule})
    }

    useEffect(() => {
        getCurrentSchedule()
    }, [])

    return (
        <Widget id={id} size={size}>
            {schedule}
        </Widget>
    )
}

export default TrainScheduleWidget