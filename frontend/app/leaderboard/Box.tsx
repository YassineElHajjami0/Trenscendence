import useFetch from "./useFetch";

const Box = (uid:any) => {
    let { data, err, isPending } = useFetch(`http://10.13.4.4:3000/${uid}`);
    console.log(uid)
    return (<div>${uid}</div>);
}

export default Box;