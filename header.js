import React from 'react';

class Header extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    logoutData = () =>
    {
        this.props.setAuth();
    }

    render()
    {
        return(
            <React.Fragment>
            
                <div className="headerCss">
                                {
                                    this.props.setFlag ? <div style={{textAlign:'right',width:'90%',cursor:'pointer'}} onClick={this.logoutData} >Logout</div> :''
                                }
                                
                            </div>
                   
               
            </React.Fragment>
            
        )
    }
}

export default Header;