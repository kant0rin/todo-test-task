import cl from './CheckBox.module.scss'

type CheckBoxProps = {
  isDone: boolean
  setIsChecked: (e: boolean) => void
}

export const CHECK_BOX_TEST_IDS = {
  CONTAINER: 'check-box-container'
}

const CheckBox: React.FC<CheckBoxProps> = ({isDone, setIsChecked}) => {

  return (
    <input
      data-testid={CHECK_BOX_TEST_IDS.CONTAINER}
      type="checkbox"
      className={cl.checkbox}
      onChange={(e) => setIsChecked(e.target.checked)}
      checked={isDone}
    />
  );
};

export default CheckBox;
