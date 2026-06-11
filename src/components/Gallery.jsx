export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div>
        <p className="eyebrow">Art direction</p>
        <h2>Милый котик на фоне лавового ада</h2>
        <p>
          Визуальный тон лендинга держится ближе к casual idle RPG: золотые UI-акценты,
          красное свечение, врата ада, демоны и герой, который остаётся белым
          котом-ангелом с нимбом и маленькими крыльями.
        </p>
      </div>

      <div className="shots">
        <img
          src={`${import.meta.env.BASE_URL}preview-soft.jpeg`}
          alt="Светлый образ белого кота-ангела Данте"
        />
        <img
          src={`${import.meta.env.BASE_URL}preview-dark.jpeg`}
          alt="Лавовый адский фон и демоны в стиле mobile RPG"
        />
      </div>
    </section>
  )
}
