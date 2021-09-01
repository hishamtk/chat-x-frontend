import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router";

import CardAllChat from "components/Cards/CardAllChat";
import UserSideNavBar from "components/Navbars/UserSideNavBar";
import AuthContext from "Context/Auth/AuthContext";
import RoomContext from "Context/Room/RoomContext";
import CardAddChat from "components/Cards/CardAddChat";
import ChatMain from "components/Chat/ChatMain";

function User() {
  const roomContext = useContext(RoomContext);

  const { loadRooms } = roomContext;

  useEffect(() => {
    loadRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className=" bg-white-150">
        <div className="h-screen flex flex-row max-w-screen-pc mx-auto bg-white-50">
          <UserSideNavBar />

          <Switch>
            <Route exact path="/user/add" component={CardAddChat} />
            <Route exact path="/user" component={CardAllChat} />
          </Switch>
          <ChatMain />
        </div>
      </div>
    </>
  );
}

export default User;
