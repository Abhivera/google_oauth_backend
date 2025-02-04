export const googleAuthRedirect = (req, res) => {
    res.redirect("/profile");
  };
  
  export const logout = (req, res) => {
    req.logout(() => {
      res.redirect("/");
    });
  };
  