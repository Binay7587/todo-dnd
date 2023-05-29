"use client";
import { useState } from "react";
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
    const [taskList, setTaskList] = useState<TaskListType>({
        tasks: {
            "task-1": { id: "task-1", content: "Learn Reactjs" },
            "task-2": { id: "task-2", content: "Learn Nodejs" },
            "task-3": { id: "task-3", content: "Learn MongoDB" },
            "task-4": { id: "task-4", content: "Learn Nextjs" },
            "task-5": { id: "task-5", content: "Charge my laptop" },
            "task-6": { id: "task-6", content: "Clean the room" },
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
                taskIds: ["task-4"],
            },
            "column-3": {
                id: "column-3",
                title: "Completed",
                taskIds: ["task-1", "task-2", "task-3"],
            },
        },
        columnOrder: ["column-1", "column-2", "column-3"],
    });

    const onDragEnd = (result: any) => {
        const { destination, source, draggableId } = result;
        console.log(result);

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return;

        const start = taskList.columns[source.droppableId];
        const finish = taskList.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };

            const newState = {
                ...taskList,
                columns: {
                    ...taskList.columns,
                    [newColumn.id]: newColumn,
                },
            };

            setTaskList(newState);
            return;
        } else {
            const startTaskIds = Array.from(start.taskIds);
            startTaskIds.splice(source.index, 1);
            const newStart = {
                ...start,
                taskIds: startTaskIds,
            };

            const finishTaskIds = Array.from(finish.taskIds);
            finishTaskIds.splice(destination.index, 0, draggableId);
            const newFinish = {
                ...finish,
                taskIds: finishTaskIds,
            };

            const newState = {
                ...taskList,
                columns: {
                    ...taskList.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish,
                },
            };

            setTaskList(newState);
            return;
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <main className="flex gap-4 m-8">
                {taskList.columnOrder.map((columnId, index) => {
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
