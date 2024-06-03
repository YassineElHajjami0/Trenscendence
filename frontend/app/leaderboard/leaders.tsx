import av2 from './assets/avatars/av-2.svg';
import throphy1 from './assets/throphies/throphy-1.svg';
import cup1 from './assets/cups/cup-1.svg';
import Image from 'next/image'
import Box from './Box'

const Leaders = ({users}) => {
    let cups = ['http://localhost:3000/cups/cup-1.svg', 'http://localhost:3000/cups/cup-2.svg', 'http://localhost:3000/cups/cup-3.svg'];
    let throphies = ['http://localhost:3000/throphies/throphy-1.svg', 'http://localhost:3000/throphies/throphy-2.svg', 'http://localhost:3000/throphies/throphy-3.svg'];
    if (users.length < 3)
        return (<div className="leaders-leaderboard"></div>);
    return (
        <div className="leaders-leaderboard">
            {users.map((user: any, index) => (
                <div key={user.uid} className="box-leaderboard">
                    <div>
                        <div className="prof-leaderboard">
                            <Image height={60} width={60} src={user.avatar} alt=""/>
                            <div>
                                <h2>{user.username}</h2>
                                <span>RANK: {index + 1}</span>
                                <Image height={60} width={60} src={throphies[index]} alt=""/>
                            </div>
                        </div>
                        <div className='cup-leaderboard'>
                            <Image height={60} width={60} src={cups[index]} alt=""/>
                        </div>
                    </div>
                    <div className="rate-leaderboard">
                        <div className="stats-leaderboard">
                            <h4>Stats</h4>
                            <span>{user.win}-{user.lose}</span>
                        </div>
                        <div className="win-leaderboard">
                            <h4>Winrate</h4>
                            <span>{user.lose === 0 ? '100%' : `${(user.win / user.lose).toFixed(2)}%`}</span>
                        </div>
                        <div className="wlr-leaderboard">
                            <h4>WLR</h4>
                            <span>{user.lose === 0 ? 'Special' : `${(user.win / user.lose)}%`}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Leaders;