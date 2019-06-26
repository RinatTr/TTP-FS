import axios from 'axios';
//User
export const getUser = (username) => axios.get(`/api/users/${username}`)

//Transactions
export const getTransactions = (userId) => axios.get(`/api/transactions/user/${userId}`)

//Auth
export const createUser = (bodyObj) => axios.post("/api/session/new", bodyObj)
export const login = (bodyObj) => axios.post("/api/session/login", bodyObj)
export const logout = (bodyObj) => axios.post("/api/session/logout", bodyObj)
export const isLoggedIn = () => axios.get("/api/session/isLoggedIn")
