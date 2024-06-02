import useFetch from "./useFetch";

const Box = (uid) => {
    let { data, err, isPending } = useFetch(`http://localhost:3000/${uid}`);
    console.log(uid)
    return ( <div>${uid}</div> );
}

export default Box;