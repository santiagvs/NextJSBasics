export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <p>Log in to your account</p>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <nav>
        <ul>
          <li><a href="/register">Cadastro</a></li>
          <li><a href="/forgot-password">Esqueci minha senha</a></li>
        </ul>
      </nav>
    </div>

  );
}
