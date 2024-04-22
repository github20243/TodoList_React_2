import { useState } from "react";
import { Button } from "./props/propsBtn/PropsBtn";
import { Input } from "./props/propsInput/PropsInput";
import css from "./TodoList.module.css";
import cssBtn from "../styles/PropsBtn.module.css";
import cssInput from "../styles/PropsInput.module.css";
import Snowfall from 'react-snowfall'
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTasks] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [selectAllText, setSelectAllText] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTasks("");
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((_, item) => item !== id);
    setTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const toggleAllTasks = () => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      completed: !selectAll,
    }));
    setTasks(updatedTasks);
    setSelectAll(!selectAll);
    setSelectAllText(!selectAllText);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task, item) =>
      id === item ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Snowfall/>
      <div className={css.container}>
        <div className={cssInput.InputSettings}>
          <Input
            className={cssInput.InputBox}
            type={"text"}
            value={newTask}
            onChange={(e) => setNewTasks(e.target.value)}
            placholder={"пишите что нибудь "}
          />
        </div>

        <Button className={cssBtn.Btn1} onClick={addTask}>
          Add
        </Button>
        <Button className={cssBtn.Btn2} onClick={deleteAllTasks}>
          Удалить все
        </Button>
        <Button className={cssBtn.Btn3} onClick={toggleAllTasks}>
          {selectAllText ? "ОТМЕНА" : "ЗАВЕРШЕНО Все"}
        </Button>
      </div>
      <div className={css.blok_content}>
        {tasks.map((task, id) => (
          <div className={css.block} key={id}>
            <div className={css.box}>
              <Input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(id)}
              />
                <h2 className={css.TaskStyle}  style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </h2>
                
              <Button className={cssBtn.Btn4} onClick={() => deleteTask(id)}>
                Удалить
              </Button>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
