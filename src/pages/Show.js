import {Link, useLoaderData, Form} from 'react-router-dom';

function Show (props){
    const cheese = useLoaderData()
    const div ={
        textALign:'center',
        border:"3px solid green",
        width: '80',
        margin: '30px auto'
    }
    return(
        <div style={div}>
            <h1>{cheese.name}</h1>
            <h3>{cheese.origin}</h3>
            <h3>{cheese.type}</h3>
            <div style={{textAlign:"center"}}>
                <h2>Update Cheese</h2>
                    <Form method="post" action={`/update/${cheese.id}`}>
                    <input type = "text" name="name" placeholder="Cheese Name" defaultValue={cheese.name}/>
                    <input type = "text" name="origin" placeholder="Origina" defaultValue={cheese.origin}/>
                    <input type = "text" name="type" placeholder="Type" defaultValue={cheese.type}/>
                    <button>Update Cheese</button>

                </Form>

                <Form method='post' action={`/delete/${cheese.id}`}>
                <button>Delete</button>
                </Form>
                </div>
            <Link to='/'>Back to Index</Link>
        </div>
    )

}

export default Show