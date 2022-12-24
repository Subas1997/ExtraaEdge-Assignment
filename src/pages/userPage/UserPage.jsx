import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetAllUsers } from "../../api/users/get-users";
import UserProfile from "../../components/UserProfile";
import Loader from "../../loaders/Loader";
import { selectUsers } from "../../store/user/user.selector";

const UserPage = () => {
  const { isLoading } = useGetAllUsers();
  const users = useSelector(selectUsers);
  useEffect(() => {}, [users]);

  return (
    <div className="py-5 px-5">
      <div className="row card-deck">
        {!isLoading ? (
          users.map((user) => {
            return (
              <div className="col-md-3 my-3" key={user.id}>
                <UserProfile user={user} />
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default UserPage;
