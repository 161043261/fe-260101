import { createContext } from 'react'
import type { IContext } from './types'

export const Context = createContext<IContext | null>(null)
