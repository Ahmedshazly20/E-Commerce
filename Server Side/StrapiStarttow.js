const { exec } = require('child_process');

// شغل أمر npm run develop
exec('npm run develop', { cwd: __dirname }, (error, stdout, stderr) => {
  if (error) {
    console.error(`خطأ: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`STDERR: ${stderr}`);
  }
  console.log(`STDOUT: ${stdout}`);
});
