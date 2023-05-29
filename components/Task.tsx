import React from "react";
import { Draggable } from "react-beautiful-dnd";

type TaskType = {
    id: string;
    content: string;
};

interface TaskProps {
    task: TaskType;
    index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <li
                    key={task.id}
                    className="p-3 mb-3 ml-3 mr-3 mt-3 border-2 border-slate-600 bg-black"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <span>{task.content}</span>
                </li>
            )}
        </Draggable>
    );
};

export default Task;
