'use client';
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, PointerSensor, UniqueIdentifier, useDroppable, useSensor, useSensors } from "@dnd-kit/core"
import { ReactNode, useState } from "react"
import Widget from "../Widget";

type DashboardProps = {
    children?: ReactNode
}

type WidgetPosition = {
    id: string,
    x: number,
    y: number
}

const Dashboard = ({children}: DashboardProps) => {
    const { setNodeRef } = useDroppable({ id: 'dashboard' })
    const sensors = useSensors(useSensor(PointerSensor))

    const [widgetPositions, setWidgetPositions] = useState<WidgetPosition[]>([
        { id: 'test1', x: 0, y: 0}
    ])
    const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)

    const snapToGrid = (x: number, y: number, gridSize: number = 64) => {
        return { x: Math.round(x / gridSize) * gridSize, y: Math.round(y / gridSize) * gridSize }
    }

    const handleDragEnd = (event: DragOverEvent) => {
        const { active, delta } = event

        setWidgetPositions(prev => prev.map(widget => {
            if (widget.id === active.id) {
                console.log('dragEnd WIDGET IS ACTIVE')
                const { x, y } = snapToGrid(widget.x + delta.x, widget.y + delta.y)
                return { ...widget, x, y }
            } else { console.log('dragEnd inactive widget')}

            return widget
        }))

        setActiveId(null)
    }

    // const handleDragEnd = (event: DragEndEvent) => {
    //     const { active } = event

    //     setWidgetPositions(prev => prev.map(widget => {
    //         if (widget.id === active.id) {
    //                 const { x, y } = snapToGrid(widget.x, widget.y)
    //                 return { ...widget, x, y }
    //             }
    //         return widget
    //     }))
    // }

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event
        setActiveId(active.id)
    }

    return (
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="min-h-screen w-full bg-neutral-950 grid grid-cols-8 grid-rows-8 gap-4 p-4" ref={setNodeRef}>
                {children}
                {/* {
                    widgetPositions.map(wPos => (
                        <Widget
                            key={wPos.id}
                            id={wPos.id}
                            size="medium"
                            x={wPos.x}
                            y={wPos.y}
                        >
                            {wPos.id}
                        </Widget>
                    ))
                }
                {
                    widgetPositions.map(wPos => (
                        <DragOverlay>
                            {
                                activeId ?
                                    <Widget
                                        key={`${wPos.id}-overlay`}
                                        id={`${wPos.id}-overlay`}
                                        size="medium"
                                        x={wPos.x}
                                        y={wPos.y}
                                    >
                                        {wPos.id}
                                    </Widget>
                                    : null
                            }
                        </DragOverlay>
                    ))
                } */}
            </div>
        </DndContext>
    )

}

export default Dashboard