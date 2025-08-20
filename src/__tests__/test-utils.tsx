import { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { MemoryRouter } from 'react-router-dom'
import { messages } from '../i18n'

// Custom render function with providers
export function renderWithProviders(ui: ReactElement) {
  return render(
    <IntlProvider locale="en" messages={messages.en}>
      <MemoryRouter>
        {ui}
      </MemoryRouter>
    </IntlProvider>
  )
}

// Re-export everything else from testing library
export * from '@testing-library/react'
export { renderWithProviders as render }