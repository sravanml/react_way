import { Component } from "react";
import { toast } from "react-toastify";

class HobbiesFiller extends Component {
  state = {
    newHobby: "",
    hobbies: [],
  };

  onNewHobbyChange = (e) => {
    this.setState({ newHobby: e.target.value });
  };

  onAddNewHobby = () => {
    const { newHobby, hobbies } = this.state;
    const newHobbyLC = newHobby.toLowerCase();
    if (!newHobby) {
      toast("Please enter a valid hobby!");
      return;
    }

    if (hobbies.includes(newHobbyLC)) {
      toast("This hobby already exists!");
      return;
    }

    this.setState({ hobbies: [newHobbyLC, ...hobbies], newHobby: "" });
    toast(`${newHobby} added successfully!`);
    //
  };

  onDeleteHobby = (id) => {
    console.log("Index to delete: ", id);
    const updatedState = this.state.hobbies.filter(
      (item, index) => index !== id
    );

    console.log("updatedState: ", updatedState);
    this.setState({ hobbies: updatedState });
    toast(`${this.state.hobbies[id]} removed successfully!`);
  };

  render() {
    const { newHobby, hobbies } = this.state;
    console.log("Re-Render: ", { newHobby, hobbies });
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "400px",
        }}
      >
        <div className="form-element">
          <p style={{ fontWeight: 600 }}>New Hobby</p>
          <div style={{ display: "flex" }}>
            <input
              style={{ outline: "none", width: "100%", padding: "12px" }}
              type="text"
              placeholder="Enter a hobby"
              value={newHobby}
              onChange={this.onNewHobbyChange}
            />
            <button
              style={{ width: "200px", fontWeight: 600 }}
              onClick={this.onAddNewHobby}
            >
              Add Hobby
            </button>
          </div>
        </div>
        <div>
          <h1>My Hobbies</h1>
          <hr />
          <ul>
            {hobbies.map((current, index) => {
              return (
                <li style={{ textTransform: "capitalize" }} key={current}>
                  <div>
                    <p>{current}</p>
                    <button onClick={() => this.onDeleteHobby(index)}>
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default HobbiesFiller;
