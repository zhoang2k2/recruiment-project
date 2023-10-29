import "./VideosAndSurveys.scss"

export default function VideosAndSurveys () {
    return (
        <>
            <div className="video-container">
                {/* First Vid */}
                <a target='blank' href="https://fb.watch/nLnI-5ET2V/">
                    <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/hinh-nen-mau-tim-cho-dien-thoai-thumb.jpg" alt="video thumbnail" />
                    <div className="video-title">
                        <p>Attractive CV template</p>
                    </div>
                </a>
                {/* Second Vid */}
                <a target='blank' href="https://fb.watch/nLnIjwcwAe/">
                    <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/hinh-nen-mau-tim-cho-dien-thoai-thumb.jpg" alt="video thumbnail" />
                    <div className="video-title">
                        <p>5 office etiquette rules</p>
                    </div>
                </a>
                {/* Third Vid */}
                <a target='blank' href="https://fb.watch/nLnGFZe17y/">
                    <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/hinh-nen-mau-tim-cho-dien-thoai-thumb.jpg" alt="video thumbnail" />
                    <div className="video-title">
                        <p>5 office etiquette rules</p>
                    </div>
                </a>
                {/* Forth Vid */}
                <a target='blank' href="https://fb.watch/nLnERVZdHN/">
                    <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/hinh-nen-mau-tim-cho-dien-thoai-thumb.jpg" alt="video thumbnail" />
                    <div className="video-title">
                        <p>Human resource, the foundation of company</p>
                    </div>
                </a>
            </div>
        </>
    )
}