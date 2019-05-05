/*Target:
C:\oracle\siebel\client\BIN\siebel.exe /c C:\oracle\siebel\client\bin\enu\sfs.cfg /b "C:\Program Files\Internet Explorer\iexplore.exe" /s C:\siebel_log\SqlLogEnu.log
Strat in:
C:\oracle\siebel\client\bin
*/
shell = new ActiveXObject("WScript.Shell");
shell.Run("taskkill /F /IM iexplore.exe");
shell.Run("C:\\oracle\\siebel\\client\\BIN\\siebel.exe /c C:\\oracle\\siebel\\client\\bin\\enu\\sfs.cfg /s C:\\siebel_log\\SqlLogEnu.log /b 'C:\\Program Files\\Internet Explorer\\iexplore.exe'");
shell = null;


