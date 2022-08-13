import { useDispatch, useSelector } from "react-redux"
import { authApi } from "../api/apiCalls";
import {useEffect} from 'react'

const Authenticator = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=> state.user);

  useEffect(() => {
    if(localStorage.token && !user.token) {
      authApi(dispatch, localStorage.token);
    }
    //eslint-disable-next-line 
  }, [])
  return (
      <div>            
      </div>
  )
}

export default Authenticator;