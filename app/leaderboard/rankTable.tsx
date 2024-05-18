import Image from 'next/image';
import avatar from './assets/avatars/av-1.svg';
import throphy1 from './assets/throphies/throphy-1.svg';

const RankTable = ({users}) => {
    return (
        <div className="scrollable-leaderboard">
            <table>
                <tr>
                    <th>Place</th>
                    <th>Player Name</th>
                    <th>Local stat</th>
                    <th>Winrate</th>
                    <th>WLR</th>
                    <th>Rank</th>
                </tr>
                {users.map((user, index) => (
                    <tr key={user.uid}>
                        <td>#{index + 4}</td>
                        <td>
                            <Image height={40} width={40} src='http://localhost:3000/avatars/av-1.svg' alt=""/>
                            {/* <Image src={avatar} alt=""/> */}
                            <span>{user.username}</span>
                        </td>
                        <td>{user.win}-{user.lose}</td>
                        <td>{user.lose === 0 ? '100%' : `${(user.win / user.lose).toFixed(2)}%`}</td>
                        <td>{user.lose === 0 ? 'Special' : `${(user.win / user.lose)}%`}</td>
                        <td>
                            {/* <Image src={throphy1} alt=""/> */}
                            {/* <span>{user.achievement}</span> */}
                            <Image height={40} width={40} src='http://localhost:3000/throphies/3.svg' alt=""/>
                            <span>Legendary</span>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default RankTable;