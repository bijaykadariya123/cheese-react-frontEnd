import { Link } from "react-router-dom"

function Post ({post}){

    const div = {
        textAlign:'center',
        border:'3px solid',
        margin: '10px auto',
        width:'80%'
    }
    return <div style = {div}>
                <Link to={`/cheese/${post.id}`}>
                    <h1>{post.name}</h1>
                    <h3>{post.origin}</h3>
                    <h3>{post.type}</h3>
                </Link>

            </div>
}

export default Post