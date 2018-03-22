node(){
  stage('pull repo'){
    git 'https://github.com/iqbaaaaalf/wallet-web.git'
  }
  stage('build artifact'){
    sh "docker build -t walletweb ."
  }
  stage('test'){
    sh "npm test"
  }
  stage('deploy'){
    sh "docker run -dit -p 3000:3000 walletweb"
  }
}
