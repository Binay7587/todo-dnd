type TaskProps = {
    tasks: {
        id: string;
        content: string;
    }[];
};

const TaskList = ({ tasks }: TaskProps) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className="p-3 mb-3 ml-3 mr-3 border-2 border-slate-600">
                    <span>{task.content}</span>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
