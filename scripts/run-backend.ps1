$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$javaHome = Join-Path $root '.tools\jdk-21.0.11+10'
$mvnHome = Join-Path $root '.tools\apache-maven-3.9.9'

if (-not (Test-Path "$javaHome\bin\java.exe")) {
  Write-Error "JDK não encontrado em $javaHome. Instale JDK 21 ou ajuste o caminho no script."
}
if (-not (Test-Path "$mvnHome\bin\mvn.cmd")) {
  Write-Error "Maven não encontrado em $mvnHome."
}

$env:JAVA_HOME = $javaHome
$env:PATH = "$javaHome\bin;$mvnHome\bin;$env:PATH"
Set-Location (Join-Path $root 'backend')
Write-Host "Subindo WoHackers em http://localhost:8080 ..."
mvn spring-boot:run
