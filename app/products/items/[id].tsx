import Router from "next/router";

const page = ()=>{
    const {id } = Router.query;

    return (
        <>
            <h1>
                Products: ${id}
            </h1>
        </>
    )
}

export default page