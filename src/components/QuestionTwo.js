import { useState } from 'react'
import "../css/questiontwo.css"

const QuestionTwo = () => {

    const [ chosenNum, setChosenNum ] = useState(0)
    const [ answer, setAnswer ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const foobar = (num) => {
            if(num % 14 === 0) return 'foobar'
            else if(num % 2 === 0)  return 'foo'
            else if(num % 7 === 0) return 'bar'
            else return num
        }

        const res = foobar(chosenNum)
        setAnswer(res)
        setChosenNum(0)
    }

    return (
        <div className = 'questionTwo'>
            <div className="q2__answer">
                <h2>Question Two</h2>

                <div>
                    <form>
                        <input type="number" min = {0} onChange = {(e)=> setChosenNum(e.currentTarget.value)} />
                        <button onClick = {handleSubmit}>Send</button>
                    </form>
                    <span>Answer : {answer && answer}</span>
                    
                </div>
            </div>
        </div>
    )
}

export default QuestionTwo
