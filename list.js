import React from 'react';

class List extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
    //    console.log(this.props);
        return(
            <React.Fragment>
                <div style={{textAlign:'left !important'}}>
                    <div><u>Invite:</u> {this.props.obj.invite}</div>
                    <br/>
                    <div><u>vector:</u> {this.props.obj.vector}</div>
                    <br/>
                    <div><u>status:</u> {this.props.obj.status}</div>
                </div>
                <hr />
            </React.Fragment>
        );
    }
}

export default List;