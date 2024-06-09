import Image from 'next/image'
import { getRank } from '../util/headers';

const Leaders = ({ users }) => {
    let cups = ['http://localhost:3000/cups/cup-1.svg', 'http://localhost:3000/cups/cup-2.svg', 'http://localhost:3000/cups/cup-3.svg'];
    let throphies = ['http://localhost:3000/throphies/throphy-1.svg', 'http://localhost:3000/throphies/throphy-2.svg', 'http://localhost:3000/throphies/throphy-3.svg'];
    if (users.length < 3)
        return (<div className="leaders-leaderboard"></div>);
    return (
        <div className="leaders">
            {
                users.map((user: any, index: number) => {
                    let rank = getRank(user.xp);
                    return <div key={user.uid} className="box">
                        <div>
                            <div className="profile">
                                <div className='image'>
                                    <img src={user.avatar} alt="avatarImage" />
                                </div>
                                <div className='detail'>
                                    <h2>{user.username}</h2>
                                    <span>RANK: {index + 1}</span>
                                    <div className='image'>
                                        {/* <img src={throphies[index]} alt="" /> */}
                                        <img src={`/ranks/${rank}.png`} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="cup">
                                <img src={cups[index]} alt="" />
                            </div>
                        </div>
                        <div className="stats">
                            <div>
                                <h4>Stats</h4>
                                <span>{user.win}-{user.lose}</span>
                            </div>
                            <div>
                                <h4>Winrate</h4>
                                <span>{user.lose === 0 ? '100%' : `${(user.win / user.lose).toFixed(2)}%`}</span>
                            </div>
                            <div>
                                <h4>WLR</h4>
                                <span>{user.lose === 0 ? 'Special' : `${(user.win / user.lose)}%`}</span>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default Leaders;



// leaders
//    box
//      first
//        profile
//          image
//          detail
//        cup
//      stats
//        div
//        div
//        div

{/* <div key={user.uid} className="box">
    <div>
        <div className="prof">
            <Image height={60} width={60} src={user.avatar} alt=""/>
            <div>
                <h2>{user.username}</h2>
                <span>RANK: {index + 1}</span>
                <Image height={60} width={60} src={throphies[index]} alt=""/>
            </div>
        </div>
        <div className='cup'>
            <Image height={60} width={60} src={cups[index]} alt=""/>
        </div>
    </div>
    <div className="rate">
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
</div> */}