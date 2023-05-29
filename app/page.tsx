"use client";
import Column from "../components/Column";
import { DragDropContext } from "react-beautiful-dnd";

type TaskProps = {
    id: string;
    content: string;
};

type ColumnProps = {
    id: string;
    title: string;
    taskIds: string[];
};

type TaskListType = {
    tasks: Record<string, TaskProps>;
    columns: Record<string, ColumnProps>;
    columnOrder: string[];
};

export default function Home() {
    const taskList: TaskListType = {
        tasks: {
            "task-1": { id: "1", content: "Learn Reactjs" },
            "task-2": { id: "2", content: "Learn Nodejs" },
            "task-3": { id: "3", content: "Learn MongoDB" },
            "task-4": { id: "4", content: "Learn Nextjs" },
            "task-5": { id: "5", content: "Charge my laptop" },
            "task-6": { id: "6", content: "Buy a phone" },
        },
        columns: {
            "column-1": {
                id: "column-1",
                title: "Todo",
                taskIds: ["task-5", "task-6"],
            },
            "column-2": {
                id: "column-2",
                title: "In Progress",
                taskIds: [],
            },
            "column-3": {
                id: "column-1",
                title: "Completed",
                taskIds: ["task-1", "task-2", "task-3", "task-4"],
            },
        },
        columnOrder: ["column-1", "column-2", "column-3"],
    };

    const onDragEnd = () => (result) => {
        // TODO: reorder our column
    };

    return (
        <DragDropContext onDragEnd={onDragEnd()}>
            <main className="flex gap-4 m-8">
                {taskList.columnOrder.map((columnId) => {
                    const column = taskList.columns[columnId];
                    const tasks = column.taskIds.map(
                        (taskId) => taskList.tasks[taskId]
                    );

                    return (
                        <Column key={column.id} column={column} tasks={tasks} />
                    );
                })}
            </main>
        </DragDropContext>
    );
}
