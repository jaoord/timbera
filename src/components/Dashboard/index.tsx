import { Button } from '../ui/button'

export const Dashboard = () => {
  return (
    <div className="twp flex flex-col w-full items-center gap-8">
      <h1 className="text-4xl">Dashboard</h1>
      <input className="bg-slate-900 text-2xl px-2 py-1 rounded-md" />
      <Button size="lg">Hello world</Button>
    </div>
  )
}
