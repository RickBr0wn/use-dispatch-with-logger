import React from 'react'
import { useMyHook } from '@rickbrown/use-dispatch-with-logger'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App