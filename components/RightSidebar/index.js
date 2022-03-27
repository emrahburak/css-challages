
import Card from '../Card';

const RightSideBar = () => {
    return(
        <div className='right-sidebar'>
            {
                [...Array(2)].map((index,pos) => (
                    <Card key={pos} appearance={"right"}/>
                ))
            }
        </div>
    )
}


export default RightSideBar;