import { Todo } from "../interfaces";
import Item from "./Item/Item";

type Props = {
  todos: Todo[];
  handleCompleted: (index: number) => void;
  handleDelete: (index: number) => void;
  handleEditable: (index: number) => void;
  handleEditInput: (index: number, value: string) => void;
  handleEditConfirm: (index: number) => void;
  handleEditCancel: (index: number) => void;
};

const List = (props: Props) => {
  return (
    <div className="List max-w-lg mx-auto mt-8">
      {props.todos.map((todo, index) => (
        <Item
          key={index}
          todo={todo}
          index={index}
          handleCompleted={props.handleCompleted}
          handleDelete={props.handleDelete}
          handleEditable={props.handleEditable}
          handleEditInput={props.handleEditInput}
          handleEditConfirm={props.handleEditConfirm}
          handleEditCancel={props.handleEditCancel}
        />
      ))}
    </div>
  );
};
export default List;
