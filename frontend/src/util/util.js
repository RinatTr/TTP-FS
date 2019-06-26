import axios from 'axios';

//Auth
export const createUser = (bodyObj) => axios.post("/api/session/new", bodyObj)
export const login = (bodyObj) => axios.post("/api/session/login", bodyObj)
export const logout = (bodyObj) => axios.post("/api/session/logout", bodyObj)
export const isLoggedIn = () => axios.get("/api/session/isLoggedIn")
