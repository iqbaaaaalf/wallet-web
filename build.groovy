node {
    def dockerfile = 'Dockerfile'
    def testImage = docker.build("wallet-web", "-f ${dockerfile} .")
    stage('Build'){
        testImage.inside{
            sh "npm install"
        }
    }
    stage ("Test") {
        testImage.inside{
            sh "npm run test"
        }
    }
    stage('deploy'){
      sh "npm start"
    }
}
