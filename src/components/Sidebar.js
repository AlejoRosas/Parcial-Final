import React from "react";
import { ContextProvider } from "../Global/Context";
import firebase from '@firebase/app-compat';

const signOut = () =>{
  firebase.auth().signOut();
}

const Sidebar = () => {
  const { loader, user } = React.useContext(ContextProvider);
  const username = !loader && user && user.displayName ? user.displayName : "";
  const [state] = React.useState([
    { id: 1, image: "/images/ahmed1.jpg", name: "ElPepe" },
    { id: 2, image: "/images/babar1.jpg", name: "Ete Sech" },
    { id: 1, image: "/images/shahid1.jpg", name: "Pedro" },
    { id: 1, image: "/images/shahid1.jpg", name: "Juan" },
  ]);
  return (
    <div className="sidebar">
      {!loader && user ? (
        <div className="sidebar__user">
          <div className="sidebar__user-avator">{username[0]}</div>
          <div className="sidebar__user-name">{username}</div>
          <div>
        <button onClick={signOut} style={{
          fontSize:'15px', 
          backgroundColor: '#33a8cb', 
          borderRadius: '5px',
          border: 'none',
          color: 'white',
          marginLeft: '125px',
          paddingTop: '4px',
          paddingBottom: '4px',
          paddingLeft:'10px',
          paddingRight: '10px',
          cursor: "pointer",
          }}>Cambiar</button>
      </div>
        </div>
      ) : (
        ""
      )}
      <div className="sidebar__list">
        
        {state.map((user) => (
          <div className="sidebar__list-user" key={user.id}>
            <div className="sidebar__list-a">
              <div className="sidebar__list-a-img">
                <img src={user.image} alt={user.image} />
              </div>
              <div className="sidebar__list-a-name">{user.name}</div>
            </div>
            <div className="sidebar__list-b">
              <a href="">Follow</a>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Sidebar;
