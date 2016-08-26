import * as fs from 'fs'
import * as path from 'path'
import * as formatJson from 'format-json'

export interface PackageJson {
    name: string
    version: string
    description?: string
    main: string
    scripts?: {
        [name: string]: string
    }
    repository: {
        type: 'git' | 'svn'
        url: string
    }
    keywords?: Array<string>
    author: string
    license: string
    devDependencies?: {
        [module: string]: string
    }
    dependencies?: {
        [module: string]: string
    }
}

export const getPackageJSON = (filePath: string): PackageJson=> {
    return JSON.parse(fs.readFileSync(path.join(filePath, 'package.json')).toString())
}

export const writePackageJSON = (filePath: string, json: PackageJson) => {
    fs.writeFileSync(path.join(filePath, 'package.json'), formatJson.plain(json))
}