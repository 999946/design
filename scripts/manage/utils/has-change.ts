import {exec, execSync} from 'child_process'

export default (path:string) => {
    const gitStatus = execSync(`cd ${path};git status`)
    if (gitStatus.toString().indexOf('nothing to commit') > -1) {
        return false
    } else {
        return true
    }
}