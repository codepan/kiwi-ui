const Ftp = require('ftp')
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const chalk = require('chalk')

const Logger = {
  error (message) {
    console.log(chalk.red(message))
  },
  success (message) {
    console.log(chalk.green(message))
  }
}

class Deployer {
  constructor (options) {
    this.init(options)
  }

  init (options) {
    const { entry, output, remoteBasePath } = options
    this.options = options
    this.entry = path.resolve(process.cwd(), entry)
    this.output = path.join(remoteBasePath, output)
  }

  initFtp () {
    const ftp = new Ftp()
    ftp.connect(this.options.connectOptions)
    this.ftp = ftp
  }

  checkDeployEnv (callback) {
    console.log(this.entry)
    if (!fs.existsSync(this.entry)) {
      return Logger.error(`将要部署的目录 ${this.entry} 不存在`)
    }
    this.initFtp()

    const { ftp, output } = this
    ftp.on('ready', () => {
      ftp.list(output, (err, list) => {
        if (err || list.length === 2) {
          return callback()
        }

        inquirer.prompt([
          {
            type: 'confirm',
            name: 'continue',
            message: `远程目录${output}不是一个空目录，继续部署会覆盖掉所有内容，您确定继续吗？`,
            default: false
          }
        ]).then(answer => {
          if (answer.continue) {
            callback()
          }
        })
      })
    })
  }

  getFiles () {
    const dir = this.entry
    let files = []
    const walk = dir => {
      try {
        const list = fs.readdirSync(dir)
        list.forEach(file => {
          file = path.resolve(dir, file)
          const stat = fs.statSync(file)
          if (stat && stat.isDirectory()) {
            walk(file)
          } else {
            files.push(file)
          }
        })
      } catch (e) {
        Logger.error(`获取将要部署的目录${dir}内容失败`)
      }
    }
    walk(dir)

    return files
  }

  deploy () {
    const { ftp } = this
    const files = this.getFiles()
    if (!files.length) {
      Logger.error(`不能部署空目录${this.entry}，部署失败`)
      ftp.end()
      return
    }

    files.forEach(file => {
      let relativePath = path.relative(this.entry, file)
      let { dir, base } = path.parse(relativePath)
      if (!dir) {
        ftp.mkdir(this.output, true, err => {
          if (err) throw err
          ftp.put(file, `${this.output}/${base}`, err => {
            if (err) throw err
          })
          ftp.end()
        })
      } else {
        ftp.mkdir(`${this.output}/${dir}`, true, err => {
          if (err) throw err
          ftp.put(file, `${this.output}/${dir}/${base}`, err => {
            if (err) throw err
          })
          ftp.end()
        })
      }
    })
  }

  run () {
    this.checkDeployEnv(() => {
      this.deploy()
    })
  }
}

const deployer = new Deployer({
  entry: './doc',
  output: 'kiwi-ui',
  remoteBasePath: '/domains/codepan.cc/public_html',
  connectOptions: {
    host: '43.240.30.173',
    user: 'codepanc',
    password: '3uN1aJmp86'
  }
})

deployer.run()