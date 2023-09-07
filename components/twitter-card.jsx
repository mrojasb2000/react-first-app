import '../components/twitter-card.css'

export function TwitterCard ({ formatElement, formatUserName, username, user, avatar }) {
  const imageSrc = `https://api.dicebear.com/7.x/adventurer/svg?seed=${avatar}`
  
  return (
        <article className='followCard'>
            <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={imageSrc} alt="avatar" />
            <div className='tw-followCard-info'>
            <strong>{user}</strong>
            <span className='tw-followCard-info-username'>{formatUserName(username)}</span>
            {formatElement}
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
