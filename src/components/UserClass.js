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

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div className="user-card bg-white shadow-lg p-6 m-4 rounded-xl border border-gray-200 max-w-sm text-center">
        <img
          src={this.state.userInfo.avatar_url}
          alt="profile"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">Name: {this.state.userInfo.login}</h2>
        <h3 className="text-lg text-gray-600 mb-1">Location: Delhi</h3>
        <h4 className="text-md text-gray-500">Contact : @kpgmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
