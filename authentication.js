import React from 'react';
import userjson from '../src/json/users.json';

class Authentication extends React.Component{
        constructor(props)
        {
            super(props);
            this.state =
            {
                username: '',
                password: ''
            }
        }

        getUsername = (e) => 
        {
            this.setState({username:e.target.value})
        }

        getPassword = (event) =>
        {
            this.setState({password:event.target.value})
        }

        onSubmitData = () =>
        {
            let usernameData = this.state.username
            let passwordData = this.state.password

            console.log(" == User ===",usernameData+' == '+passwordData);

            const getJsonRead = userjson;
            console.log(getJsonRead);
            let selectedData = getJsonRead.users.filter(jsonData => jsonData.email === usernameData)[0];
           
            if(selectedData)
            {
                let jsonUsername = selectedData.email;
                let jsonPassword = selectedData.password;

                if(jsonUsername === usernameData && jsonPassword === passwordData)
                {
                    this.props.setAuth(selectedData);
                }

            }else
            {
                alert('Wrong Username & Password');
            }
        }


        render()
        {
            const {username,password} = this.state;
            return(
                <div id="userLogin" >
                    <div>Username: <input type="text" value={username} onChange={this.getUsername} /></div>
                    <br />
                    <div>Password: <input type="password" value={password} onChange={this.getPassword} /></div>
                    <br />
                    <button onClick={this.onSubmitData} > Submit</button>
                </div>
            )

        }
}

export default Authentication;