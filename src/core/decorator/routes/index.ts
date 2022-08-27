import { Routes } from '@nestjs/core'
import 'reflect-metadata'

const pathRoutesKey = Symbol('__pathRoutesKey')

class Metadata {}

export const ForRouteModule = (
  pathName: string,
  path: string = 'v1'
): ClassDecorator => {
  return (module: any) => {
    if (module) {
      Reflect.defineMetadata(
        pathRoutesKey,
        [{ pathName, children: [{ path, module: module }] }],
        Metadata
      )
    }
  }
}

export const loadRoutersModulesRegister = (path: string): Routes => {
  const children = Reflect.getMetadata(pathRoutesKey, Metadata) || []

  return [
    {
      path,
      children
    }
  ]
}
