'use client';
import WidgetProps from "@/app/types/WidgetProps";
import { useDraggable } from "@dnd-kit/core"

const sizeClasses: { [key: string]: string } = {
    small: 'col-span-3 row-span-1',
    medium: 'col-span-3 row-span-2',
    large: 'col-span-3 row-span-4'
}

const Widget = ({ id, size, children }: WidgetProps) => {
    
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })
    const style: React.CSSProperties = {
        // position: "absolute",
        // left: x,
        // top: y,
    }
    return (
        <div
            className={`border-solid border-2 border-red-500 rounded-lg ${sizeClasses[size]}`}
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
        >
            {children}
        </div>
    )
}

export default Widget