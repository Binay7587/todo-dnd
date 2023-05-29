import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

type ColumnProps = {
    key: string;
    column: {
        id: string;
        title: string;
        taskIds: string[];
    };
    tasks: {
        id: string;
        content: string;
    }[];
};

const Column = ({ key, column, tasks }: ColumnProps) => {
    return (
        <div className="border-2 border-slate-600 w-72 h-min-[100px]">
            <h3 className="p-3 font-bold bg-purple-900">{column.title}</h3>
            <Droppable droppableId={column.id}>
                {(provided) => (
                    <ul
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((t, i) => <Task task={t} index={i} />)}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
