import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }


  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kartikpandey0007");
    const json = await data.json();

  console.log(json)
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>Name: {this.state.userInfo.login}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact : @kpgmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
