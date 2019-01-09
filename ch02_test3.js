console.dir(process.env);
/*
Command: node   "C:/Users/soominlee/brackets-nodejs/NodeExample1/ch02_test3.js"
Working directory: C:/Users/soominlee/brackets-nodejs/NodeExample1/
{ ALLUSERSPROFILE: 'C:\\ProgramData',
  APPDATA: 'C:\\Users\\soominlee\\AppData\\Roaming',
  CommonProgramFiles: 'C:\\Program Files\\Common Files',
  'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
  CommonProgramW6432: 'C:\\Program Files\\Common Files',
  COMPOSE_CONVERT_WINDOWS_PATHS: 'true',
  COMPUTERNAME: 'SOOMINLEE-PC',
  ComSpec: 'C:\\Windows\\system32\\cmd.exe',
  configsetroot: 'C:\\Windows\\ConfigSetRoot',
  DOCKER_CERT_PATH: 'C:\\Users\\soominlee\\.docker\\machine\\machines\\default',
  DOCKER_HOST: 'tcp://192.168.99.100:2376',
  DOCKER_MACHINE_NAME: 'default',
  DOCKER_TLS_VERIFY: '1',
  DOCKER_TOOLBOX_INSTALL_PATH: 'C:\\Program Files\\Docker Toolbox',
  FP_NO_HOST_CHECK: 'NO',
  HOMEDRIVE: 'C:',
  HOMEPATH: '\\Users\\soominlee',
  JAVA_HOME: 'C:\\Program Files\\Java\\jdk-10.0.1',
  LOCALAPPDATA: 'C:\\Users\\soominlee\\AppData\\Local',
  LOGONSERVER: '\\\\SOOMINLEE-PC',
  NODE_PATH:
   'C:\\Users\\soominlee\\brackets-nodejs\\NodeExample1\\node_modules',
  NO_PROXY: '192.168.99.100',
  NUMBER_OF_PROCESSORS: '4',
  OS: 'Windows_NT',
  Path:
   'C:\\Program Files (x86)\\NAT Service;C:\\Program Files\\Java\\jdk-10.0.1\\bin;C:\\ProgramData\\Oracle\\Java\\javapath;C:\\Program Files\\Common Files\\Microsoft Shared\\Windows Live;C:\\Program Files (x86)\\Common Files\\Microsoft Shared\\Windows Live;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Program Files (x86)\\Windows Live\\Shared;C:\\Program Files\\Diskeeper Corporation\\ExpressCache\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\Skype\\Phone\\;C:\\Program Files\\PuTTY\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files (x86)\\Brackets\\command;C:\\Users\\soominlee\\AppData\\Local\\atom\\bin;C:\\Program Files\\Docker Toolbox;C:\\Users\\soominlee\\AppData\\Roaming\\npm',
  PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
  PROCESSOR_ARCHITECTURE: 'AMD64',
  PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 42 Stepping 7, GenuineIntel',
  PROCESSOR_LEVEL: '6',
  PROCESSOR_REVISION: '2a07',
  ProgramData: 'C:\\ProgramData',
  ProgramFiles: 'C:\\Program Files',
  'ProgramFiles(x86)': 'C:\\Program Files (x86)',
  ProgramW6432: 'C:\\Program Files',
  PROMPT: '$P$G',
  PSModulePath: 'C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules\\',
  PUBLIC: 'C:\\Users\\Public',
  SESSIONNAME: 'Console',
  SystemDrive: 'C:',
  SystemRoot: 'C:\\Windows',
  TEMP: 'C:\\Users\\SOOMIN~1\\AppData\\Local\\Temp',
  TMP: 'C:\\Users\\SOOMIN~1\\AppData\\Local\\Temp',
  USERDOMAIN: 'soominlee-PC',
  USERNAME: 'soominlee',
  USERPROFILE: 'C:\\Users\\soominlee',
  windir: 'C:\\Windows',
  windows_tracing_flags: '3',
  windows_tracing_logfile: 'C:\\BVTBin\\Tests\\installpackage\\csilogfile.log' }
*/

console.log('OS환경변수의 값 : ' + process.env['OS']);
/*
OS환경변수의 값 : Windows_NT
*/
