import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders shell heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /App Shell/i })).toBeInTheDocument()
  })
})
