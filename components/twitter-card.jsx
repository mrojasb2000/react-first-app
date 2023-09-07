import '../components/twitter-card.css'

export function TwitterCard({userName, user, userAvatarUrl} ) {
    
    return (
        <article>
            <header>
            <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Gizmo" alt="avatar" />
            <strong>{userName}</strong>
            <span>{user}</span>
            </header>

            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}