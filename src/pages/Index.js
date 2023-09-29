import Post from "../components/Post"
import { useLoaderData, Form } from "react-router-dom"

function Index (props){
    const allCheese = useLoaderData()
    return <>
    <div className='landingPage'>
            <div style = {{textAlign:"center"}} >
                <h2>Create Cheese</h2>
                <Form method="POST" action="/create">
                    <input type = "text" name="name" placeholder="Cheese Name"/>
                    <input type = "text" name="origin" placeholder="Origina"/>
                    <input type = "text" name="type" placeholder="Type"/>
                    <button>Create</button>
                </Form>
            </div>
            <div>
            {allCheese.map((cheese)=> {return <Post key = {cheese.id} post={cheese}/>})}
            </div>
    </div>
</>
}

export default Index