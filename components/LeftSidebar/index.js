
import Card from '../Card';

const LeftSidBar = () => {
    return(
        <div >
            Kim Ne dio?

            {
                [...Array(1)].map((item,pos) => (
                    <Card key={pos} appearance={"left"}/>
                ))
            }
        </div>
    )
}


export default LeftSidBar;