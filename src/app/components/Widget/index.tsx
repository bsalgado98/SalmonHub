'use client';
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities";

type WidgetProps = {
    id: string,
    size: 'small' | 'medium' | 'large',
    content: string
}

const sizeClasses: { [key: string]: string } = {
    small: 'col-span-3 row-span-1',
    medium: 'col-span-3 row-span-2',
    large: 'col-span-3 row-span-4'
}

const Widget = ({ id, size, content }: WidgetProps) => {
    
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })
    const style = {
        transform: CSS.Translate.toString(transform)
    }
    return (
        <div 
            className={`bg-red-500 p-4 shadow-lg rounded-lg ${sizeClasses[size]}`}
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
        >
            {content}
        </div>
    )
}

export default Widget