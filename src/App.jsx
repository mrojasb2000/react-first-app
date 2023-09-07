import './App.css'
import { TwitterCard } from "../components/twitter-card";

export function App () {
    const formatUserName = (username) => `@${username}`
    const formatElement = <span>Aprendiendo React</span>
    return (
        <div className="App">
        <TwitterCard formatElement={formatElement} formatUserName={formatUserName} user='Mauricio Rojas' username='mavrodev' avatar='Bandit' initialIsFollowing/>
        <TwitterCard formatElement={formatElement} formatUserName={formatUserName} user='Mauricio Rojas' username='mavrodev' avatar='bandit' />
        <TwitterCard formatElement={formatElement} formatUserName={formatUserName} user='Mauricio Rojas' username='mavrodev' avatar='a' />
        <TwitterCard formatElement={formatElement} formatUserName={formatUserName} user='Mauricio Rojas' username='mavrodev' avatar='b' initialIsFollowing/>
        <TwitterCard formatElement={formatElement} formatUserName={formatUserName} user='Mauricio Rojas' username='mavrodev' avatar='c' />
        </div>
    )
}