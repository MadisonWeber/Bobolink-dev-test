
import "../css/questionone.css"

const QuestionOne = () => {

    /// If you wanted to do it with an actual function

    // const createList = (roomArray) => {
    //     return(
    //         <ol>
    //             {
    //             roomArray.map(room => {
    //                 return <li key = {room.room_type}>{room.room_type}, {room.vacant_rooms}, $ {room.price}</li>
    //             })
    //             }
    //         </ol>

    //     )
    // }


    const roomState = [
        { room_type: "Queen", vacant_rooms: 5, price: 100 },
        { room_type: "Double", vacant_rooms: 3, price: 75 },
        { room_type: "Twin", vacant_rooms: 8, price: 60 }
      ];
 
    
    
    return (
        <div className = 'questionOne'>
            <h2>Question One</h2>
            <div className="q1__answer">
                <ol>
                    {
                        roomState.map( room => (
                        <li key = {room.room_type}>{room.room_type}, {room.vacant_rooms}, $ {room.price}</li>
                        ))
                    }
                </ol>

                {/* {createList(roomState)} */}
            </div>
        </div>
    )
}

export default QuestionOne
