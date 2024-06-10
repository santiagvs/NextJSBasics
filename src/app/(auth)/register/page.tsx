export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <p>Create an account</p>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />

      <nav>
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/forgot-password">Esqueci minha senha</a></li>
        </ul>
      </nav>
    </div>
  );
}
