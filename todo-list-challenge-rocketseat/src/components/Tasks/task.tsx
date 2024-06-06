import { TbTrash } from "react-icons/tb"
import { ITasks } from "../../App";

interface Props {
   task: ITasks;
}

export default function task({task}: Props) {
  return (
    <section className="w-full bg-[--gray-500] border-[--gray-400] p-4 rounded-lg flex items-center justify-between gap-3">
      <button className="border-none min-w-[1.25rem] h-[1.25rem] bg-none"><div className="w-full h-full rounded-full border-2 border-[--blue]"/></button>

      <p className="text-sm text-[--gray-100] mr-auto">{task.title}</p>

      <button className="bg-none border-none text-[--gray-300]"><TbTrash size={20}/></button>
    </section>
  );
}
