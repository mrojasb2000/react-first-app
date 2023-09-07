import './App.css'
import { TwitterCard } from "../components/twitter-card";

export function App () {
    const formatUserName = (username) => `@${username}`
    const formatElement = <span>Aprendiendo React</span>
    const users = [
        {
            user: 'Mauricio Rojas',
            username: 'mavrodev',
            avatar: 'Bandit',
            isFollowing: true
        },
        {
            user: 'Tamara Rojas',
            username: 'tamydev',
            avatar: 'a',
            isFollowing: false
        },
        {
            user: 'Fernanda Rojas',
            username: 'ferdev',
            avatar: 'b',
            isFollowing: false
        },
        {
            user: 'Carolina Magaña',
            username: 'carodev',
            avatar: 'c',
            isFollowing: true
        }
    ]
    return (
        <div className="App">
            {
                users.map(({user, username, avatar, isFollowing}) => (
                    <TwitterCard 
                        formatElement={formatElement} 
                        formatUserName={formatUserName} 
                        user={user} 
                        username={username} 
                        avatar={avatar} 
                        initialIsFollowing={isFollowing}
                        key={username}
                    />
                ))
            }
        </div>
    )
}