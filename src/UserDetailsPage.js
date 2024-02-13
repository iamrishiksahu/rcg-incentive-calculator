import React from 'react';

class UserDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      apiCalled: false
    };
  }

  componentDidMount() {
    const { codeParam } = this.props; // Access codeParam from props
    if (codeParam && !this.state.apiCalled) { // Check if codeParam exists and API call hasn't been made yet
        this.fetchUserDetails(codeParam);
      }
  }

  fetchUserDetails(codeParam) {     // Accept codeParam as argument
    fetch('http://127.0.0.1:5000/token', {
      method: 'GET',
      headers: {
        'code': codeParam
      }
    })
    .then(response => {
      if (response.ok) {
        console.log("succesful");
        return response.json();
      } else {
        throw new Error('Failed to fetch user details');
      }
      
    })
    .then(data => {
      this.setState({ userData: data, apiCalled: true });
    })
    .catch(error => {
      console.error('Error fetching user details:', error);
    });
  }

  render() {
    const { userData } = this.state;
    return (
      <div>
        Toke Details: <br /> {userData}
      </div>
    );
  }
}
export default UserDetailsPage;