import { useState } from 'react'
import {AppRouter} from "./router/AppRouter";
import {Routes} from "react-router-dom";
import {AppTheme} from "./thema";

function JournalApp() {
  const [count, setCount] = useState(0)

  return (
    <AppTheme>
        <AppRouter />
    </AppTheme>
  )
}

export default JournalApp
