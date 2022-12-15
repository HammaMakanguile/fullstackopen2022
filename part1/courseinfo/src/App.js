const Header = (props) => {
    return (<div><h1>{props.course}</h1></div>)
}


const Part = ({part,exo}) => {
    return <p>{part} {exo}</p>
}

const Content = ({part1,part2,part3,exo1,exo2,exo3}) => {
    return <div>
        <Part part={part1} exo={exo1} />
        <Part part={part2} exo={exo2} />
        <Part part={part3} exo={exo3} />
    </div>
}

const Total = ({exercises1,exercises2,exercises3}) => {
    return <div><p>Number of exercises {exercises1 + exercises2 + exercises3}</p></div>
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} exo3={exercises3} exo2={exercises2} exo1={exercises1} />
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
        </div>
    )
}

export default App
