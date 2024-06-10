export default function ForgotPassword() {
  return (
    <div>
      <h1>Forgot Password</h1>
      <p>Enter your email to reset your password</p>
      <input type="text" placeholder="Email" />

      <nav>
        <ul>
          <li><a href="/login">Voltar ao login</a></li>
        </ul>
      </nav>
    </div>
  );
}
