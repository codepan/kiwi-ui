const shell = require('shelljs')
const path = require('path')
class Deployer {
  constructor (configs) {
    this.entry = configs.entry
    this.deployPath = path.join(configs.deploy.rootPath, configs.deploy.projectName)
    this.connectOptions = configs.deploy.connectOptions
  }

  deploy () {
    const { entry, deployPath } = this
    const { user, host } = this.connectOptions
    shell.exec(`ssh -T ${user}@${host} "mkdir -p ${deployPath}/"`)
    shell.exec(`scp -r ${entry}/* ${user}@${host}:${deployPath}/`)
    console.log('部署成功')
  }
  
  run () {
    this.deploy()
  }
}

const deployer = new Deployer({
  entry: path.resolve(process.cwd(), 'doc'),
  deploy: {
    projectName: 'kiwi-ui',
    rootPath: '/root/webroot',
    connectOptions: {
      host: '1.13.5.52',
      user: 'root'
    }
  }
})

deployer.run()