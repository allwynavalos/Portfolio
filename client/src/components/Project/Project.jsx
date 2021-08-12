
import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
            <Link className="project" to={`/projects/${props.id}`}>
                <img className="project_image" src={props.image_url} width="300"/>
                <div className="title">{props.title}</div>
                
                
            </Link>
        </>
    )
}
export default Product


