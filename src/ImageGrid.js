const ImageGrid = ({images}) =>{
    return(
        <div className="image-grid">
            {
                images.forEach(item => {
                    <Single img={item} />
                })
            }
        </div>
    )
}

export default ImageGrid;