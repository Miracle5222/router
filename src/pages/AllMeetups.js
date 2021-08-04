const names = ["Roneil","Rogernel","Rinah Claire"];

function AllMeetupsPage(){
    return <div>
        <h3>Names:</h3>
        <ul>
            {names.map((value)=>{
                return <li>{value}</li>
            })}
        </ul>
    </div>
}

export default AllMeetupsPage;