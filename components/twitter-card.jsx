import '../components/twitter-card.css'

export function TwitterCard ({ username, user, avatar }) {
  const imageSrc = `https://api.dicebear.com/7.x/adventurer/svg?seed=${avatar}`
  return (
        <article className='followCard'>
            <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={imageSrc} alt="avatar" />
            <div className='tw-followCard-info'>
            <strong>{username}</strong>
            <span className='tw-followCard-info-username'>@{user}</span>
            </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
  )
}
