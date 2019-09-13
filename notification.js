import React from 'react';
import invitationJson from '../src/json/invitations.json';
import invitationJsonUpdate from '../src/json/invitations_update.json';
import List from '../src/list';

class Notification extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            getUpdateData : invitationJson.invites
        }
    }

    getView()
    {
       // const getJson = invitationJson;
      //  console.log(this.state.getUpdateData);
        let getUserDetail = localStorage.getItem('user');
     //   console.log(JSON.parse(getUserDetail).first_name);
        let selectedData = this.state.getUpdateData.filter(jsonData => jsonData.sender_id === JSON.parse(getUserDetail).first_name);
     //   console.log(selectedData);

        return selectedData.map(function(object, i){
            return <List obj={object} key={i} />;
        })
        //let getInvivation = getJson.invites.filter()
    }

    componentDidMount(prevState)
    {
        const getInvitationUpdate = invitationJsonUpdate.invites
       // console.log("---",prevState);
        let statevalue = this.state.getUpdateData;
         setTimeout(() => {
         //   console.log(getInvitationUpdate);
            this.setState({getUpdateData: this.state.getUpdateData.concat(getInvitationUpdate)})
           }, 5000);
    }

    render()
    {
        return(
            <div id="userLogin">
                <h3>Notification</h3>
                <div>
                    {this.getView()}
                </div>
            </div>
        )
    }
}

export default Notification;