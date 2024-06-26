import { ChangeEvent, FormEvent, useState } from "react";
import  Logo  from "../../assets/Logo.png";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface Props {
  onAddTask: (taskTittle: string) => void;
}



export default function Header({onAddTask}: Props) {
  const [ title, setTitle] = useState("");
  function handleSubmit(event:FormEvent) {
    event.preventDefault();

    onAddTask(title)
    setTitle("")
  }

  function onChangeTitle(event:ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  

  return (
    <header className="bg-[--gray-700] flex items-center justify-center h-[12.5rem] relative">
      <img src={Logo} alt="logo da aplicação" className="w-[126px] h-[48px]"/>

      <form  onSubmit={handleSubmit} className="h-[3.375rem] w-full max-w-[46rem] flex gap-2 px-4 absolute bottom-[calc(-3.375rem_/_2)]">
        <input onChange={onChangeTitle} type="text" placeholder="Adicione uma nova tarefa" className="h-full flex-1 text-[--gray-100] bg-[--gray-500] border-[--gray-700] rounded-lg px-4 text-base placeholder:text-[--gray-300]" />
        <button className="h-full px-4 bg-[--blue-dark] flex items-center text-[--gray-100] border-none rounded-lg gap-1 font-semibold ">Criar<AiOutlinePlusCircle size={20}/></button>
      </form>
    </header>
  );
}
