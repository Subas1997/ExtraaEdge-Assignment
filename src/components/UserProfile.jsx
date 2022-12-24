import React, { useState } from "react";
import {
  Heart,
  HeartFill,
  PencilSquare,
  Trash,
  Envelope,
  Telephone,
  Globe,
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import UserProfileModal from "../modals/UserProfileModal";
import { USER_STORE_CONSTANTS } from "../store/helpers/store.constants";

const UserProfile = ({ user }) => {
  const [likeState, setLikeState] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteUser = (id) => {
    dispatch({
      type: USER_STORE_CONSTANTS.DELETE_USER,
      payload: id,
    });
  };
  return (
    <div className="card">
      <img
        className="card-img-top bg-light"
        src={`https://avatars.dicebear.com/v2/avataaars/${user?.name}.svg?options[mood][]=happy`}
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">{user?.name}</h5>
        <div className="row">
          <div>
            <Envelope opacity="0.8" color="light" fill="light" size="18px" />
            <span className="col-md-12 ms-2">{user?.email}</span>
          </div>
          <div>
            <Telephone opacity="0.8" color="light" fill="light" size="18px" />
            <span className="col-md-12 ms-2">{user?.phone}</span>
          </div>
          <div>
            <Globe opacity="0.8" color="light" fill="light" size="18px" />
            <span className="col-md-12 ms-2">{user?.website}</span>
          </div>
        </div>
      </div>
      <div className="card-footer bg-light border-light">
        <div className="row d-flex justify-content-around">
          <div className="d-flex col justify-content-center">
            {likeState ? (
              <Heart
                opacity="0.8"
                className="px-3"
                color="red"
                fill="red"
                size="4rem"
                role="button"
                onClick={() => {
                  setLikeState((prev) => !prev);
                }}
              />
            ) : (
              <HeartFill
                opacity="0.8"
                className="px-3"
                color="red"
                fill="red"
                size="4rem"
                role="button"
                onClick={() => {
                  setLikeState((prev) => !prev);
                }}
              />
            )}
          </div>
          <div className="d-flex col justify-content-center">
            <PencilSquare
              opacity="0.6"
              className="px-3"
              color="black"
              fill="black"
              size="4rem"
              role="button"
              onClick={() => {
                setShowModal(!showModal);
                dispatch({
                  type: USER_STORE_CONSTANTS.SET_USER_DATA,
                  payload: user,
                });
              }}
            />
          </div>
          <div className="d-flex col justify-content-center">
            <Trash
              opacity="0.6"
              className="px-3"
              color="black"
              fill="black"
              size="4rem"
              role="button"
              onClick={() => {
                handleDeleteUser(user.id);
              }}
            />
          </div>
        </div>
      </div>
      {showModal ? (
        <UserProfileModal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default UserProfile;
