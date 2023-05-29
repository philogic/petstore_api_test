import { defineConfig } from '@playwright/test'

export default defineConfig({
  use: {
    baseURL: 'https://petstore.swagger.io/v2',
  }
})