import HandbookData from "./HandbookData";
import './Handbook.scss'

function HandBook() {
    return (
        <>
            {HandbookData.map((handbook, index) => {
                return (
                    <a target='blank' href={handbook.url} className="handbook-card" key={index}>
                        <img src={handbook.img} alt={handbook.alt} />
                        <h2>{handbook.title}</h2>
                        <p>Author: {handbook.author}</p>
                    </a>
                )
            })}
        </>
    );
}

export default HandBook;