export const useAuth = () => {
  return !!localStorage.getItem("admin_token");
};
