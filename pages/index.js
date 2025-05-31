import Button from '../components/Button'

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <main>
      <h1>Reusable Component Test</h1>
      <Button text="Click Me" onClick={handleClick} />
    </main>
  )
}