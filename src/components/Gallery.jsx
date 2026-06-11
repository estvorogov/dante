function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div>
        <p className="eyebrow">Art direction</p>
        <h2>Милый герой, опасный мир</h2>
        <p>
          Сейчас используются заглушки из твоих референсов. Позже Codex сможет заменить их
          на реальные скриншоты, видео или WebP-ассеты.
        </p>
      </div>

      <div className="shots">
        <img
          src={`${import.meta.env.BASE_URL}preview-soft.jpeg`}
          alt="Светлый стиль игры"
        />
        <img
          src={`${import.meta.env.BASE_URL}preview-dark.jpeg`}
          alt="Тёмный стиль игры"
        />
      </div>
    </section>
  )
}

export default Gallery
