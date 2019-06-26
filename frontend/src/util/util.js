import axios from 'axios';
//User
export const getUser = (username) => axios.get(`/api/users/${username}`)

//Transactions
export const getTransactions = (userId) => axios.get(`/api/transactions/user/${userId}`)
export const getTotalShares = (userId) => axios.get(`/api/transactions/user/${userId}/total`)

//Auth
export const createUser = (bodyObj) => axios.post("/api/session/new", bodyObj)
export const login = (bodyObj) => axios.post("/api/session/login", bodyObj)
export const logout = (bodyObj) => axios.post("/api/session/logout", bodyObj)
export const isLoggedIn = () => axios.get("/api/session/isLoggedIn")

//IEX API Data
const prefix = "https://api.iextrading.com/1.0";
export const getLastSoldPrice = (symbolStr) => axios.get(prefix+`/tops/last?symbols=${symbolStr}`)
export const getOpenPrice = (symbol) => axios.get(prefix+`/stock/${symbol}/ohlc`)
export const getAllSymbols = () => axios.get(prefix+`/ref-data/symbols`)
