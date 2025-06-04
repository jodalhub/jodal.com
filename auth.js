(function () {
  const user = localStorage.getItem("loggedInUser");
  const path = window.location.pathname;

  const isLoginPage = path.includes("login.html");
  const isAdminPage = path.includes("admin.html");

  if (!user && !isLoginPage && !isAdminPage) {
    alert("로그인이 필요합니다.");
    window.location.href = "login.html";
  }
})();