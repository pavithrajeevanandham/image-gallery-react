import Single from './Single';

const ImageGrid = ({images}) =>{
    return(
        <div className="image-grid">
                {
                    images.map(item => (
                        <Single key={item.id} img={item} />
                    ))
                }
        </div>    
    )
}

export default ImageGrid;