"use client"
import Leaders from "./leaders";
import RankTable from "./rankTable";
import Loading from "./Loading";
import useFetch from "./useFetch";
import "./main.css";
import "./normalize.css";

const Rank = () => {
    const { data, isPending, err } = useFetch('http://localhost:3000/users?order_by=win');

    return (
        <section className="rank-leaderboard">
            <div className="test">
            </div>
            <div className="container-leaderboard">
                {/* {isPending && <Loading />} */}
                {/* {err && <div>{err}</div>} */}
                {data && <Leaders users={data.slice(0, 3)}></Leaders>}
                {/* <div className="test"></div> */}
                {data&& <RankTable users={data.length >= 3 ? data.slice(3, data.length) : data}></RankTable>}
            </div>
        </section>
    );
}

export default Rank;