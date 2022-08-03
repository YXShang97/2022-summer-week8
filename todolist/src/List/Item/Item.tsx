import { Todo } from "../../interfaces";

type Props = {
  todo: Todo;
  index: number;
  handleCompleted: (index: number) => void;
  handleDelete: (index: number) => void;
  handleEditable: (index: number) => void;
  handleEditInput: (index: number, value: string) => void;
  handleEditConfirm: (index: number) => void;
  handleEditCancel: (index: number) => void;
};

const Item = (props: Props) => {
  return (
    <div className="Item flex justify-between items-center max-w-lg mx-auto my-4">
      {props.todo.completed ? (
        <button
          onClick={() => props.handleCompleted(props.index)}
          className="bg-green-600 text-white font-mono font-medium px-5 py-1.5 rounded-full border border-green-600"
        >
          complete
        </button>
      ) : (
        <button
          onClick={() => props.handleCompleted(props.index)}
          className="bg-white text-green-600 font-mono font-medium px-2.5 py-1.5 rounded-full border border-green-600"
        >
          incomplete
        </button>
      )}
      {props.todo.editable ? (
        <input
          value={props.todo.editInput}
          onChange={(event) =>
            props.handleEditInput(props.index, event.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") props.handleEditConfirm(props.index);
          }}
          onBlur={() => props.handleEditCancel(props.index)}
          className="font-mono text-2xl font-bold"
        />
      ) : (
        <p
          onClick={() => props.handleEditable(props.index)}
          className="font-mono text-2xl font-bold"
        >
          {props.todo.title}
        </p>
      )}
      <button
        onClick={() => props.handleDelete(props.index)}
        className="text-white bg-red-500 px-3.5 py-1.5 border border-transparent font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        delete
      </button>
    </div>
  );
};
export default Item;
