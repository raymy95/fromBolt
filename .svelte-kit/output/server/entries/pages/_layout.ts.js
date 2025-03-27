import { r as redirect } from "../../chunks/index.js";
const load = ({ url }) => {
  const VALID_TOKEN = "your-secret-token";
  const token = url.searchParams.get("token");
  if (!token || token !== VALID_TOKEN) {
    throw redirect(303, "/unauthorized");
  }
  return {
    token: VALID_TOKEN
  };
};
export {
  load
};
