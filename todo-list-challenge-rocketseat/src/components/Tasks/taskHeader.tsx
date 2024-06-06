import { ITasks } from "../../App";
import Task from "./task";

interface Props {
  tasks: ITasks[];
}

export default function TaskHeader({ tasks }: Props) {
    const taskQuantity = tasks.length;
    const isCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className="w-full max-w-[48rem] mx-auto mt-[5.625rem] px-4">
      <header className="flex items-center justify-between mb-[1.5rem]">
        <div className="flex items-center gap-[0.8rem]">
          <p className="text-[--blue] font-semibold text-sm">Tarefas criadas</p>
          <span className="bg-[--gray-400] text-[--gray-200] py-1 px-2.5 rounded-full ">
            {taskQuantity}
          </span>
        </div>
        <div className="flex items-center gap-[0.8rem]">
          <p className="text-[--purple] font-semibold text-sm">conclusão</p>
          <span className="bg-[--gray-400] text-[--gray-200] py-1.5 px-2.5 rounded-full ">
           {isCompleted} de {taskQuantity}
          </span>
        </div>
      </header>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
