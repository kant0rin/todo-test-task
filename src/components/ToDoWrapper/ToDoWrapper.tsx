import MyForm from "../ui/MyForm/MyForm.tsx";
import ToDosList from "../ToDosList/ToDosList.tsx";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/reducers/ToDoSlice.ts";
import uuid from 'react-uuid';

const ToDoWrapper = () => {

  const dispatch = useDispatch()

  const submit = (e: string) => {
    if (e !== '') {
      dispatch(addTodo({
        id: uuid(),
        text: e,
        isDone: false
      }))
    }
  }

  return (
    <div className='p-10 w-full flex justify-center items-center'>
      <div className='flex flex-col items-center justify-center sm:w-[31.25rem] w-[25rem]'>
        <h1 className='text-[7rem] font-thin leading-[1.25] text-[#e9d9d8]'>todos</h1>
        <MyForm
          placeholder='What needs to be done?'
          onSubmit={submit}
        />
        <ToDosList/>
      </div>

    </div>
  );
};

export default ToDoWrapper;
