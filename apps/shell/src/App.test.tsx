import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the shell heading and the federated remote', async () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /App Shell/i })).toBeInTheDocument()
    expect(await screen.findByRole('heading', { name: /Remote Home/i })).toBeInTheDocument()
  })
})
