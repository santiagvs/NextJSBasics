export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>

      <nav>
        <h2>Meus posts</h2>
        <ul>
          <li><a href="/blog/first">Meu primeiro post</a></li>
          <li><a href="/blog/second">Meu segundo post</a></li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/profile">Perfil</a></li>
        </ul>
      </nav>
    </div>
  )
}
