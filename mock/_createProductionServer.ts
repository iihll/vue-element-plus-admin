import { createProdMockServer } from 'vite-plugin-mock/client'

const modules = import.meta.glob('./**/*.ts', {
  import: 'default',
  eager: true
})

const mockModules: any[] = []
Object.keys(modules).forEach(async (key) => {
  if (key.includes('_')) {
    return
  }
  mockModules.push(...(modules[key] as any))
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
