import { Droppable, DroppableProvided } from "react-beautiful-dnd";
import Task from "./Task";

type ColumnProps = {
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

const Column = ({ column, tasks }: ColumnProps) => {
    return (
        <Droppable droppableId={column.id}>
            {(provided) => (
                <div
                    className="border-2 border-slate-600 w-72 h-min-[100px]"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <h3 className="p-3 font-bold bg-purple-900">
                        {column.title}
                    </h3>
                    <ul>
                        {tasks.map((t, i) => (
                            <Task index={i} task={t} key={t.id} />
                        ))}
                        {provided.placeholder}
                    </ul>
                </div>
            )}
        </Droppable>
    );
};

export default Column;
