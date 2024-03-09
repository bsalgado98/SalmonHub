'use client';
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { ReactNode } from "react"

type DashboardProps = {
    children?: ReactNode
}

const Dashboard = ({children}: DashboardProps) => {

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        console.log({ active, over })
    }
    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="min-h-screen w-full bg-neutral-950 grid grid-cols-8 grid-rows-8 gap-4 p-4">
                {children}
            </div>
        </DndContext>
    )

}

export default Dashboard