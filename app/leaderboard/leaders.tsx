import av2 from './assets/avatars/av-2.svg';
import throphy1 from './assets/throphies/throphy-1.svg';
import cup1 from './assets/cups/cup-1.svg';
import Image from 'next/image'

const Leaders = ({users}) => {
    if (users.length < 3)
        return (<div className="leaders-leaderboard"></div>);
    return (
        <div className="leaders-leaderboard">
            {users.map((user) => (
                <div key={user.uid} className="box-leaderboard">
                    <div>
                        <div>
                            <div className="prof-leaderboard-img">
                                {/* <Image src={av2} alt=""/> */}
                                <Image height={60} width={60} src='http://localhost:3000/avatars/av-1.svg' alt=""/>
                            </div>
                            <div className="info-leaderboard">
                                <h2>{user.username}</h2>
                                <span>RANK: {user.rank}</span>
                                {/* <img src={throphy1} alt=""/> */}
                                <Image height={60} width={60} src='http://localhost:3000/throphies/throphy-1.svg' alt=""/>
                            </div>
                        </div>
                        <div className="cup-leaderboard">
                            {/* <Image src={ cup1 } alt=""/> */}
                            <Image height={60} width={60} src='http://localhost:3000/cups/cup-1.svg' alt=""/>
                        </div>
                    </div>
                    <div className="rate-leaderboard">
                        <div className="stats-leaderboard">
                            <h4>Stats</h4>
                            <span>7-5</span>
                        </div>
                        <div className="win-leaderboard">
                            <h4>Winrate</h4>
                            <span>25%</span>
                        </div>
                        <div className="wlr-leaderboard">
                            <h4>WLR</h4>
                            <span>1.6</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Leaders;