import TaskList from "./TaskList";

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
        <div className="border-2 border-slate-600 w-72">
            <h3 className="p-3 font-bold">{column.title}</h3>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default Column;
