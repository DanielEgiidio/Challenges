import { TbTrash } from "react-icons/tb";
import { ITasks } from "../../App";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface Props {
  task: ITasks;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export default function task({ task, onDelete, onComplete }: Props) {
  return (
    <section className="w-full bg-[--gray-500] border-[--gray-400] p-4 rounded-lg flex items-center justify-between gap-3">
      <button
        onClick={() => onComplete(task.id)}
        className="border-none min-w-[1.25rem] h-[1.25rem] bg-none"
      >
        {task.isCompleted ? (
          <BsFillCheckCircleFill className="w-full h-full text-[--purple]" />
        ) : (
          <div className="w-full h-full rounded-full border-2 border-[--blue]" />
        )}
      </button>

      <p
        className={
          task.isCompleted
            ? "text-sm text-[--gray-300] mr-auto line-through transition-colors ease duration-300"
            : "text-sm text-[--gray-100] mr-auto "
        }
      >
        {task.title}
      </p>

      <button
        className="bg-none border-none text-[--gray-300]"
        onClick={() => onDelete(task.id)}
      >
        <TbTrash size={20} />
      </button>
    </section>
  );
}
