import '../components/twitter-card.css'

export function TwitterCard({userName, user, userAvatarUrl} ) {
    
    return (
        <article className='followCard'>
            <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src="https://api.dicebear.com/7.x/adventurer/svg?seed=Gizmo" alt="avatar" />
            <strong>{userName}</strong>
            <span className='tw-followCard-info-username'>{user}</span>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}