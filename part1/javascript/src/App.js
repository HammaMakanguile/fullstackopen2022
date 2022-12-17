const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    const Header = ({course}) => {
        return <h1>{course}</h1>
    }


    const Part = ({name,exercices}) => {
        return <p>{name} {exercices}</p>
    }

    const Content = ({parts}) => {
        console.log(parts)
        return <div>
            <Part name={parts[0].name} exercices={parts[0].exercises} />
            <Part name={parts[1].name} exercices={parts[1].exercises} />
            <Part name={parts[2].name} exercices={parts[2].exercises} />
        </div>
    }


    const calcTotal = (arr) => {
        return arr.map(ex => {
            return ex.exercises
        }).reduce((previousValue,currentValue) => previousValue+currentValue,0)
    }

    const Total = ({parts}) => {
        return <p>Number of exercises {calcTotal(course.parts)}</p>

    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts}   />
            <Total parts={course.parts} />
        </div>
    )
}

export default App;