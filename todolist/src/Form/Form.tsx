type Props = {
  input: string;
  setInput: (input: string) => void;
  handleAddTodo: () => void;
};

const Form = (props: Props) => {
  return (
    <div className="Form flex justify-between  max-w-lg mx-auto mt-8">
      <input
        type="text"
        value={props.input}
        onChange={(event) => props.setInput(event.target.value)}
        className="px-24 py-2 leading-tight text-gray-700 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline"
      />
      <button
        onClick={props.handleAddTodo}
        className="text-white bg-blue-500 px-6 py-1.5 border border-transparent font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add todo
      </button>
    </div>
  );
};
export default Form;
