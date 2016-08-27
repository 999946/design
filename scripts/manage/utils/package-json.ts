import * as fs from 'fs'
import * as path from 'path'
import * as formatJson from 'format-json'

export const getPackageJSON = (filePath: string): Components.PackageJson=> {
    return JSON.parse(fs.readFileSync(path.join(filePath, 'package.json')).toString())
}

export const writePackageJSON = (filePath: string, json: Components.PackageJson) => {
    fs.writeFileSync(path.join(filePath, 'package.json'), formatJson.plain(json))
}