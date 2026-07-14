import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('RemoteHome App', () => {
  it('renders remote heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Remote Home/i })).toBeInTheDocument()
  })
})
