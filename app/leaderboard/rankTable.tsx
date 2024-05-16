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
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>#{user.rank}</td>
                            <td>
                                <Image src={avatar} alt=""/>
                                <span>{user.username}</span>
                            </td>
                            <td>21-5</td>
                            <td>80%</td>
                            <td>2.4</td>
                            <td>
                                <Image src={throphy1} alt=""/>
                                {/* <span>{user.achievement}</span> */}
                                <span>Legendary</span>
                            </td>
                        </tr>
                    ))}
                </table>
        </div>
    );
}

export default RankTable;