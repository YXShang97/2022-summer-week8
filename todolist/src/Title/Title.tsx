import { Todo } from "../interfaces";

type Props = {
  todos: Todo[];
};
const Title = (props: Props) => {
  return (
    <div className="title font-mono text-4xl font-extrabold text-center">
      <h1>{props.todos.length} todos for today</h1>
    </div>
  );
};

export default Title;
