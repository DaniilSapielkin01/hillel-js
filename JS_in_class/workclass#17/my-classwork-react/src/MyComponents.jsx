import React from "react";

const Button = ({ handleClick, text }) => {
  return <div onClick={handleClick}>{text}</div>;
};

const MyComponent = props => {
  console.log(props);

  return (
    <div>
      <h1>{props.title}</h1>
      <Button handleClick={props.handleClick} text={props.text} />
    </div>
  );
};

const User = props => {
  return (
    <li>
      {props.name} , {props.job}
    </li>
  );
};

//он рендерит майкомпонент /
export class Main extends React.Component {
  state = {
    greeting: "",
    users: [
      {
        id: 1,
        job: "developer",
        name: "john"
      },
      {
        id: 2,
        job: "tester",
        name: "Key"
      },
      {
        id: 3,
        job: "DevOps",
        name: "Tom"
      }
    ]
  };
  handleClick = e => {
    console.log("event", e);

    this.setState({ greeting: " John" });
  };
  render() {
    const { greeting, users } = this.state;
    
    return (
      <React.Fragment>
        <ul>
          {users.map(item => (
            <User key={item.id} name={item.name} job={item.job} />
          ))}
        </ul>
        <MyComponent
          text="Push"
          handleClick={this.handleClick}
          title={greeting}
        >
          <h1>Children</h1>
        </MyComponent>
      </React.Fragment>
    );
  }
}
