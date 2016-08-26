import {exec, execSync} from 'child_process'

export default (path:string) => {
    const gitStatus = execSync(`cd ${path};git status`)
    console.log(gitStatus.toString())
    if (gitStatus.indexOf('nothing to commit, working directory clean') > -1) {
        return false
    } else {
        return true
    }
}