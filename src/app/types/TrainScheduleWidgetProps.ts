import { StationName } from "njt-api/lib/station-name"
import WidgetProps from "./WidgetProps"

type TrainScheduleWidgetProps = {
    fromStation: StationName,
    toStation: StationName
} & WidgetProps

export default TrainScheduleWidgetProps