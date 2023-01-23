import { useEffect } from "react";

export default function list({ List }: any) {
    console.log(List);
    useEffect(() => {
        // const res: any = fetch('./db.JSON');
        // // const List: any = res;
        // console.log(res.data);

    }, [])
    return (
        <h1>List</h1>
    );


}
list.getInitialProps = async () => {
    const res: any = await fetch('./db.JSON');
    const List: any = await res.json();
    console.log(res);
    // let List;
    // fetch('./db.JSON')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    return { List: List };
}