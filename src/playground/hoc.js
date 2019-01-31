//Higher Order Component (HOC) - A component (HOC) that renders another component.
// TO Reuse Code
// Render hijackking
// prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private Info Pls Don't Share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="These Are the Deatils" />,document.getElementById('app'));

const requiredAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) :(
                <p>Please Login</p>
            )}
        </div>
    );
}
const AuthInfo = requiredAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These Are the Deatils" />,document.getElementById('app'));