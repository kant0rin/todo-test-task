import CheckBox from "../ui/CheckBox/CheckBox.tsx";
import {useState} from "react";
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {updateToDo} from "../../store/reducers/ToDoSlice.ts";

export type ToDoCardProps = {
  id: string
  text: string
  isDone: boolean
}

export const TO_DO_CARD_TEST_IDS = {
  TEXT: 'to-do-card-text',
}

const ToDoCard: React.FC<ToDoCardProps> = ({id, text, isDone}) => {

  const dispatch = useDispatch()

  const [isChecked, setIsChecked] = useState<boolean>(isDone)

  const setIsDone = () => {
    setIsChecked(prev => !prev)
    dispatch(updateToDo({
      id,
      isDone: !isChecked
    }))
  }

  return (
    <div
      className='w-full py-4 text-[1.5rem] leading-[1.25] font-extralight border-t border-opacity-10 border-black flex items-center cursor-pointer select-none'
      onClick={() => setIsDone()}
    >
      <CheckBox isDone={isChecked} setIsChecked={setIsChecked}/>
      <p data-testid={TO_DO_CARD_TEST_IDS.TEXT} className={classNames('pl-2 duration-300', {'opacity-50 line-through': isChecked})}>
        {text}
      </p>
    </div>
  );
};

export default ToDoCard;
