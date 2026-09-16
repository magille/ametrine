import { createContext, useContext, useEffect, useMemo, useState } from "react"
import * as bundledContent from "./content"

const ContentContext = createContext({
  content: bundledContent,
  loading: false,
  error: null,
  refresh: async () => {},
})

export function ContentProvider({ children }) {
  const [content, setContent] = useState(bundledContent)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const refresh = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/content.json?t=${Date.now()}`)
      if (!response.ok) throw new Error(`Content request failed with status ${response.status}`)
      setContent(await response.json())
    } catch (requestError) {
      setError(requestError)
      console.error("Unable to load runtime website content.", requestError)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refresh()
  }, [])

  const value = useMemo(() => ({ content, loading, error, refresh }), [content, loading, error])
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

export function useContent() {
  return useContext(ContentContext)
}
