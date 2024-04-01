import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Header title={"give feedback"} className={"header"} />
      <Button onClick={() => setGood(good + 1)} title={"good"} />
      <Button onClick={() => setNeutral(neutral + 1)} title={"neutral"} />
      <Button onClick={() => setBad(bad + 1)} title={"bad"} />
      <Header title={"statistics"} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  )
}

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  );
}

const Button = ({ onClick, title }) => {
  return (
    <button onClick={onClick}>{title}</button>
  );
}

const Statistics = ({ good, neutral, bad }) => {
  let total = good + bad + neutral;
  if (total === 0) {
    return (
      <>
        No feedback given
      </>
    )
  }

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good}/>
          <StatisticLine text={"neutral"} value={neutral}/>
          <StatisticLine text={"bad"} value={bad}/>
          <StatisticLine text={"all"} value={total}/>
          <StatisticLine text={"average"} value={(good - bad) / (total)}/>
          <StatisticLine text={"positive"} value={(good / total) * 100} trail={"%"}/>
        </tbody>
      </table>
    </>
  )
}

const StatisticLine = ({ text, value, trail="" }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {trail}</td>
    </tr>
  )
}


export default App