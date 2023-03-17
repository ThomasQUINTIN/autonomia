const core = require('@actions/core');

const testResults = JSON.parse(core.getInput('test-results'));

const summary = await core.group('Generate Job Summary', async () => {
  await core.summary
    .addHeading('Test Results')
    .addTable([
      [{data: 'File', header: true}, {data: 'Result', header: true}],
      ...testResults.map((result) => [result.file, result.result])
    ])
    .addLink('View staging deployment!', 'https://github.com')
    .write();
});

core.setOutput('summary', summary);
