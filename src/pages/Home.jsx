import React from "react";
import Nav from "../component/pure/Nav";
// import { useHistory, useLocation } from 'react-router';

const Home = () => {
  // const location = useLocation();
  // const history = useHistory();

  // console.log('We are in Route:', location.pathname); // '/about | /faqs'

  // const navigate = (path) => {
  //     history.push(path);
  // }

  // const navigateProps = (path) => {
  //     history.push({
  //         pathname: path,
  //         search: '?online=true', // Query Params
  //         state: {
  //             online: true
  //         }
  //     });
  // }

  return (
    <div>
      <Nav />
      <h1>Home Page</h1>
      {/* <button onClick={() => navigateProps('/online-state')}>
                Go To Page with State / Query Params
            </button>
            <button onClick={() => navigate('/profile')}>
                Go To Profile
            </button> */}
    </div>
  );
};

export default Home;
