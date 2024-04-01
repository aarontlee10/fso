export default function Content({ parts }) {
    return (
        <>
            <Part name={parts[0].name} num_exercises={parts[0].exercises}/>
            <Part name={parts[1].name} num_exercises={parts[1].exercises}/>
            <Part name={parts[2].name} num_exercises={parts[2].exercises}/>
        </>
    )
}

function Part({ name, num_exercises }) {
    return (
        <p>{name} {num_exercises}</p>
    )
}