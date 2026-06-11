import { Store } from 'lucide-react'

function Subscribe() {
  return (
    <section id="subscribe" className="subscribe">
      <Store size={34} />
      <h2>Скоро в App Store и Google Play</h2>
      <p>
        Форма пока локальная. Когда будет домен — подключим аналитику, сбор email и кнопки
        магазинов.
      </p>

      <form>
        <input placeholder="email для новостей" />
        <button type="button">Подписаться</button>
      </form>
    </section>
  )
}

export default Subscribe
