import axios from "axios";
const baseUrl = "http://localhost:3001/api/users";

// get a user
const getOneByUsername = async (username) => {
  const res = await axios.get(`${baseUrl}?username=${username}`);
  return res.data;
};

const getOneByUserId = async (userId) => {
  const res = await axios.get(`${baseUrl}?userId=${userId}`);
  return res.data;
};

const follow = async (userIdto, userIdFrom) => {
  await axios.put(`${baseUrl}/${userIdto}/follow`, { userId: userIdFrom });
};

const unfollow = async (userIdto, userIdFrom) => {
  await axios.put(`${baseUrl}/${userIdto}/unfollow`, { userId: userIdFrom });
};

export default { getOneByUsername, getOneByUserId, follow, unfollow };
