import {useAppSelector} from "../../hooks/redux.ts";
import {useDispatch} from "react-redux";
import {removeAllSelectedTodos} from "../../store/reducers/ToDoSlice.ts";
import ToDoCard from "../ToDoCard/ToDoCard.tsx";
import {useEffect, useState} from "react";
import classNames from "classnames";


const ToDosList = () => {

  const todoList = useAppSelector(state => state.todoReducer).toDoList
  const [filterQuery, setFilterQuery] = useState<string>('All')
  const [filteredList, setFilteredList] = useState(todoList)
  useEffect(() => {
    if (filterQuery === 'All') {
      setFilteredList(todoList)
    }
    if (filterQuery === 'Active') {
      setFilteredList(todoList.filter(e => e.isDone !== true))
    }
    if (filterQuery === 'Completed') {
      setFilteredList(todoList.filter(e => e.isDone !== false))
    }
  }, [filterQuery, todoList])
  const dispatch = useDispatch()

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full shadow-md overflow-y-scroll max-h-[38rem]' style={{background: 'white'}}>

        {
          filteredList &&
          filteredList.map((e) => {
            return (
              <ToDoCard key={e.id} id={e.id} text={e.text} isDone={e.isDone}/>
            )
          })
        }
      </div>
      <div className='bg-white shadow-md border-t-black border-t border-opacity-10 p-4 text-[1rem] font-extralight flex items-center justify-between' >
        <span>
          {todoList.filter(e => e.isDone !== true).length}
          <span className='ml-1'>items left</span>
        </span>
        <div className='flex items-center '>
          <button
            onClick={() => setFilterQuery('All')}
            className={
            classNames(
              'px-2 py-1 duration-300 border border-opacity-10',
              {'border-black': filterQuery === 'All'},
              {'border-white': filterQuery !== 'All'}
              )
          }
          >All</button>
          <button
            onClick={() => setFilterQuery('Active')}
            className={
              classNames(
                'px-2 py-1 duration-300 border border-opacity-10',
                {'border-black': filterQuery === 'Active'},
                {'border-white': filterQuery !== 'Active'}
              )
            }
          >Active</button>
          <button
            onClick={() => setFilterQuery('Completed')}
            className={
              classNames(
                'px-2 py-1 duration-300 border border-opacity-10',
                {'border-black': filterQuery === 'Completed'},
                {'border-white': filterQuery !== 'Completed'}
              )
            }
          >Completed</button>
        </div>
        <button
          onClick={() => {
            dispatch(removeAllSelectedTodos())
          }}
        >Clear completed</button>
      </div>
    </div>
  );
};

export default ToDosList;
