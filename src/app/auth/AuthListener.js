"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/utils/store/hooks";
import { addUser, removeUser } from "@/utils/store/slices/userSlice";

export function AuthListener({ serverUser }) {
  const dispatch = useAppDispatch();
  // console.log('serverUser',serverUser)

  useEffect(() => {
    if (serverUser) {
      const {
        sub: uid,
        email: email,
        full_name: name,
      } = serverUser?.user_metadata || {};

      // If a user exists on the server, sync them to Redux
      dispatch(addUser({ uid, email, name }));
    } else {
      // If no user on the server, clear the Redux store
      dispatch(removeUser());
    }
  }, [dispatch, serverUser]);

  // This component doesn't need to render any UI
  return null;
}
