import { useEffect, useState } from "react"

const Single = ({img}) =>{

    const [tags, setTags] = useState([])

    useEffect(()=>{
        setTags(img.tags.split(","))
    },[img])


    return(
        <div className="card">
            <div className="card-image">
                <img src={img.previewURL} alt="" />
            </div>
            <div className="card-action">
                <div>
                    <span><i className="material-icons">favorite</i><span className="det">{img.likes}</span></span>
                    <span><i className="material-icons">file_download</i><span className="det">{img.downloads}</span></span>
                    <span><i className="material-icons">visibility</i><span className="det">{img.views}</span></span>
                </div>
                <p>{ 
                    tags.map(item => (
                        <a className="waves-effect waves-light btn-small red lighten-1 tags">#{item.trim()}</a>
                    ))

                   }</p>
            </div>
        </div>        
    )
}

export default Single