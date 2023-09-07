import { useState } from 'react'
import '../components/twitter-card.css'

export function TwitterCard ({ formatElement, formatUserName, username, user, avatar }) {

  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ?  'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const imageSrc = `https://api.dicebear.com/7.x/adventurer/svg?seed=${avatar}`

  const handlerClick = () => {
    setIsFollowing(!isFollowing)
  }

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
                <button className={buttonClassName} onClick={handlerClick}>
                    {text}
                </button>
            </aside>
        </article>
  )
}