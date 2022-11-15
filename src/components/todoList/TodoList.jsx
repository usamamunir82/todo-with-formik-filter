import React from "react";
import "./todolist.css";
import updateContext from "../context/updateContext";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import TodoForm from "../todoForm/TodoForm";
import {
  getData,
  removeTodo,
} from "../../redux/reducers/todoReducer/todoSlice";
import { todoCompleted } from "../../redux/reducers/todoReducer/todoSlice";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
// import { filterTodo } from "../../redux/reducers/todoReducer/todoSlice";
// import { filterTodoFisrtName } from "../../redux/reducers/todoReducer/todoSlice";

function TodoList() {
  const Todos = useSelector(getData);
  const [todosData, setTodosData] = useState(null);
  const [renderComp, setrenderComp] = useState(false);
  const [isShown, setIsShown] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const notify = () => toast.error("That is Completed Not Changed!");
  const { state, setstate } = useContext(updateContext);
  const [filterFirstName, setFilterFirstName] = useState("");
  // const [filterbyId,setFilterbyId]=useState()
  const [filterdata, setFilterData] = useState(null);

  const handleDelete = (id) => {
    const index = todosData.findIndex((todo) => todo.id === id);

    todosData.splice(index, 1);

    dispatch(removeTodo({ id: id, todosData: todosData }));
  };
  useEffect(() => {
    let todoArray = [];
    Todos?.forEach((item) => {
      if (item.completed) {
        todoArray.push({ ...item, checked: true });
      } else {
        todoArray.push({ ...item, checked: false });
      }
    });
    setTodosData(todoArray);
    setFilterData(todoArray);
  }, [Todos]);

  const handleUpdate = (todo, index) => {
    console.log(todo);
    let obj = {
      ...todo,
      index: index,
    };
    setstate((prev) => {
      return obj;
    });
  };

  const MarkComplete = () => {
    let todocheckedArray = [];
    todosData.map((item, ind) => {
      if (item.checked === true) {
        item.completed = true;
        // setrenderComp(!renderComp)
        // todocheckedArray.push(item);
      }
      todocheckedArray.push(item);

      dispatch(
        todoCompleted({
          todocheckedArray: todocheckedArray,
        })
      );
    });

    setIsShown(false);
  };
  const MarkAll = () => {
    todosData.map((item) => {
      item.checked = true;
      setrenderComp(!renderComp);
    });
  };
  const FilteridChange = (evt) => {
    const id = document.getElementById("id");
    console.log(id.value);
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");

    const abc = todosData?.filter((item) => {
      if (item.id.toString() === "") {
        return item;
      } else if (
        item.id.toString().includes(id.value) &&
        item.firstName.toLowerCase().includes(firstName.value) &&
        item.lastName.toLowerCase().includes(lastName.value) &&
        item.email.toLowerCase().includes(email.value)
      ) {
        return item;
      }
    });
    setFilterData(abc);
  };

  // const FilterFirstName=(evt)=>{

  //   setFilterFirstName(evt.target.value)
  //  const abc2=  todosData?.filter((item)=>{
  //     if(item.firstName.toLowerCase().includes(filterFirstName.toLowerCase()) ){
  //       return item
  //     }
  //   }

  //   )

  //   setFilterData(abc2)

  // }
  // const FilterlastName=(evt)=>{
  //   const abc3=  todosData?.filter((item)=>{
  //     if(item.lastName.toLowerCase().includes(evt.target.value.toLowerCase())){
  //       return item
  //     }
  //   }

  //   )

  //   setFilterData(abc3)
  // }
  // const Filteremail=(evt)=>{
  //   const abc4=  todosData?.filter((item)=>{
  //     if(item.email.toLowerCase().includes(evt.target.value.toLowerCase())){
  //       return item
  //     }
  //   }

  //   )

  //   setFilterData(abc4)
  // }

  return (
    <div className="container">
      <div className="todolistContainer">
        <Link to="/todoForm">
          <div className="addButon">
            <div>
              <button>Add Todo Data</button>
            </div>
            <div className="addIcon">
              <IoIosAddCircle className="iconAdd" />
            </div>
          </div>
        </Link>
        {isShown && (
          <div className="markbuton">
            <button className="markComplete" onClick={MarkComplete}>
              Mark As Completed
            </button>
            <button className="markAll" onClick={MarkAll}>
              Mark ALL
            </button>
          </div>
        )}
        <b>
        Filtered By:
        </b>
        <div className="filterBox">
          Id:
          <input name="id" id="id" onChange={FilteridChange} />
          FirstName
          <input name="firstName" id="firstName" onChange={FilteridChange} />
          LastName
          <input name="lastName" id="lastName" onChange={FilteridChange} />
          Email
          <input name="email" id="email" onChange={FilteridChange} />
          {/* <button onClick={FilteredID}>Filter with email</button> */}
        </div>

        <table className="table-auto">
          <thead>
            <tr className="tableHeadRow">
              <th>Mark</th>
              <th>id</th>
              <th>FirstName</th>
              <th>lastName</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterdata?.length > 0
              ? filterdata?.map((todo, index) => (
                  <tr key={index} className="trBox">
                    <td>
                      <div className="todoTitle">
                        <input
                          disabled={todo.completed}
                          onChange={() => {
                            todo.checked = !todo.checked;
                            setrenderComp(!renderComp);
                            setIsShown(true);
                          }}
                          type="checkbox"
                          checked={todo.checked}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="todoTitle">{todo.id}</div>
                    </td>
                    <td>
                      <div className="todoTitle">{todo.firstName}</div>
                    </td>
                    <td>
                      <div className="todoTitle">{todo.lastName}</div>
                    </td>
                    <td>
                      <div className="todoTitle">{todo.email}</div>
                    </td>

                    <td>
                      <div className="actionButton">
                        <div className="listButon">
                          <AiFillEdit
                            className="listbutonIcon"
                            onClick={() => {
                              console.log(todo.completed);
                              todo.completed
                                ? notify()
                                : navigate(
                                    "./todoForm",
                                    handleUpdate(todo, index)
                                  );
                            }}
                          />
                        </div>

                        <ToastContainer />

                        <div className="deleteeIcon">
                          <RiDeleteBin7Fill
                            className="delico"
                            onClick={() => handleDelete(todo.id)}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              : "No Records Found"}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
