import React, {useState} from "react";

export type MyFormProps = {
  placeholder: string
  onSubmit: (e: string) => void
}

export const MY_FORM_TEST_IDS = {
  PLACEHOLDER: 'form-placeholder'
}

const MyForm: React.FC<MyFormProps> = ({placeholder, onSubmit}) => {

  const [value, setValue] = useState<string>('')

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(value)
        setValue('')
      }}
      className='w-full flex items-center shadow-md sm:text-[1.5rem] text-[1rem] font-light justify-center relative z-10'
    >
      <button
        className='p-4 opacity-50 h-[61px]'
      >
        <span className='rotate-90 block '> {'>'} </span>
      </button>
      <input
        data-testid={MY_FORM_TEST_IDS.PLACEHOLDER}
        className='w-full py-4 pl-2 italic opacity-50'
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
    </form>
  );
};

export default MyForm;
