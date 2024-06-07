import { TbClipboardText } from "react-icons/tb";
import { ITasks } from "../../App";
import Task from "./task";

interface Props {
  tasks: ITasks[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export default function TaskHeader({ tasks, onDelete, onComplete }: Props) {
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
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>
        ))}

        {tasks.length <=  0 && (
          <section className="mt-4 flex items-center justify-center flex-col gap-4 text-[--gray-300] text-center">
            <TbClipboardText size={50} className="opacity-[0.3]"/>
            <div>
              <p className="font-bold">Você ainda não criou suas tarefas</p>
              <span>Crie e organzie seu Todo List</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
