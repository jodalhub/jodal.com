
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const id = document.getElementById("username").value;
  const pw = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.username === id && u.password === pw);

  if (!user) {
    alert("❌ 아이디 또는 비밀번호가 틀렸습니다.");
    return;
  }

  if (!user.isApproved) {
    alert("⏳ 관리자의 승인이 필요합니다.");
    return;
  }

  // 로그인 성공 → 대시보드로 이동
  alert("✅ 로그인 성공!");
  window.location.href = "dashboard.html";
});
